"use client";

import { Search, ShoppingCart, User, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container-marketplace">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L3 7L10 12L17 7L10 2Z" fill="white"/>
                <path d="M3 13L10 18L17 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-foreground">MARKETPLACE</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/browse" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Categories
            </Link>
            <Link href="/sell" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Sell
            </Link>
            <Link href="/support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-10 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button className="absolute right-0 top-0 h-10 w-10 bg-primary text-white rounded-r-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors hidden md:block">
              Login
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
              <User className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-secondary rounded-lg transition-colors md:hidden">
              <Menu className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-4 pr-10 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="absolute right-0 top-0 h-10 w-10 bg-primary text-white rounded-r-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
