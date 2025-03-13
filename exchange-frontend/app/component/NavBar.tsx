"use client"
import Link from "next/link";
import { LoginButton } from "./core/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for Hamburger Menu


export function NavBar(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="border-b border-slate-800 text-white">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            {/* Logo */}
            <div className="flex ml-4 md:ml-10 text-3xl md:text-4xl font-bold">
              <span className="text-green-400">Crypto</span><span className="text-white">Dive</span>
            </div>
    
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
    
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10">
              <Link href="/">Home</Link>
              <Link href="/trade/SOL_USDC">Trade</Link>
              <Link href="/markets">Market</Link>
              <Link href="#learncrypto">Learn</Link>
              <Link href="#contactus">Support</Link>
            </div>
    
            {/* Login Button (Hidden on Mobile) */}
            <div className="hidden md:flex mr-10">
              <LoginButton>Sign Up</LoginButton>
            </div>
          </div>
    
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden p-4 space-y-4 text-center flex flex-col">
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/trade/SOL_USDC" onClick={() => setIsOpen(false)}>Trade</Link>
              <Link href="/markets" onClick={() => setIsOpen(false)}>Market</Link>
              <Link href="#learncrypto" onClick={() => setIsOpen(false)}>Learn</Link>
              <Link href="#contactus" onClick={() => setIsOpen(false)}>Support</Link>
              <LoginButton>Sign Up</LoginButton>
            </div>
          )}
        </nav>
    );
}