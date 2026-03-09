import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Data & AI Solutions", href: "/services/data-ai" },
    { name: "ML Engineering", href: "/services/ml-engineering" },
    { name: "Intelligent Automation", href: "/services/intelligent-automation" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops" },
    { name: "Data Engineering", href: "/services/data-engineering" },
    { name: "Technology Staffing", href: "/services/technology-staffing" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="Cloud Resources"
                width={200}
                height={19}
                className="h-5 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Transforming enterprises with AI-native solutions, machine learning engineering, and data intelligence that deliver measurable business outcomes.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-400/30 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-400/30 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-400/30 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-5">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">5005 W Royal Ln #200, Irving TX 75063</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:info@cloudresources.net" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">info@cloudresources.net</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+14694587222" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">(469) 458-7222</a>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <MapPin className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">Gowra Fountain Head, 6th Floor, Suite #610, Madhapur, Hyderabad 500081</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} Cloud Resources, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
