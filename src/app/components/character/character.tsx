import { CharContent, CharDescription, CharItem, CharList, CharactersContainer, CharLink } from "./style";
import Image from "next/image";
import Link from "next/link"
import { CharacterProps } from "./type";

interface CharacterComponentProps {
    characters: CharacterProps[];
}

export default function Personalidade({ characters }: CharacterComponentProps) {
    return (
        <section>
            <div>
                <ul>
                    {characters.map(c => (
                        <li key={c._id}>
                            {c.images.map((i) => (
                                <Image key={i} width={300} height={300} alt="" src={`http://localhost:8090/${i}`} />
                            ))}
                            <Link href={`/inspiracoes/${c._id}`}><h3>{c.name}</h3></Link>
                            <p>{c.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}