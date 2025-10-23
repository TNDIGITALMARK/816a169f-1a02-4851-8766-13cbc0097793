"use client";

import { Header } from "@/components/marketplace/Header";
import { Footer } from "@/components/marketplace/Footer";
import { Upload, Camera, DollarSign, MapPin, Package } from "lucide-react";
import { useState } from "react";

const categories = [
  "Electronics", "Furniture", "Clothing", "Books", "Sports", "Home & Garden", "Toys", "Other"
];

const conditions = [
  { value: "new", label: "New", description: "Brand new, never used" },
  { value: "like-new", label: "Like New", description: "Barely used, excellent condition" },
  { value: "good", label: "Good", description: "Used with minor wear" },
  { value: "fair", label: "Fair", description: "Visible wear but functional" },
];

export default function SellPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    condition: "like-new",
    location: "",
    images: [] as File[],
  });

  const [suggestedPrice, setSuggestedPrice] = useState<number | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }));

      // Simulate auto-pricing suggestion
      if (formData.title) {
        setSuggestedPrice(Math.floor(Math.random() * 200) + 50);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Listing created successfully! In a real app, this would submit to the backend.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-8">
        <div className="container-marketplace max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Quick List Creator</h1>
            <p className="text-foreground/70">List your item in under 2 minutes</p>
          </div>

          {/* Main Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Photo Upload Section */}
            <div className="bg-white rounded-lg border border-border p-6 shadow-card">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" />
                Photos
              </h2>
              <p className="text-sm text-foreground/70 mb-4">
                Add up to 8 photos. First photo will be the cover image.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Upload Button */}
                <label className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <Upload className="w-8 h-8 text-foreground/40 mb-2" />
                  <span className="text-sm text-foreground/60">Add Photo</span>
                </label>

                {/* Preview uploaded images */}
                {formData.images.map((file, index) => (
                  <div key={index} className="aspect-square border border-border rounded-lg overflow-hidden relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === 0 && (
                      <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">
                        Cover
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Item Details */}
            <div className="bg-white rounded-lg border border-border p-6 shadow-card">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Item Details
              </h2>

              <div className="space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="e.g., Vintage Leather Jacket"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Condition */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Condition *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {conditions.map(condition => (
                      <label
                        key={condition.value}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                          formData.condition === condition.value
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <input
                          type="radio"
                          name="condition"
                          value={condition.value}
                          checked={formData.condition === condition.value}
                          onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
                          className="sr-only"
                        />
                        <div className="font-medium text-foreground mb-1">{condition.label}</div>
                        <div className="text-xs text-foreground/60">{condition.description}</div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your item, include any flaws or special features..."
                    rows={4}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Price & Location */}
            <div className="bg-white rounded-lg border border-border p-6 shadow-card">
              <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                Price & Location
              </h2>

              <div className="space-y-4">
                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Asking Price *
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60">$</span>
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                      placeholder="0.00"
                      className="w-full pl-8 pr-4 py-2 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                  {suggestedPrice && (
                    <p className="text-sm text-primary mt-2">
                      💡 Suggested price based on similar items: ${suggestedPrice}
                    </p>
                  )}
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="e.g., Downtown Seattle, WA"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <p className="text-xs text-foreground/60 mt-2">
                    We'll only show your general area to buyers until you both agree to meet
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => window.history.back()}
                className="flex-1 px-6 py-3 border-2 border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md"
              >
                Publish Listing
              </button>
            </div>
          </form>

          {/* Tips Section */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-3">💡 Tips for a successful listing</h3>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>• Take clear photos in good lighting from multiple angles</li>
              <li>• Be honest about condition and any flaws</li>
              <li>• Research similar items to price competitively</li>
              <li>• Respond quickly to buyer messages</li>
              <li>• Meet in safe, public locations for pickup</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
