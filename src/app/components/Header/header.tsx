'use client'
import { Logo, Menu } from "../../../img"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export default function Header() {
    return (
        <header>
            <div>
                <Image src={Logo} alt="Logo" width={95} height={95} />
            </div>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href={'/agenda'}>Agenda</Link></li>
                    <li><Link href={'/blog'}>Blog</Link></li>
                    <li><Link href={Menu}>Cardápio</Link></li>
                    <li><Link href={'/inspiracoes'}>Nossas Inspirações</Link></li>
                </ul>
            </nav>
        </header>
    )
}