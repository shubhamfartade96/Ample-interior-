"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from "./contact-form"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Us" },
];

export function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false)
  const pathname = usePathname()

  const closeSheet = () => setSheetOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="https://res.cloudinary.com/dsgtunivo/image/upload/v1755805957/Inextel_logo_without_background_fhowv3.png" alt="Inextel Logo" width={120} height={30} />
        </Link>
        
        <div className="hidden items-center space-x-8 md:flex">
            <nav className="items-center space-x-6 text-[15px] font-medium flex">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    pathname === link.href ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="font-semibold shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 bg-gradient-to-r from-primary to-indigo-500">Get Started</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Get In Touch</DialogTitle>
                  <DialogDescription>
                    Please fill out the form below and we'll get back to you soon.
                  </DialogDescription>
                </DialogHeader>
                <div className="pr-2">
                  <ContactForm />
                </div>
              </DialogContent>
            </Dialog>
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col p-6">
                <Link href="/" className="mb-6 flex items-center space-x-2" onClick={closeSheet}>
                   <Image src="https://res.cloudinary.com/dsgtunivo/image/upload/v1755805957/Inextel_logo_without_background_fhowv3.png" alt="Inextel Logo" width={120} height={30} />
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={closeSheet} 
                      className={cn(
                        "text-lg transition-colors hover:text-foreground",
                        pathname === link.href ? "text-foreground font-semibold" : "text-foreground/80"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
