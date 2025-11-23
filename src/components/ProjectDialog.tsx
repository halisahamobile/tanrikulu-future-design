import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Send, Smartphone, Globe, Palette } from "lucide-react";

interface ProjectDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  { value: "mobile", label: "Mobile Application", icon: Smartphone },
  { value: "website", label: "Website Development", icon: Globe },
  { value: "design", label: "Graphic Design", icon: Palette },
];

const ProjectDialog = ({ open, onOpenChange }: ProjectDialogProps) => {
  const [selectedService, setSelectedService] = useState<string>("");
  const [projectDetails, setProjectDetails] = useState<string>("");

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setSelectedService("");
      setProjectDetails("");
    }
  }, [open]);

  const handleSendEmail = () => {
    const serviceLabel = services.find((s) => s.value === selectedService)?.label || "Not specified";
    const subject = encodeURIComponent(`New Project Request - ${serviceLabel}`);
    const body = encodeURIComponent(
      `Service Type: ${serviceLabel}\n\nProject Details:\n${projectDetails}`
    );
    const mailtoLink = `mailto:contact@tanrikulu.dev?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const isFormValid = selectedService && projectDetails.trim().length > 0;


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-card border-border overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <DialogHeader className="relative z-10">
          <DialogTitle className="text-2xl font-display">Start Your Project</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us about your project and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4 relative z-10">
          {/* Service Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Select Service</Label>
            <RadioGroup value={selectedService} onValueChange={setSelectedService}>
              <div className="grid gap-4">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.value} className="flex items-center space-x-3">
                      <RadioGroupItem value={service.value} id={service.value} />
                      <Label
                        htmlFor={service.value}
                        className="flex items-center gap-3 cursor-pointer flex-1 p-3 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <span className="font-medium">{service.label}</span>
                      </Label>
                    </div>
                  );
                })}
              </div>
            </RadioGroup>
          </div>

          {/* Project Details */}
          <div className="space-y-3">
            <Label htmlFor="details" className="text-base font-semibold">
              Project Details
            </Label>
            <Textarea
              id="details"
              placeholder="Please describe your project in detail. Include your goals, requirements, timeline, and any other relevant information..."
              value={projectDetails}
              onChange={(e) => setProjectDetails(e.target.value)}
              className="min-h-[150px] resize-none bg-background/50"
            />
            <p className="text-xs text-muted-foreground">
              The more details you provide, the better we can understand your needs.
            </p>
          </div>
        </div>

        <DialogFooter className="relative z-10">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-border"
          >
            Cancel
          </Button>
          <Button
            variant="hero"
            onClick={handleSendEmail}
            disabled={!isFormValid}
            className="group"
          >
            <Send className="mr-2 h-4 w-4" />
            Send Request
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;

