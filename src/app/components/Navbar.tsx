"use client"
import React from "react";
import Link from "next/link";

interface NavLink {
    label: string;
    url: string;
}
const navLinks: NavLink[] = [
    {label: "Today's Weather", url: "/"},
    {label: "Find Weather", url: "/pages/search"},
    {label: "Get in Touch", url: "/pages/contact"}]
export const Navbar: React.FC = () => {

    return (
        <nav className="bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center mx-auto">
              <h1 className="text-white text-2xl font-semibold">
                Weather<span className="text-yellow-500">App</span>
              </h1>
            </div>      
          </div> 
        </nav>
    )
} 