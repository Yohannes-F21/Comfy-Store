import React, { useState } from "react";
import { Heart, Users, Calendar, ArrowRight, Menu, X } from "lucide-react";
export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-semibold text-rose-600">
                nurture
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Community
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Resources
              </a>
              <button className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
              <a href="#" className="block px-3 py-2 text-gray-600">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600">
                Services
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600">
                Community
              </a>
              <a href="#" className="block px-3 py-2 text-gray-600">
                Resources
              </a>
              <button className="w-full text-left px-3 py-2 text-rose-600">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-8 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Supporting Your Journey Through Motherhood
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Join our caring community of mothers and experts dedicated to
                making your breastfeeding journey easier and more successful.
              </p>
              <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors inline-flex items-center">
                Join Our Community
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Mother and baby bonding"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Support You
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support through every stage of your
              journey
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Access to certified lactation consultants and healthcare
                professionals
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <Users className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600">
                Connect with other mothers sharing similar experiences
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="text-rose-600" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <p className="text-gray-600">
                Educational content and practical tools for your journey
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-rose-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Mothers Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">
                "The support I received here made all the difference in my
                breastfeeding journey. The experts were always there when I
                needed them."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Sarah M."
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Sarah M.</p>
                  <p className="text-sm text-gray-500">First-time mother</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">
                "Having access to both professional support and a community of
                mothers has been invaluable. I feel more confident every day."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  alt="Emily R."
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Emily R.</p>
                  <p className="text-sm text-gray-500">Mother of twins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-gray-600 mb-8">
            Join thousands of mothers who have found success and support in our
            community
          </p>
          <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors inline-flex items-center">
            Get Started Now
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
