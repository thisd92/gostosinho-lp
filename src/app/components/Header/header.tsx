'use client'
import { Logo, Menu } from "../../../img"
import Image from "next/image"
import { HeaderWrapper, List, WrapperList, Link, ImageWrapper, Navbar } from "./style"
import React from "react"

export default function Header() {
    return (
        <HeaderWrapper>
            <ImageWrapper>
                <Image src={Logo} alt="Logo" width={95} height={95} />
            </ImageWrapper>
            <Navbar>
                <WrapperList>
                    <List><Link href='/'>Home</Link></List>
                    <List><Link href={'/agenda'}>Agenda</Link></List>
                    <List><Link href={'/blog'}>Blog</Link></List>
                    <List><Link href={Menu}>Cardápio</Link></List>
                    <List><Link href={'/inspiracoes'}>Nossas Inspirações</Link></List>
                </WrapperList>
            </Navbar>
        </HeaderWrapper>
    )
}