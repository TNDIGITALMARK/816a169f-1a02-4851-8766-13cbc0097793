"use client";

import { Header } from "@/components/marketplace/Header";
import { Footer } from "@/components/marketplace/Footer";
import { ProductCard } from "@/components/marketplace/ProductCard";
import { Truck, CreditCard, Headphones } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock data for products
const products = [
  { id: "1", title: "Wooden Chair", price: 84.00, image: "/generated/leather-jacket.png", isNew: true },
  { id: "2", title: "Denim Jacket", price: 259.00, image: "/generated/denim-jacket.png", isNew: true },
  { id: "3", title: "Wired & Wireless Headphones", price: 156.00, image: "/generated/headphones.png", isNew: true },
  { id: "4", title: "Kitchen Stand Mixer", price: 349.00, image: "/generated/kitchen-mixer.png", isNew: true },
  { id: "5", title: "Succulent Potted Plant", price: 135.00, image: "/generated/coffee-maker.png", isNew: true },
  { id: "6", title: "Rolling Pyramid Stack Books", price: 114.00, image: "/generated/camera.png", isNew: true },
  { id: "7", title: "Hardbound Impressive Books", price: 119.00, image: "/generated/winter-coat.png", isNew: true },
  { id: "8", title: "Pair of Casual Shoes", price: 89.00, image: "/generated/sneakers.png", isNew: true },
  { id: "9", title: "Professional Camera", price: 299.00, image: "/generated/camera.png", isNew: true },
  { id: "10", title: "Coffee Maker", price: 185.00, image: "/generated/coffee-maker.png", isNew: true },
  { id: "11", title: "Coffee Mug", price: 219.00, image: "/generated/headphones.png", isNew: true },
  { id: "12", title: "Trendy Backpack", price: 344.00, image: "/generated/denim-jacket.png", isNew: true },
];

const categories = [
  { name: "Electronics", count: 5, active: false },
  { name: "Furniture", count: 8, active: false },
  { name: "Household", count: 2, active: false },
  { name: "Books", count: 3, active: false },
  { name: "Sports", count: 7, active: false },
];

const conditions = [
  { label: "New", value: "new" },
  { label: "Used", value: "used" },
  { label: "Bad", value: "bad" },
];

export default function MarketplaceBrowse() {
  const [selectedCondition, setSelectedCondition] = useState("new");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white border-b border-border">
          <div className="container-marketplace py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">
                  Discover Endless Possibilities
                </h1>
                <p className="text-foreground/70 text-lg">
                  New & Used Items for Every Need
                </p>
              </div>
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden bg-gray-100">
                <Image
                  src="/generated/leather-jacket.png"
                  alt="Featured Product"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container-marketplace py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories & Filters */}
            <aside className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-lg border border-border p-6 mb-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">CATEGORIES</h2>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="w-full flex items-center justify-between text-sm text-foreground hover:text-primary transition-colors">
                        <span>{category.name}</span>
                        <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-medium">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Condition Filter */}
              <div className="bg-white rounded-lg border border-border p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">CONDITION</h2>
                <div className="space-y-3">
                  {conditions.map((condition) => (
                    <label key={condition.value} className="flex items-center gap-3 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="condition"
                          value={condition.value}
                          checked={selectedCondition === condition.value}
                          onChange={(e) => setSelectedCondition(e.target.value)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                          selectedCondition === condition.value
                            ? "border-primary"
                            : "border-border"
                        }`}>
                          {selectedCondition === condition.value && (
                            <div className="w-3 h-3 rounded-full bg-primary"></div>
                          )}
                        </div>
                      </div>
                      <span className="text-sm text-foreground">{condition.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    isNew={product.isNew}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="bg-white border-t border-border py-12">
          <div className="container-marketplace">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">FEATURED SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Fast Shipping</h3>
                <p className="text-sm text-foreground/70">Quick and reliable delivery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Secure Payments</h3>
                <p className="text-sm text-foreground/70">Safe transaction processing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">24/7 Support</h3>
                <p className="text-sm text-foreground/70">Always here to help you</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
