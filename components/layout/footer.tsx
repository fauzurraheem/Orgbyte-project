import React from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { footerSections } from '@/data/footer';


const Footer: React.FC = () => {

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Responsive Grid / Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, i) => (
            <div key={i}>
              {/* Desktop Title */}
              <h3 className="hidden md:block font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>

              {/* Mobile Accordion */}
              <div className="md:hidden border-b border-gray-100">
                <Accordion type="single" collapsible>
                  <AccordionItem value={`item-${i}`}>
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 py-2">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pt-2">
                        {section.links.map((link, j) => (
                          <li key={j}>
                            <Link
                              href={link.href}
                              className={`text-sm ${
                                link.external
                                  ? 'text-blue-600 hover:text-blue-700 inline-flex items-center gap-1'
                                  : 'text-gray-600 hover:text-gray-900'
                              }`}
                            >
                              {link.label}
                              {link.external && <ExternalLink className="w-3 h-3" />}
                              {link.badge && (
                                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Desktop Links */}
              <ul className="hidden md:flex md:flex-col space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className={`text-sm ${
                        link.external
                          ? 'text-blue-600 hover:text-blue-700 inline-flex items-center gap-1'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      {link.label}
                      {link.external && <ExternalLink className="w-3 h-3" />}
                      {link.badge && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
            <span>|</span>
            <Link href="#" className="hover:text-gray-900">Settings</Link>
          </div>
          <p>© 2025 OrgByte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
