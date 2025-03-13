"use client"
import Link from "next/link";
import { LoginButton } from "./core/Button";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for Hamburger Menu


export function NavBar(){

    const [isOpen, setIsOpen] = useState(false);

    return <div className="border-b border-slate-800">
        <div className="flex justify-between items-center p-4">
            <div className="flex ml-10 relative text-4xl font-bold">
               <span className="text-green-400">Crypto</span><span className="text-white">Dive</span>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button className="md:hidden text-white"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}  
            </button>


                <div className="flex flex-row justify-between items-center">
                    <div className="flex gap-10">
                        <Link href={"/"}>Home</Link>
                        <Link href={"/trade/SOL_USDC"}>Trade</Link>
                        <Link href={"/markets"} >Market</Link>
                        <Link href={"/#learncrypto"}>Learn</Link>
                        <Link href={"/#contactus"}>Support</Link>
                    </div>
                </div>
            <div className="flex mr-20">
                <LoginButton children={"Sign Up"}/>
            </div>
        </div>
    </div>
}