"use client";

import { Header } from "@/components/marketplace/Header";
import { Footer } from "@/components/marketplace/Footer";
import { MessageCircle, MapPin, Shield, Star, Send, DollarSign } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Mock data
const conversations = [
  {
    id: "1",
    buyerName: "Sarah Johnson",
    buyerRating: 4.9,
    buyerSales: 127,
    productTitle: "Vintage Leather Jacket",
    productPrice: 75,
    productImage: "/generated/leather-jacket.png",
    lastMessage: "Is this still available?",
    lastMessageTime: "2 hours ago",
    unread: 2,
  },
  {
    id: "2",
    buyerName: "Mike Chen",
    buyerRating: 4.7,
    buyerSales: 89,
    productTitle: "Coffee Maker",
    productPrice: 45,
    productImage: "/generated/coffee-maker.png",
    lastMessage: "Can we meet tomorrow at 3pm?",
    lastMessageTime: "Yesterday",
    unread: 0,
  },
];

const messages = [
  { id: "1", sender: "buyer", text: "Hi! Is this still available?", time: "10:23 AM" },
  { id: "2", sender: "seller", text: "Yes, it's available! Are you interested?", time: "10:25 AM" },
  { id: "3", sender: "buyer", text: "Great! Can I see more photos?", time: "10:27 AM" },
  { id: "4", sender: "seller", text: "Of course, let me send you some detail shots", time: "10:28 AM" },
  { id: "5", sender: "buyer", text: "Looks good! Would you take $65?", time: "10:35 AM" },
];

const safeMeetupLocations = [
  "Downtown Police Station - 123 Main St",
  "City Hall Public Parking - 456 Center Ave",
  "Starbucks Downtown - 789 Market St",
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [offerAmount, setOfferAmount] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In real app, send message to backend
      setNewMessage("");
    }
  };

  const handleSendOffer = () => {
    if (offerAmount) {
      // In real app, send offer to backend
      alert(`Offer of $${offerAmount} sent!`);
      setOfferAmount("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container-marketplace py-8">
          <h1 className="text-3xl font-bold text-foreground mb-6">Safe Transaction Hub</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Conversations List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg border border-border shadow-card">
                <div className="p-4 border-b border-border">
                  <h2 className="font-semibold text-foreground">Active Conversations</h2>
                </div>
                <div className="divide-y divide-border">
                  {conversations.map((conv) => (
                    <button
                      key={conv.id}
                      onClick={() => setSelectedConversation(conv)}
                      className={`w-full p-4 text-left hover:bg-secondary/50 transition-colors ${
                        selectedConversation.id === conv.id ? "bg-secondary" : ""
                      }`}
                    >
                      <div className="flex gap-3">
                        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={conv.productImage}
                            alt={conv.productTitle}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="font-medium text-foreground text-sm truncate">
                              {conv.buyerName}
                            </h3>
                            {conv.unread > 0 && (
                              <span className="bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 ml-2">
                                {conv.unread}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-foreground/60 mb-1">{conv.productTitle}</p>
                          <p className="text-xs text-foreground/70 truncate">{conv.lastMessage}</p>
                          <p className="text-xs text-foreground/50 mt-1">{conv.lastMessageTime}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chat Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg border border-border shadow-card flex flex-col h-[600px]">
                {/* Chat Header */}
                <div className="p-4 border-b border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-semibold text-foreground">{selectedConversation.buyerName}</h2>
                      <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span>{selectedConversation.buyerRating}</span>
                        </div>
                        <span>•</span>
                        <span>{selectedConversation.buyerSales} sales</span>
                        <Shield className="w-4 h-4 text-green-500 ml-1" />
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg text-primary">${selectedConversation.productPrice}</p>
                      <p className="text-xs text-foreground/60">{selectedConversation.productTitle}</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "seller" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[70%] rounded-lg px-4 py-2 ${
                          message.sender === "seller"
                            ? "bg-primary text-white"
                            : "bg-secondary text-foreground"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "seller" ? "text-white/70" : "text-foreground/60"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2 mb-3">
                    <div className="flex-1 flex gap-2">
                      <input
                        type="number"
                        value={offerAmount}
                        onChange={(e) => setOfferAmount(e.target.value)}
                        placeholder="Counter offer amount"
                        className="flex-1 px-3 py-2 border border-border rounded-lg text-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                      <button
                        onClick={handleSendOffer}
                        disabled={!offerAmount}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium flex items-center gap-2"
                      >
                        <DollarSign className="w-4 h-4" />
                        Send Offer
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send
                    </button>
                  </div>
                </div>
              </div>

              {/* Safety Tips & Meetup Locations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {/* Safe Meetup Locations */}
                <div className="bg-white rounded-lg border border-border p-4 shadow-card">
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Safe Meetup Locations
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {safeMeetupLocations.map((location, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety Tips */}
                <div className="bg-green-50 rounded-lg border border-green-200 p-4">
                  <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Safety Tips
                  </h3>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li>✓ Meet in well-lit public places</li>
                    <li>✓ Bring a friend if possible</li>
                    <li>✓ Inspect items before paying</li>
                    <li>✓ Trust your instincts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
