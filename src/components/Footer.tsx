import { Mail, Phone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <a href="mailto:info@chesschampionship.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} />
                <span>info@chesschampionship.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={18} />
                <span>+1 (234) 567-890</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Register</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Schedule</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Rules & Regulations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Interschool Chess Championship. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
