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
    <footer className="bg-white border-t border-gray-300">
      <footer className="p-10 mx-auto max-w-screen-2xl footer">
        <div>
          <span>
            <Logo className="bg-black" />
          </span>
          <p className="mt-4 w-40 text-xs">
            Leading software company to turn your ideas into technological
            wonders
          </p>
          <Link
            href="#"
            className="mt-4 w-40 text-xs leading-loose link link-hover"
          >
            Copyright © {new Date().getFullYear()} DTdigital. All rights
            reserved
          </Link>
          <div className="flex gap-3 mt-4">
            {Icons.map((i, idx) => (
              <Link href="" key={idx}>
                <Image height={32} width={32} src={i.icon} alt="social-icon" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <span className="text-lg font-bold text-black">Legal</span>
          <Link href="#" className="mt-2 link link-hover">
            Privacy Policy
          </Link>
          <Link href="#" className="mt-2 link link-hover">
            Terms of Service
          </Link>
        </div>

        <div>
          <span className="text-lg font-bold text-black">Contact Us</span>
          <Link href="#" className="mt-2 link link-hover">
            Customer Service
          </Link>
          <a className="mt-2 link link-hover" href="mailto:hello@dtdigital.nl">
            hello@dtdigital.nl
          </a>

          <input
            type="text"
            placeholder="Your email address"
            className="p-4 mt-2 w-full h-10 bg-gray-100 rounded-full"
          />
        </div>
      </footer>
    </footer>
  );
}
