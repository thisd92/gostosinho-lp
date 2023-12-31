'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import Personalidade from "../components/character/character"
import { CharacterProps } from "../components/character/type"
import { Roboto } from "next/font/google"
import { Title, Wrapper } from "./style"

const roboto = Roboto({
    weight: '700',
    subsets: ['latin']
})

const Inspiracoes = () => {

    const [chars, setChars] = useState<CharacterProps[]>([])

    async function getChars() {
        try {
            const response = await axios.get('http://localhost:8090/api/character')
            setChars(response.data)
            console.log('renderizou')
            console.log(chars)
        } catch (error) {
            console.log('Erro ao obter as personalidades:', error);
        }
    }

    useEffect(() => {
        getChars()
    }, [])

    return (
        <Wrapper id="personagens">
            <Title className={roboto.className}>Conheça nossas inspirações!</Title>
            <p>Cada hambúrguer do nosso cardápio é inspirado em um personagem. Veja quem são eles:</p>
            {chars.length > 0 && <Personalidade characters={chars} />}
        </Wrapper>
    )
}

export default Inspiracoes