"use client"
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Home } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-linear-to-r from-blue-500 via-green-500 to-blue-500 rounded-sm flex items-center justify-center">
                <Home />
              </div>
              <span className="text-xl font-semibold text-gray-800">OrgByte</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium">
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contact Us Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-gray-700 hover:text-gray-900">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-linear-to-r from-blue-500 via-green-500 to-blue-500 rounded-sm flex items-center justify-center">
                        <div className="flex gap-0.5">
                          <div className="w-0.5 h-4 bg-white"></div>
                          <div className="w-0.5 h-4 bg-white"></div>
                          <div className="w-0.5 h-4 bg-white"></div>
                          <div className="w-0.5 h-4 bg-white"></div>
                        </div>
                      </div>
                      <span className="text-xl font-semibold text-gray-800">Taskdog</span>
                    </div>
                  </div>

                  {/* Mobile Menu Items */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="p-6 space-y-6">
                      <Link href="#" className="block text-2xl font-medium text-gray-800 hover:text-gray-600">
                        Home
                      </Link>
                      
                      <div>
                        <button
                          onClick={() => setProductsOpen(!productsOpen)}
                          className="flex items-center justify-between w-full text-2xl font-medium text-gray-800 hover:text-gray-600"
                        >
                          Products
                          <ChevronDown className={`w-5 h-5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>

                      <Link href="#" className="block text-2xl font-medium text-gray-800 hover:text-gray-600">
                        About
                      </Link>

                      <Link href="#" className="block text-2xl font-medium text-gray-800 hover:text-gray-600">
                        Careers
                      </Link>

                      <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors text-lg">
                        Contact Us
                      </button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;