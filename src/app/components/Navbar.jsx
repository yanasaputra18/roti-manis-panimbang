"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Tentang", href: "#about" },
    { name: "Produk", href: "#products" },
    { name: "Testimoni", href: "#testimonials" },
    { name: "Kontak", href: "#footer" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
            R
          </div>
          <div>
            <p className="text-lg font-bold text-orange-600">RotiManis</p>
            <p className="text-xs text-gray-500">Fresh every day</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
            >
              {menu.name}
            </a>
          ))}
          <a
            href="https://wa.me/6281511408837"
            target="_blank"
            className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Pesan Sekarang
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-orange-200 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-orange-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {menus.map((menu) => (
              <a
                key={menu.name}
                href={menu.href}
                onClick={() => setOpen(false)}
                className="border-b border-orange-50 py-3 text-sm font-medium text-gray-700"
              >
                {menu.name}
              </a>
            ))}

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-orange-500 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Pesan Sekarang
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
