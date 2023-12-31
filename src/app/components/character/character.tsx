import { CharContent, CharDescription, CharItem, CharList, CharactersContainer, CharLink } from "./style";
import Image from "next/image";
import { CharacterProps } from "./type";

interface CharacterComponentProps {
    characters: CharacterProps[];
}

export default function Personalidade({ characters }: CharacterComponentProps) {
    return (
        <CharactersContainer>
            <CharContent>
                <CharList>
                    {characters.map(c => (
                        <CharItem key={c._id}>
                            {c.images.map((i) => (
                                <Image key={i} width={300} height={300} alt="" src={`http://localhost:8090/${i}`} />
                            ))}
                            <CharLink href={`/inspiracoes/${c._id}`}><h3>{c.name}</h3></CharLink>
                            <CharDescription>{c.description}</CharDescription>
                        </CharItem>
                    ))}
                </CharList>
            </CharContent>
        </CharactersContainer>
    )
}