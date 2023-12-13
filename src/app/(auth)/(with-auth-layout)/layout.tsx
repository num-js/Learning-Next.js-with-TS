"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'

const navLinks = [
    { name: "Register", link: "/register" },
    { name: "Login", link: "/login" },
    { name: "Forgot Password", link: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathName = usePathname();
    return (
        <>
            <h1>Auth Layout</h1>
            {
                navLinks.map(navLink => {
                    const isActiveLink = pathName.startsWith(navLink.link);
                    return (
                        <Link
                            key={navLink.name}
                            href={navLink.link}
                            className={`mr-4 ${isActiveLink ? "font-bold" : "text-blue-500"}`}
                        >
                            {navLink.name}
                        </Link>
                    )
                })
            }
            {children}
        </>
    )
}
