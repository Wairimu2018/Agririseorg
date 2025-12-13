import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="AgriRise Logo" className="h-12 w-auto brightness-0 invert" />
              <span className="text-xl font-bold">AgriRise</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Empowering farmers with innovative agricultural technology solutions for sustainable and profitable farming.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Solutions', path: '/solutions' },
                { name: 'Products', path: '/products' },
                { name: 'Updates', path: '/updates' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              {[
                { name: 'Solar Smart Irrigation', path: '/solutions/solar-smart-irrigation' },
                { name: 'Precision Farming', path: '/solutions/precision-farming' },
                { name: 'Farm Management', path: '/solutions/farm-management' },
                { name: 'AI & Data Analytics', path: '/solutions/ai-data-analytics' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:info@agririse.org" className="text-background/70 hover:text-background transition-colors text-sm">
                    info@agririse.co.ke
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+254720355380" className="text-background/70 hover:text-background transition-colors text-sm">
                    +254 720 355 380
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-foreground mt-0.5 flex-shrink-0" />
                <div className="text-background/70 text-sm">
                  Buffallo Mall<br />
                  Naivasha, Kenya
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">
              © {currentYear} AgriRise. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-background/60 hover:text-background text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-background/60 hover:text-background text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
