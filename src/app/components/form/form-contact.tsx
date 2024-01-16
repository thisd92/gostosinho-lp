import { useRef, useState } from "react"
import { Input, Label, TextArea } from "."
import { ButtonSubmit } from "../buttons/Buttons"
import { Contact } from "./type"
import axios from "axios"

const FormContact = () => {

    const newContact = {
        name: "",
        email: "",
        message: ""
    }

    const formRef = useRef<HTMLFormElement>(null)

    const [contact, setContact] = useState<Contact>(newContact)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value })
    }

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    function resetValues() {
        setContact(newContact)
        if (formRef.current) formRef.current.reset()
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        console.log(contact)
        await axios.post('http://localhost:8090/api/contact', contact)
        alert('Mensagem enviada')
        resetValues()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Label htmlFor="name">Nome:</Label>
                <Input type="text" id="name" name="name" onChange={handleChange} required />
            </div>

            <div>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" onChange={handleChange} required />
            </div>

            <div>
                <Label htmlFor="message">Mensagem:</Label>
                <TextArea id="message" name="message" rows={10} required onChange={handleTextChange} />
            </div>

            <ButtonSubmit type="submit">Enviar</ButtonSubmit>
        </form>
    )
}

export { FormContact }