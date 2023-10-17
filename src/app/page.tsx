'use client'
import Banner from "./components/banner/banner";
import Contatos from "./components/contatos/contatos";
import Menu from "./components/menu/menu";
import Personagens from "./components/personagens/personagens";

export default function Home() {
  return (
    <main>
      <Banner />
      <Menu />
      <Personagens />
      <Contatos />
    </main>
  )
}
