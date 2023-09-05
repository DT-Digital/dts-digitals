import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import Image from "next/image";

const Icons = [
  { icon: "/instagram.svg" },
  { icon: "/twitter.svg" },
  { icon: "/linkedin.svg" },
  { icon: "/facebook.svg" },
];

export function Footer() {
  return (
    <footer className="p-10 rounded footer footer-center bg-base-200 text-base-content">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/about" className="link link-hover">
          About us
        </Link>
        <Link href="/services" className="link link-hover">
          Services
        </Link>
        <Link href="/#contact" className="link link-hover">
          Contact
        </Link>
        <Link href="/portfolio" className="link link-hover">
          Portfolio
        </Link>
      </nav>
      <nav className="flex flex-col gap-4 text-center">
        <a href="mailto:hello@dtdigital.nl" className="hover:underline">
          Email: hello@dtdigital.nl
        </a>
        <a className="hover:underline" href="tel:+31638592495">
          Phone: +31 638 592 495
        </a>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by DT
          Digital
        </p>
      </aside>
    </footer>
  );
}
