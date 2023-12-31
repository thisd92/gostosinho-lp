'use client'
import Banner from "./components/banner/banner";
import Contatos from "./components/contatos/contatos";
import Menu from "./components/menu/menu";

export default function Home() {
  return (
    <main>
      <Banner />
      <Menu />
      <Contatos />
    </main>
  )
}
