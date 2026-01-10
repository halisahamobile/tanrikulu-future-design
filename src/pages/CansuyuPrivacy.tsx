import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const CansuyuPrivacy = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/cansuyu" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-mono text-sm tracking-widest">BACK TO CANSUYU</span>
            </Link>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.0"
                preserveAspectRatio="xMidYMid meet"
                viewBox="258.03 280.9 509.19 459.1"
                width="18"
                height="18"
                className="text-primary"
              >
                <g
                  transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M2701 7408 c-57 -29 -101 -85 -112 -140 -13 -67 -11 -601 3 -655 14 -59 78 -127 133 -142 27 -7 281 -11 808 -11 l767 0 0 -1058 0 -1057 -47 -25 c-67 -35 -134 -105 -169 -175 -26 -54 -29 -70 -29 -160 0 -88 3 -107 27 -157 34 -74 112 -152 186 -186 81 -38 221 -43 305 -12 106 40 200 136 229 234 7 23 12 79 13 126 0 77 -3 92 -33 152 -36 74 -105 143 -177 178 l-45 22 0 1061 c-1 584 -5 1093 -9 1130 -11 79 -41 126 -101 157 -38 19 -60 20 -825 20 l-785 0 0 234 0 234 53 6 c75 8 2592 5 2782 -4 255 -12 475 -66 692 -170 539 -257 914 -775 1035 -1430 30 -159 32 -550 5 -715 -63 -379 -180 -692 -365 -975 -307 -471 -749 -752 -1274 -809 -103 -12 -555 -15 -582 -5 -14 5 -16 28 -16 145 l0 139 120 0 c658 0 1176 324 1483 927 146 287 217 588 217 916 -1 446 -142 823 -421 1121 -151 161 -380 308 -576 370 -189 59 -256 67 -578 73 -332 6 -364 2 -414 -49 -65 -67 -62 20 -59 -1408 l3 -1295 25 -43 c15 -27 42 -54 70 -70 44 -26 50 -27 235 -30 163 -3 205 0 295 18 252 51 413 157 505 331 59 113 65 156 65 510 l0 317 54 26 c33 16 77 51 109 86 183 197 118 508 -129 622 -41 19 -66 23 -154 23 -88 0 -113 -4 -154 -23 -157 -72 -244 -219 -234 -396 4 -65 11 -93 35 -141 39 -75 111 -148 181 -182 l54 -26 -4 -306 c-4 -291 -5 -309 -27 -364 -42 -106 -151 -191 -297 -232 -37 -11 -116 -19 -216 -22 l-158 -6 0 1207 0 1206 198 0 c304 0 444 -23 623 -103 132 -60 228 -126 334 -232 129 -129 230 -288 298 -470 175 -471 82 -1091 -231 -1540 -70 -101 -244 -274 -342 -341 -148 -102 -300 -166 -488 -205 -73 -16 -153 -23 -328 -27 -231 -7 -231 -7 -266 -34 -61 -46 -68 -74 -68 -265 0 -92 -3 -178 -6 -190 l-6 -23 -634 0 -634 0 0 1008 0 1007 55 28 c30 16 74 50 99 77 187 200 134 507 -110 631 -63 32 -74 34 -163 34 -112 0 -174 -19 -248 -75 -127 -95 -185 -249 -153 -400 25 -119 124 -243 223 -278 l47 -17 0 -1028 c0 -748 3 -1041 12 -1074 17 -70 87 -137 156 -152 37 -8 373 -11 1115 -11 997 0 1070 1 1193 19 491 73 901 308 1227 706 304 370 489 814 553 1322 19 155 22 487 5 628 -82 679 -447 1274 -991 1615 -221 139 -456 225 -745 273 -129 21 -148 21 -1655 24 l-1525 4 -44 -23z m872 -1772 c18 -7 47 -30 65 -50 27 -31 32 -45 32 -87 0 -99 -62 -169 -148 -169 -87 0 -150 53 -159 135 -14 124 100 217 210 171z m2525 -76 c46 -28 72 -76 72 -133 0 -58 -19 -98 -62 -131 -50 -37 -94 -41 -148 -14 -83 42 -113 131 -74 215 37 76 140 107 212 63z m-1586 -1446 c59 -30 87 -129 54 -192 -27 -52 -62 -75 -118 -79 -41 -3 -61 1 -86 16 -73 47 -95 143 -47 214 14 20 27 37 28 37 1 0 20 7 42 14 42 15 83 12 127 -10z"
                  />
                </g>
              </svg>
              <h1 className="font-mono text-primary text-lg tracking-widest">TANRIKULU.DEV</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
          <h1 className="text-4xl font-bold font-display mb-8">CanSuyu Privacy Policy</h1>
          
          <h2 className="text-2xl font-semibold mt-12 mb-6">Gizlilik Politikası / Privacy Policy</h2>
          <p className="text-base font-medium mb-8">
            <strong>Son Güncelleme Tarihi / Last Updated:</strong> 10 Ocak 2025 / January 10, 2025
          </p>

          <hr className="border-border my-8" />

          <h2 className="text-2xl font-semibold mt-12 mb-6">Türkçe</h2>

          <h3 className="text-xl font-semibold mt-8 mb-4">1. Giriş</h3>
          <p className="mb-4">
            CanSuyu ("biz", "bizim" veya "uygulama"), bitki bakımı ve takibi için geliştirilmiş bir mobil uygulamadır. 
            Bu Gizlilik Politikası, CanSuyu uygulamasını kullandığınızda topladığımız, kullandığımız, paylaştığımız ve koruduğumuz bilgileri açıklar.
          </p>
          <p className="mb-8">
            Bu uygulamayı kullanarak, bu Gizlilik Politikası'nda açıklanan uygulamaları kabul etmiş olursunuz. 
            Eğer bu politikayı kabul etmiyorsanız, lütfen uygulamayı kullanmayın.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">2. Topladığımız Bilgiler</h3>
          <p className="mb-4">CanSuyu, uygulamanın temel işlevselliğini sağlamak için aşağıdaki bilgileri toplar:</p>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.1 Hesap Bilgileri</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>E-posta Adresi</strong>: Hesap oluşturma ve kimlik doğrulama için</li>
            <li><strong>Ad ve Soyad</strong>: Kullanıcı profili için</li>
            <li><strong>Kullanıcı Kimliği (User ID)</strong>: Hesap yönetimi ve veri ilişkilendirme için</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.2 Bitki Bilgileri</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Bitki adları ve türleri</li>
            <li>Bitki fotoğrafları (kamera veya galeriden)</li>
            <li>Bakım takvimi ve sulama geçmişi</li>
            <li>Bitki konumu, ışık seviyesi ve saksı türü bilgileri</li>
            <li>Analiz geçmişi (bitki sağlık analizleri)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.3 Kullanım Verileri</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Uygulama kullanım istatistikleri</li>
            <li>Toplam bitki sayısı ve bakım serisi (streak) bilgileri</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.4 Satın Alma Bilgileri</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>In-app purchase abonelik geçmişi</li>
            <li>Satın alma token'ları (işlem doğrulama için)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.5 Cihaz Bilgileri</h4>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Cihaz kimliği (uygulama işlevselliği için)</li>
            <li>Push notification tercihleri</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">3. Bilgilerin Kullanım Amacı</h3>
          <p className="mb-4">Topladığımız bilgileri aşağıdaki amaçlar için kullanırız:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Uygulama İşlevselliği</strong>: Bitki takibi, bakım hatırlatıcıları ve analiz özelliklerini sağlamak</li>
            <li><strong>Hesap Yönetimi</strong>: Kullanıcı hesabının oluşturulması, yönetilmesi ve güvenliği</li>
            <li><strong>İletişim</strong>: Önemli uygulama güncellemeleri ve bildirimler göndermek</li>
            <li><strong>Abonelik Yönetimi</strong>: Premium özellikler ve abonelik işlemlerini yönetmek</li>
            <li><strong>Müşteri Desteği</strong>: Destek taleplerinize yanıt vermek</li>
            <li><strong>Uygulama İyileştirmesi</strong>: Uygulamanın performansını ve kullanıcı deneyimini geliştirmek</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">4. Üçüncü Taraf Hizmetler</h3>
          <p className="mb-4">CanSuyu, uygulamanın çalışması için aşağıdaki üçüncü taraf hizmet sağlayıcıları kullanır:</p>

          <h4 className="text-lg font-semibold mt-6 mb-3">4.1 Supabase</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Kullanım Amacı</strong>: Veritabanı ve kimlik doğrulama hizmetleri</li>
            <li><strong>Toplanan Veriler</strong>: Tüm kullanıcı verileri (hesap bilgileri, bitki verileri, fotoğraflar)</li>
            <li><strong>Gizlilik Politikası</strong>: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a></li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">4.2 Apple Sign In</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Kullanım Amacı</strong>: Apple hesabı ile giriş yapma</li>
            <li><strong>Toplanan Veriler</strong>: E-posta adresi, ad (opsiyonel)</li>
            <li><strong>Gizlilik Politikası</strong>: <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a></li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">4.3 Google Sign In</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Kullanım Amacı</strong>: Google hesabı ile giriş yapma</li>
            <li><strong>Toplanan Veriler</strong>: E-posta adresi, ad, profil fotoğrafı (opsiyonel)</li>
            <li><strong>Gizlilik Politikası</strong>: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">4.4 App Store / Google Play</h4>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Kullanım Amacı</strong>: In-app purchase işlemleri</li>
            <li><strong>Toplanan Veriler</strong>: Satın alma geçmişi ve ödeme bilgileri</li>
            <li><strong>Gizlilik Politikası</strong>: <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">Apple App Store Privacy</a> / <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Play Privacy</a></li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">5. Veri Güvenliği</h3>
          <p className="mb-4">Verilerinizin güvenliğini sağlamak için aşağıdaki önlemleri alıyoruz:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Şifreleme</strong>: Tüm veri aktarımları HTTPS üzerinden şifrelenmiş olarak yapılır</li>
            <li><strong>Güvenli Depolama</strong>: Veriler güvenli sunucularda saklanır</li>
            <li><strong>Erişim Kontrolü</strong>: Verilere yalnızca yetkili personel erişebilir</li>
            <li><strong>Düzenli Güvenlik Güncellemeleri</strong>: Güvenlik açıklarını önlemek için düzenli güncellemeler yapılır</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">6. Veri Saklama</h3>
          <p className="mb-4">Verilerinizi, hesabınız aktif olduğu sürece saklarız. Hesabınızı silerseniz, aşağıdaki süre içinde verileriniz silinir:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Hesap Bilgileri</strong>: Hesap silme işleminden sonra 30 gün içinde</li>
            <li><strong>Bitki Verileri</strong>: Hesap silme işleminden sonra 30 gün içinde</li>
            <li><strong>Fotoğraflar</strong>: Hesap silme işleminden sonra 30 gün içinde</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">7. Kullanıcı Hakları</h3>
          <p className="mb-4">GDPR ve diğer veri koruma yasaları uyarınca, aşağıdaki haklara sahipsiniz:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Erişim Hakkı</strong>: Topladığımız verilerinize erişme hakkı</li>
            <li><strong>Düzeltme Hakkı</strong>: Yanlış veya eksik verilerinizi düzeltme hakkı</li>
            <li><strong>Silme Hakkı</strong>: Verilerinizin silinmesini talep etme hakkı</li>
            <li><strong>Veri Taşınabilirliği</strong>: Verilerinizi başka bir hizmete aktarma hakkı</li>
            <li><strong>İtiraz Hakkı</strong>: Verilerinizin işlenmesine itiraz etme hakkı</li>
            <li><strong>Kısıtlama Hakkı</strong>: Verilerinizin işlenmesini kısıtlama hakkı</li>
          </ul>
          <p className="mb-8">
            Bu haklarınızı kullanmak için bize <strong>tanrikuludev@gmail.com</strong> adresinden e-posta gönderebilirsiniz.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">8. Çocukların Gizliliği</h3>
          <p className="mb-8">
            CanSuyu, 13 yaş altındaki çocuklardan bilerek kişisel bilgi toplamaz. Uygulama 13 yaş ve üzeri kullanıcılar için tasarlanmıştır. 
            13 yaş altındaki bir çocuktan veri toplandığını fark edersek, derhal bu verileri sileriz.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">9. Çerezler ve İzleme Teknolojileri</h3>
          <p className="mb-8">
            CanSuyu, kullanıcıların izlenmesi için çerezler veya üçüncü taraf reklam teknolojileri kullanmaz. Uygulama içi reklam bulunmamaktadır.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">10. Gizlilik Politikası Değişiklikleri</h3>
          <p className="mb-8">
            Bu Gizlilik Politikası'nı zaman zaman güncelleyebiliriz. Önemli değişiklikler yaptığımızda, uygulama içi bildirim veya e-posta yoluyla sizi bilgilendireceğiz. 
            Değişikliklerin yürürlüğe girdiği tarih, politikanın en üstünde "Son Güncelleme Tarihi" olarak belirtilecektir.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">11. İletişim</h3>
          <p className="mb-4">Gizlilik ile ilgili sorularınız, endişeleriniz veya haklarınızı kullanmak için bize ulaşabilirsiniz:</p>
          <ul className="list-disc pl-6 mb-16 space-y-2">
            <li><strong>Email</strong>: <a href="mailto:tanrikuludev@gmail.com">tanrikuludev@gmail.com</a></li>
            <li><strong>Website</strong>: <a href="https://tanrikulu.dev/cansuyu" target="_blank" rel="noopener noreferrer">tanrikulu.dev/cansuyu</a></li>
          </ul>

          <hr className="border-border my-12" />

          <h2 className="text-2xl font-semibold mt-12 mb-6">English</h2>

          <h3 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h3>
          <p className="mb-4">
            CanSuyu ("we", "our", or "the app") is a mobile application developed for plant care and tracking. 
            This Privacy Policy describes the information we collect, use, share, and protect when you use the CanSuyu application.
          </p>
          <p className="mb-8">
            By using this application, you agree to the practices described in this Privacy Policy. 
            If you do not agree with this policy, please do not use the application.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h3>
          <p className="mb-4">CanSuyu collects the following information to provide the core functionality of the application:</p>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.1 Account Information</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Email Address</strong>: For account creation and authentication</li>
            <li><strong>Name and Surname</strong>: For user profile</li>
            <li><strong>User ID</strong>: For account management and data association</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.2 Plant Information</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Plant names and species</li>
            <li>Plant photographs (from camera or gallery)</li>
            <li>Care schedule and watering history</li>
            <li>Plant location, light level, and pot type information</li>
            <li>Analysis history (plant health analyses)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.3 Usage Data</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Application usage statistics</li>
            <li>Total plant count and care streak information</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.4 Purchase Information</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>In-app purchase subscription history</li>
            <li>Purchase tokens (for transaction verification)</li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">2.5 Device Information</h4>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Device identifier (for application functionality)</li>
            <li>Push notification preferences</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">3. Purpose of Information Use</h3>
          <p className="mb-4">We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Application Functionality</strong>: Providing plant tracking, care reminders, and analysis features</li>
            <li><strong>Account Management</strong>: Creating, managing, and securing user accounts</li>
            <li><strong>Communication</strong>: Sending important application updates and notifications</li>
            <li><strong>Subscription Management</strong>: Managing premium features and subscription transactions</li>
            <li><strong>Customer Support</strong>: Responding to your support requests</li>
            <li><strong>Application Improvement</strong>: Improving application performance and user experience</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">4. Third-Party Services</h3>
          <p className="mb-4">CanSuyu uses the following third-party service providers for the application to function:</p>

          <h4 className="text-lg font-semibold mt-6 mb-3">4.1 Supabase</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Purpose</strong>: Database and authentication services</li>
            <li><strong>Data Collected</strong>: All user data (account information, plant data, photographs)</li>
            <li><strong>Privacy Policy</strong>: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a></li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">4.2 Apple Sign In</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Purpose</strong>: Signing in with Apple account</li>
            <li><strong>Data Collected</strong>: Email address, name (optional)</li>
            <li><strong>Privacy Policy</strong>: <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy Policy</a></li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">4.3 Google Sign In</h4>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Purpose</strong>: Signing in with Google account</li>
            <li><strong>Data Collected</strong>: Email address, name, profile photo (optional)</li>
            <li><strong>Privacy Policy</strong>: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-3">4.4 App Store / Google Play</h4>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Purpose</strong>: In-app purchase transactions</li>
            <li><strong>Data Collected</strong>: Purchase history and payment information</li>
            <li><strong>Privacy Policy</strong>: <a href="https://www.apple.com/privacy/" target="_blank" rel="noopener noreferrer">Apple App Store Privacy</a> / <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Play Privacy</a></li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h3>
          <p className="mb-4">We take the following measures to ensure the security of your data:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Encryption</strong>: All data transfers are encrypted via HTTPS</li>
            <li><strong>Secure Storage</strong>: Data is stored on secure servers</li>
            <li><strong>Access Control</strong>: Only authorized personnel can access data</li>
            <li><strong>Regular Security Updates</strong>: Regular updates are performed to prevent security vulnerabilities</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">6. Data Retention</h3>
          <p className="mb-4">We retain your data as long as your account is active. If you delete your account, your data will be deleted within the following timeframe:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Account Information</strong>: Within 30 days after account deletion</li>
            <li><strong>Plant Data</strong>: Within 30 days after account deletion</li>
            <li><strong>Photographs</strong>: Within 30 days after account deletion</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-4">7. User Rights</h3>
          <p className="mb-4">Under GDPR and other data protection laws, you have the following rights:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Right of Access</strong>: Right to access your data we collect</li>
            <li><strong>Right of Rectification</strong>: Right to correct your inaccurate or incomplete data</li>
            <li><strong>Right to Erasure</strong>: Right to request deletion of your data</li>
            <li><strong>Data Portability</strong>: Right to transfer your data to another service</li>
            <li><strong>Right to Object</strong>: Right to object to processing of your data</li>
            <li><strong>Right to Restriction</strong>: Right to restrict processing of your data</li>
          </ul>
          <p className="mb-8">
            To exercise these rights, you can contact us at <strong>tanrikuludev@gmail.com</strong>.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">8. Children's Privacy</h3>
          <p className="mb-8">
            CanSuyu does not knowingly collect personal information from children under 13 years of age. 
            The application is designed for users aged 13 and over. If we discover that we have collected data from a child under 13, we will immediately delete that data.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">9. Cookies and Tracking Technologies</h3>
          <p className="mb-8">
            CanSuyu does not use cookies or third-party advertising technologies to track users. The application does not contain in-app advertising.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">10. Privacy Policy Changes</h3>
          <p className="mb-8">
            We may update this Privacy Policy from time to time. When we make significant changes, we will notify you through in-app notifications or email. 
            The effective date of changes will be indicated as "Last Updated" at the top of the policy.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-4">11. Contact</h3>
          <p className="mb-4">For questions, concerns, or to exercise your rights regarding privacy, you can contact us:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Email</strong>: <a href="mailto:tanrikuludev@gmail.com">tanrikuludev@gmail.com</a></li>
            <li><strong>Website</strong>: <a href="https://tanrikulu.dev/cansuyu" target="_blank" rel="noopener noreferrer">tanrikulu.dev/cansuyu</a></li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default CansuyuPrivacy;
