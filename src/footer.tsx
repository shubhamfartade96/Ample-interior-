import { Instagram, Youtube, Facebook, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Youtube, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Twitter, href: '#' },
];

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/design-process', label: 'Design Process' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-[#121212] py-16 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 sm:gap-8 sm:text-left md:grid-cols-4">
          {/* Column 1: About */}
          <div className="sm:col-span-2 md:col-span-1">
             <Link href="/" className="inline-block mb-4">
                <Image
                  src="https://res.cloudinary.com/dsgtunivo/image/upload/v1773376053/Untitled_design__80_-removebg-preview_yo2tuu.png"
                  alt="Ample Interiors Logo"
                  width={160}
                  height={45}
                  className="object-contain mx-auto sm:mx-0"
                />
            </Link>
            <p className="mt-2 text-sm text-gray-400 max-w-sm mx-auto sm:mx-0">
              Ground Floor, Sampige Nagar Circle, Anekal Taluk, Electronic City, Bengaluru.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-200">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
             <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-200">Contact Us</h3>
             <ul className="mt-4 space-y-3 text-gray-400">
                <li>info@ampleinteriors.com</li>
                <li>+91 98800 78640</li>
             </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-200">Follow Us</h3>
             <div className="mt-4 flex justify-center sm:justify-start space-x-5">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ample Interiors & Furnitures. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
