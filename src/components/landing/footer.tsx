import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-slate-300">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-white">Inextel</h3>
            <p className="mt-2 text-slate-400">Transforming brands with innovative AI strategies.</p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://www.facebook.com/people/InExtel/61567379034814/" className="text-slate-400 hover:text-primary"><Facebook /></Link>
              <Link href="https://www.instagram.com/in_extel/?igsh=cjlmbGRla3E3Ymxq&utm_source=qr#" className="text-slate-400 hover:text-primary"><Instagram /></Link>
              <Link href="https://www.linkedin.com/company/82137752" className="text-slate-400 hover:text-primary"><Linkedin /></Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="text-slate-400 hover:text-primary">About</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary">Services</Link></li>
              <li><Link href="/contact-us" className="text-slate-400 hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li><Link href="/refund-policy" className="text-slate-400 hover:text-primary">Refund Policy</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-400 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-slate-400 hover:text-primary">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Stay Updated</h4>
            <p className="mt-4 text-slate-400">Subscribe to our newsletter for the latest AI trends.</p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-slate-800 border-slate-600 text-white placeholder:text-slate-500" />
              <Button type="submit" className="font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 bg-gradient-to-r from-primary to-indigo-500">Subscribe</Button>
            </form>
            <p className="mt-4 text-sm text-slate-400">Contact: <a href="mailto:contact@inextel.com" className="hover:text-primary">contact@inextel.com</a></p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 text-center text-slate-500">
          <p>© 2025 Inextel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
