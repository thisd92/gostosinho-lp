'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"
import { CharacterProps } from "@/app/components/character/type"

interface CharProps {
    params: {
        id: string
    }
}
function Character({ params }: CharProps) {

    const initialChar: CharacterProps = {
        name: "",
        description: "",
        images: [""]
    }

    const [characterData, setCharacterData] = useState<CharacterProps>(initialChar);
    const [loading, setLoading] = useState(true);

    async function fetchCharacterData() {
        try {
            const response = await axios.get(`http://localhost:8090/api/character/${params.id}`)
            setCharacterData(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
       fetchCharacterData()
    }, [])


    return (
        <>
            <div>Personalidade</div>
            <div>
                {characterData.images.map((i) => (
                    <Image key={i} width={300} height={300} alt="" src={`http://localhost:8090/${i}`} />
                ))}
                
            </div>
            <div>
                <h3>{characterData.name}</h3>
                <p>{characterData.description}</p>
            </div>
        </>
    )
}


export default Character