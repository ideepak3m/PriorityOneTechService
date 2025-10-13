import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoFull from "@/assets/logo-full.png";
import { HashLink } from "react-router-hash-link"; // ✅ correct
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from "react";
import UserRegistration from "./UserRegistration";
import LoginForm from "./LoginForm";
import ForgotPasswordForm from "./ForgotPasswordForm";

type Props = {
  onOpenAudit: () => void;
};


const Navigation = ({ onOpenAudit }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem('authToken');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  <LoginForm
    onLogin={() => setShowLoginModal(false)}
    onForgotPassword={() => {
      setShowLoginModal(false);
      setShowForgotPasswordModal(true);
    }}
  />
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={logoFull}
                alt="Priority One Tech Service"
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <HashLink smooth to="/#services" className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Services
              </HashLink>
              <Link to="/about" className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                About
              </Link>
              <Link to="/portfolio" className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Portfolio
              </Link>
              <HashLink smooth to="/#contact" className="text-foreground hover:text-accent px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </HashLink>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2 ml-auto mr-12">
            <Button onClick={onOpenAudit} variant="hero" size="sm">
              Book an AI Audit
            </Button>
            <HashLink smooth to="/#contact">
              <Button variant="hero" size="sm">
                Get Free AI Audit
              </Button>
            </HashLink>
          
            

            <UserCircleIcon
              className={`w-8 h-8 cursor-pointer ${isLoggedIn ? 'text-blue-600' : 'text-gray-500'
                }`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {dropdownOpen && (
              <div className="absolute top-14 right-4 bg-white shadow-lg p-4 rounded w-64 z-40">
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      localStorage.removeItem('authToken');
                      setDropdownOpen(false);
                    }}
                    className="text-red-600 underline"
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      setShowLoginModal(true);
                    }}
                    className="text-blue-600 underline"
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>

          
          
        </div>
      </div>
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 min-h-screen">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Login</h2>
            <LoginForm
              onLogin={() => setShowLoginModal(false)}
              onForgotPassword={() => {
                setShowLoginModal(false);
                setShowForgotPasswordModal(true);
              }}
            />

            <button
              onClick={() => setShowLoginModal(false)}
              className="mt-2 text-gray-500 text-sm underline w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showRegisterModal && (
        <UserRegistration onClose={() => setShowRegisterModal(false)} />
      )}

      {showForgotPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 min-h-screen">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <ForgotPasswordForm onClose={() => setShowForgotPasswordModal(false)} />
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navigation;