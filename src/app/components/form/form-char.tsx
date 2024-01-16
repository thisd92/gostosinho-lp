import axios from "axios"
import { useState, useRef } from "react"
import { Input, Label, TextArea } from "."
import { ButtonSubmit } from "../buttons/Buttons"
import { FormContainer, FormControl } from "./style"
import { CharacterModel } from "@/app/inspiracoes/type"

const FormChar = () => {

    const newChar: CharacterModel = {
        name: '',
        description: '',
        img: null
    }

    const [char, setChar] = useState<CharacterModel>(newChar)
    const formRef = useRef<HTMLFormElement>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setChar({ ...char, [name]: value })
    }

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target
        setChar({ ...char, [name]: value })
    }

    function resetValues() {
        setChar(newChar)
        if (formRef.current) formRef.current.reset()
    }

    // Manipule a seleção de arquivos para atualizar o estado 'img'
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setChar({ ...char, img: selectedFile });
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', char.name)
        formData.append('description', char.description)
        if (char.img instanceof File) {
            formData.append('file', char.img, char.img.name);
        }
        await axios.post('http://localhost:8090/api/character', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        alert('Personalidade Adicionada')
        resetValues()
    }

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
                <Label htmlFor="name">Nome</Label>
                <Input type="text" id="name" name="name" onChange={handleChange} value={char.name} required></Input>
            </div>

            <div>
                <Label htmlFor="description">Descrição</Label>
                <TextArea rows={20} id="description" name="description" onChange={handleTextChange} value={char.description} required></TextArea>
            </div>

            <div>
                <Label htmlFor="file">Imagem</Label>
                <input type="file" id="file" name="file" onChange={handleFileChange} accept="image/*" />
            </div>

            <ButtonSubmit type='submit'>Adicionar Personalidade</ButtonSubmit>
        </form >
    )
}

export { FormChar }