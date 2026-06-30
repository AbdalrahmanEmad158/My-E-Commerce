'use client';

import React, { useState, useRef, useEffect, useContext } from 'react';
import { ShoppingCart, Menu, X, Heart, User, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useCart } from '../../_context/cartContext';
import { useWishlist, WishlistContextType } from '../../_context/wishlistContext';

interface NavbarProps {
  isAuthenticated?: boolean;
 
}

export default function Navbar({
  isAuthenticated = false,
 
  
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isCategoriesDropdownOpen, setIsCategoriesDropdownOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false); // Mobile
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const categoriesDropdownRef = useRef<HTMLDivElement>(null);

  const { data, status } = useSession();
  const userName = data?.user?.name ?? '';
  const userEmail = data?.user?.email ?? '';
  const path = usePathname();
  const isAuth = isAuthenticated || status === 'authenticated';
  const router = useRouter();
  const {numberOfCartItems} = useCart()
      const {numberOfWishlistItems} = (useWishlist() as WishlistContextType)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target as Node)
      ) {
        setIsUserDropdownOpen(false);
      }
      if (
        categoriesDropdownRef.current &&
        !categoriesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  async function handleLogout() {
    await signOut({ redirect : false  });
     router.push('/');
    setIsUserDropdownOpen(false);
  };

  return (
    <>
      <nav className="bg-slate-300 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">

          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">

            {/* Logo and Main Navigation */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  🛒
                </div>
                <span className="text-xl font-bold text-gray-800">FreshCart</span>
              </div>

              {/* Main Navigation Links */}
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className={`Link ${path === '/' ? 'after:w-full' : ''}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/Products" className={`Link ${path === '/Products' ? 'after:w-full' : ''}`}>
                    Products
                  </Link>
                </li>

                {isAuth && (
                  <>
                    <li>
                      <Link href="/cart" className={`Link ${path === '/cart' ? 'after:w-full' : ''}`}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link href="/allorders" className={`Link ${path === '/allorders' ? 'after:w-full' : ''}`}>
                        Orders
                      </Link>
                    </li>

                    {/* Categories Dropdown */}
                    <li className="relative" ref={categoriesDropdownRef}>
                      <button
                        onClick={() => setIsCategoriesDropdownOpen(!isCategoriesDropdownOpen)}
                        className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition"
                      >
                        Categories
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isCategoriesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">
                          <Link
                            href="/Categories"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                            onClick={() => setIsCategoriesDropdownOpen(false)}
                          >
                            All Categories
                          </Link>
                          <Link
                            href="/Categories/6439d5b90049ad0b52b90048"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                            onClick={() => setIsCategoriesDropdownOpen(false)}
                          >
                            Men Categories
                          </Link>
                          <Link
                            href="/Categories/6439d58a0049ad0b52b9003f"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                            onClick={() => setIsCategoriesDropdownOpen(false)}
                          >
                            Women Categories
                          </Link>
                          <Link
                            href="/Categories/6439d2d167d9aa4ca970649f"
                            className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                            onClick={() => setIsCategoriesDropdownOpen(false)}
                          >
                            Electronics
                          </Link>
                        </div>
                      )}
                    </li>

                    <li>
                      <Link href="/Brands" className={`Link ${path === '/Brands' ? 'after:w-full' : ''}`}>
                        Brands
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>

            {/* Right Side Icons and Auth */}
            <div className="flex items-center gap-6">

              {/* Wishlist Icon with Badge */}
              <Link href="/wishlist" className="relative inline-block text-gray-700 hover:text-green-600 transition">
                <Heart size={20} fill="currentColor" />
                {isAuth && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {numberOfWishlistItems}
                  </span>
                )}
              </Link>

              {/* Cart Icon with Badge */}
              <Link href="/cart" className="relative inline-block text-gray-700 hover:text-green-600 transition">
                <ShoppingCart size={20} />
                {isAuth &&  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {numberOfCartItems}
                  </span>}
              </Link>

              {isAuth ? (
                <>
                  {/* User Dropdown */}
                  <div className="relative" ref={userDropdownRef}>
                    <button
                      onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                      className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition"
                    >
                      <User size={20} />
                    </button>

                    {isUserDropdownOpen && (
                      <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-10">

                        {/* User Info Header */}
                        <div className="flex items-center gap-3 px-4 pt-2 pb-4 mb-2 border-b border-gray-200">
                          <div className="flex-shrink-0 bg-green-500 rounded-full p-2 flex items-center justify-center">
                            <User size={20} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-gray-800 truncate">{userName}</h3>
                            <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                          </div>
                        </div>

                        <Link
                          href="/profile"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          My Profile
                        </Link>
                        <Link
                          href="/allorders"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          My Orders
                        </Link>
                        <Link
                          href="/wishlist"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          My Wishlist
                        </Link>
                        <Link
                          href="/addresses"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          Addresses
                        </Link>
                        <Link
                          href="/settings"
                          className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                          onClick={() => setIsUserDropdownOpen(false)}
                        >
                          Settings
                        </Link>
                        <hr className="my-2" />
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <Link href="/Login" className="text-gray-700 hover:text-green-600 font-medium transition">
                    Login
                  </Link>
                  <Link href="/Registar" className="text-gray-700 hover:text-green-600 font-medium transition">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex justify-between items-center">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                🛒
              </div>
              <span className="text-lg font-bold text-gray-800">FreshCart</span>
            </div>

            {/* Mobile Icons */}
            <div className="flex items-center gap-4">

              {/* Wishlist Icon with Badge */}
              <Link href="/wishlist" className="relative inline-block text-gray-700">
                <Heart size={18} fill="currentColor" />
                {numberOfWishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {numberOfWishlistItems}
                  </span>
                )}
              </Link>

              {/* Cart Icon with Badge */}
              <Link href="/cart" className="relative inline-block text-gray-700">
                <ShoppingCart size={18} />
                {numberOfCartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {numberOfCartItems}
                  </span>
                )}
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-400 pt-4">
              <ul className="flex flex-col gap-3">
                   {/* User Info Header */}
                        <div className="flex items-center gap-3 px-4 pt-2 pb-4 mb-2 border-b border-gray-200">
                          <div className="flex-shrink-0 bg-green-500 rounded-full p-2 flex items-center justify-center">
                            <User size={20} className="text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-bold text-gray-800 truncate">{userName}</h3>
                            <p className="text-xs text-gray-500 truncate">{userEmail}</p>
                          </div>
                        </div>
                        
                <li>
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-green-600 font-medium transition block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Products"
                    className="text-gray-700 hover:text-green-600 font-medium transition block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Products
                  </Link>
                </li>

                {isAuth && (
                  <>
                    <li>
                      <Link
                        href="/cart"
                        className="text-gray-700 hover:text-green-600 font-medium transition block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/allorders"
                        className="text-gray-700 hover:text-green-600 font-medium transition block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Orders
                      </Link>
                    </li>

                    {/* Mobile Categories */}
                    
                    <li>
                      <button
                        onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
                        className="flex items-center gap-1 text-gray-700 hover:text-green-600 font-medium transition w-full"
                      >
                        Categories
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isCategoriesDropdownOpen ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {isMobileCategoriesOpen && (
                        <ul className="pl-4 mt-2 flex flex-col gap-2">
                          <li>
                            <Link
                              href="/Categories"
                              className="text-gray-600 hover:text-green-600 transition block"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileCategoriesOpen(false); }}
                            >
                              All Categories
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Categories/6439d5b90049ad0b52b90048"
                              className="text-gray-600 hover:text-green-600 transition block"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileCategoriesOpen(false); }}
                            >
                              Men Categories
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Categories/6439d58a0049ad0b52b9003f"
                              className="text-gray-600 hover:text-green-600 transition block"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileCategoriesOpen(false); }}
                            >
                              Women Categories
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/Categories/6439d2d167d9aa4ca970649f"
                              className="text-gray-600 hover:text-green-600 transition block"
                              onClick={() => { setIsMobileMenuOpen(false); setIsMobileCategoriesOpen(false); }}
                            >
                              Electronics
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>

                    <li>
                      <Link
                        href="/Brands"
                        className="text-gray-700 hover:text-green-600 font-medium transition block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Brands
                      </Link>
                    </li>
                  </>
                )}

                {isAuth ? (
                  <>
                    <li>
                      <Link
                        href="/profile"
                        className="text-gray-700 hover:text-green-600 font-medium transition block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/addresses"
                        className="text-gray-700 hover:text-green-600 font-medium transition block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Addresses
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/settings"
                        className="text-gray-700 hover:text-green-600 font-medium transition block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Settings
                      </Link>
                    </li>
                    
                    <li>
                      <button
                        onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}
                        className="text-red-600 hover:text-red-700 font-medium transition w-full text-left"
                      >
                        Sign Out
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        href="/Login"
                        className="text-gray-700 hover:text-green-600 font-medium transition block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Registar"
                        className="text-gray-700 hover:text-green-600 font-medium transition block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}

        </div>
      </nav>
    </>
  );
}