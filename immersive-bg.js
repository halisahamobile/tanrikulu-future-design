/* ============================================================
   TANRIKULU.DEV — Immersive atmosphere
   Cinematic flowing shader field + bokeh particle depth.
   Renders in two passes (ortho color-field backdrop +
   perspective additive particles) for natural parallax.
   ============================================================ */
(function () {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.autoClear = false;

  // ---------- pass 1: flowing color field (ortho fullscreen quad) ----------
  const bgScene = new THREE.Scene();
  const bgCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const uniforms = {
    u_time:   { value: 0 },
    u_mouse:  { value: new THREE.Vector2(0.5, 0.5) },
    u_aspect: { value: 1 },
    u_scroll: { value: 0 },
  };

  const fieldMat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      varying vec2 vUv;
      void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
    `,
    fragmentShader: `
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2  u_mouse;
      uniform float u_aspect;
      uniform float u_scroll;

      float hash(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p, p+45.32); return fract(p.x*p.y); }
      float noise(vec2 p){
        vec2 i = floor(p), f = fract(p);
        float a = hash(i), b = hash(i+vec2(1.,0.)), c = hash(i+vec2(0.,1.)), d = hash(i+vec2(1.,1.));
        vec2 u = f*f*(3.-2.*f);
        return mix(a,b,u.x) + (c-a)*u.y*(1.-u.x) + (d-b)*u.x*u.y;
      }
      float fbm(vec2 p){
        float v = 0.0, a = 0.5;
        for(int i=0;i<6;i++){ v += a*noise(p); p *= 2.0; a *= 0.5; }
        return v;
      }
      void main(){
        vec2 uv = vUv;
        vec2 p  = uv; p.x *= u_aspect;
        float t = u_time*0.035 + u_scroll*0.6;

        vec2 q = vec2(fbm(p*1.4 + t), fbm(p*1.4 - t + 5.0));
        vec2 r = vec2(fbm(p*1.4 + q*1.2 + t*1.3 + 1.7), fbm(p*1.4 + q*1.2 - t));
        float f = fbm(p*1.4 + r*1.6);

        vec3 cream  = vec3(0.937, 0.902, 0.839);
        vec3 peach  = vec3(0.886, 0.733, 0.612);
        vec3 rose    = vec3(0.831, 0.604, 0.561);
        vec3 sage    = vec3(0.620, 0.678, 0.553);
        vec3 ochre   = vec3(0.855, 0.667, 0.380);
        vec3 plum    = vec3(0.541, 0.376, 0.467);

        vec3 col = cream;
        col = mix(col, peach,    smoothstep(0.20, 0.95, f)   * 0.55);
        col = mix(col, sage,     smoothstep(0.45, 1.00, q.x)  * 0.40);
        col = mix(col, rose,     smoothstep(0.50, 0.98, r.x)  * 0.45);
        col = mix(col, ochre,    smoothstep(0.62, 1.00, q.y)  * 0.30);
        col = mix(col, plum,     smoothstep(0.78, 1.00, r.y)  * 0.22);

        // soft warm light following the cursor
        vec2 m = u_mouse; m.x *= u_aspect;
        float d = distance(p, m);
        col = mix(col, ochre, 0.12 * exp(-d*2.4));
        col = mix(col, rose,  0.08 * exp(-d*1.3));

        // gentle warm vignette for a gallery framing (light, not dark)
        float vig = smoothstep(1.25, 0.30, distance(uv, vec2(0.5)));
        col = mix(col * 0.86, col, vig);

        gl_FragColor = vec4(col, 1.0);
      }
    `,
    depthTest: false,
    depthWrite: false,
  });
  bgScene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), fieldMat));

  // ---------- pass 2: bokeh particle depth (perspective + additive) ----------
  const fgScene = new THREE.Scene();
  const fgCam = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  fgCam.position.z = 18;

  // soft round sprite
  const sprC = document.createElement('canvas');
  sprC.width = sprC.height = 128;
  const sx = sprC.getContext('2d');
  const grd = sx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grd.addColorStop(0, 'rgba(255,255,255,1)');
  grd.addColorStop(0.25, 'rgba(255,255,255,0.5)');
  grd.addColorStop(1, 'rgba(255,255,255,0)');
  sx.fillStyle = grd; sx.fillRect(0, 0, 128, 128);
  const sprite = new THREE.CanvasTexture(sprC);

  const COUNT = reduced ? 120 : 340;
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const sizes = new Float32Array(COUNT);
  const speeds = new Float32Array(COUNT);

  const palette = [
    [0.753, 0.388, 0.239], // terracotta
    [0.831, 0.604, 0.561], // dusty rose
    [0.620, 0.678, 0.553], // sage
    [0.855, 0.667, 0.380], // ochre
    [0.541, 0.376, 0.467], // plum
    [1.000, 0.984, 0.945], // warm white
  ];
  for (let i = 0; i < COUNT; i++) {
    positions[i*3+0] = (Math.random() - 0.5) * 48;
    positions[i*3+1] = (Math.random() - 0.5) * 30;
    positions[i*3+2] = (Math.random() - 0.5) * 30 - 4;
    const c = palette[(Math.random() * palette.length) | 0];
    // bias toward dim so it stays cinematic
    const dim = 0.35 + Math.random() * 0.65;
    colors[i*3+0] = c[0] * dim;
    colors[i*3+1] = c[1] * dim;
    colors[i*3+2] = c[2] * dim;
    sizes[i] = 0.6 + Math.random() * 3.4;
    speeds[i] = 0.1 + Math.random() * 0.5;
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  pGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  pGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const pMat = new THREE.ShaderMaterial({
    uniforms: { u_tex: { value: sprite }, u_time: { value: 0 } },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      uniform float u_time;
      void main(){
        vColor = color;
        vec3 pos = position;
        pos.y += sin(u_time*0.3 + position.x*0.2) * 0.4;
        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (300.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      uniform sampler2D u_tex;
      void main(){
        float a = texture2D(u_tex, gl_PointCoord).a;
        gl_FragColor = vec4(vColor, a);
      }
    `,
    transparent: true,
    vertexColors: true,
    blending: THREE.NormalBlending,
    depthTest: false,
    depthWrite: false,
  });
  const points = new THREE.Points(pGeo, pMat);
  fgScene.add(points);

  // ---------- interaction state ----------
  const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
  window.addEventListener('mousemove', (e) => {
    mouse.tx = e.clientX / window.innerWidth;
    mouse.ty = e.clientY / window.innerHeight;
  });
  window.addEventListener('touchmove', (e) => {
    if (!e.touches[0]) return;
    mouse.tx = e.touches[0].clientX / window.innerWidth;
    mouse.ty = e.touches[0].clientY / window.innerHeight;
  }, { passive: true });

  let scrollN = 0;
  function onScroll() {
    const max = document.body.scrollHeight - window.innerHeight;
    scrollN = max > 0 ? window.scrollY / max : 0;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function resize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false);
    uniforms.u_aspect.value = w / h;
    fgCam.aspect = w / h;
    fgCam.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  // ---------- render loop ----------
  const clock = new THREE.Clock();
  function tick() {
    const dt = clock.getDelta();
    const t = clock.getElapsedTime();

    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;

    uniforms.u_time.value = t;
    uniforms.u_mouse.value.set(mouse.x, 1.0 - mouse.y);
    uniforms.u_scroll.value = scrollN;
    pMat.uniforms.u_time.value = t;

    // camera drifts with cursor + scroll for a "camera move" feel
    fgCam.position.x += ((mouse.x - 0.5) * 6 - fgCam.position.x) * 0.04;
    fgCam.position.y += ((-(mouse.y - 0.5) * 4) - fgCam.position.y) * 0.04;
    fgCam.position.z = 18 - scrollN * 6;
    fgCam.lookAt(0, 0, -4);

    points.rotation.y = t * 0.02 + (mouse.x - 0.5) * 0.3;
    points.rotation.x = scrollN * 0.4;

    renderer.clear();
    renderer.render(bgScene, bgCam);
    renderer.render(fgScene, fgCam);
    requestAnimationFrame(tick);
  }
  tick();
})();
