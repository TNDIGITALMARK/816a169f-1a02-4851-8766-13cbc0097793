import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--footer))] text-[hsl(var(--footer-foreground))] mt-auto">
      <div className="container-marketplace py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">CONTACT US</h3>
            <div className="space-y-2 text-sm text-white/90">
              <p>email@yoursite.com</p>
              <p>+1-374-9829-324</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Copyright */}
          <div>
            <div className="flex gap-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs text-white/80">© 2025 Marketplace. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
