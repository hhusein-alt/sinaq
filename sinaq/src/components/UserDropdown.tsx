"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 h-10 px-2 rounded-md border transition-colors ${
          isOpen ? 'border-[#1C6AC3] bg-blue-50/50' : 'border-transparent hover:bg-gray-50'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm text-[#1C6AC3] relative">
          rM
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></div>
        </div>
        <svg 
          className={`w-4 h-4 text-[#1C6AC3] transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[320px] bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.1)] border border-gray-100 z-50 overflow-hidden flex flex-col">
          
          {/* Profile Completion Section */}
          <div className="p-5 pb-4">
            <div className="flex gap-1 mb-4 h-3">
              <div className="flex-1 bg-red-400 rounded-l-full"></div>
              <div className="flex-1 bg-red-400"></div>
              <div className="flex-1 bg-gray-200"></div>
              <div className="flex-1 bg-gray-200"></div>
              <div className="flex-1 bg-gray-200 rounded-r-full"></div>
            </div>
            <h3 className="font-bold text-[15px] text-gray-800 mb-3">Your profile is incomplete</h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-6">
              We need to know your working rights, degree, location, and career interests to connect you with roles. Completing these fields gives you a real chance to match with employer partners.
            </p>
            <div className="text-center">
              <Link href="/profile/edit" className="text-[#1C6AC3] font-medium text-[14px] hover:underline block" onClick={() => setIsOpen(false)}>
                Update Profile
              </Link>
            </div>
          </div>

          <div className="h-px bg-gray-100 mx-5"></div>

          {/* Menu Items */}
          <div className="py-2">
            <Link href="#" className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
              <svg className="w-5 h-5 text-[#1C6AC3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[15px] text-gray-700">Messages</span>
            </Link>
            
            <Link href="/profile/edit" className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
              <svg className="w-5 h-5 text-[#1C6AC3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-[15px] text-gray-700">Edit Profile</span>
            </Link>

            <Link href="#" className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
              <svg className="w-5 h-5 text-[#1C6AC3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-[15px] text-gray-700">Account Settings</span>
            </Link>

            <Link href="#" className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors" onClick={() => setIsOpen(false)}>
              <svg className="w-5 h-5 text-[#1C6AC3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11h.01" />
              </svg>
              <span className="text-[15px] text-gray-700">Refer a Friend</span>
            </Link>
          </div>

          <div className="h-px bg-gray-100 mx-5"></div>

          {/* Sign Out */}
          <div className="py-2">
            <button 
              className="w-full flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                router.push("/login");
              }}
            >
              <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span className="text-[15px] text-red-500">Sign Out</span>
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
