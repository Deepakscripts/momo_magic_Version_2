// Footer.jsx
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#e0e0e0] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Logo and Brand */}
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="text-xl text-[#ff7a3c]">🍽️</span>
          <span className="text-base font-semibold text-[#1a1a1a]">
            Momo Magic Cafe
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6 flex items-center justify-center gap-6">
          <Button
            variant="link"
            className="text-sm text-[#6b7280] hover:text-[#ff7a3c] hover:no-underline"
          >
            About Us
          </Button>
          <Button
            variant="link"
            className="text-sm text-[#6b7280] hover:text-[#ff7a3c] hover:no-underline"
          >
            Locations
          </Button>
          <Button
            variant="link"
            className="text-sm text-[#6b7280] hover:text-[#ff7a3c] hover:no-underline"
          >
            Terms
          </Button>
          <Button
            variant="link"
            className="text-sm text-[#6b7280] hover:text-[#ff7a3c] hover:no-underline"
          >
            Privacy
          </Button>
        </nav>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-[#9ca3af]">
            © {currentYear} Momo Magic Cafe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
