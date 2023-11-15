import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="/Instagram_logo.png"
            alt="Instagram Logo"
            layout="fill"
            className="object-contain"
          />
        </div>

        <div className="cursor-pointer h-24 w-10 relative lg:hidden">
          <Image
            src="/instagram_icon.png"
            alt="Instagram Logo"
            layout="fill"
            className="object-contain"
          />
        </div>

        <h1>Right Side</h1>
      </div>

      {/* Middle */}

      {/* Right */}
    </div>
  );
}
