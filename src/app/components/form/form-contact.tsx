import { useState } from "react"
import { Input, Label, TextArea } from "."
import { ButtonSubmit } from "../buttons/Buttons"
import { Contact } from "./type"
import { FormControl } from "./style"

const FormContact = () => {

    const newContact = {
        name: "",
        email: "",
        mensagem: ""
    }

    const [contact, setContact] = useState<Contact>(newContact)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value })
    }

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target
        setContact({ ...contact, [name]: value })
    }

    return (
        <form>
            <FormControl>
                <Label htmlFor="nome">Nome:</Label>
                <Input type="text" id="nome" name="nome" onChange={handleChange} required />
            </FormControl>

            <FormControl>
                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" name="email" onChange={handleChange} required />
            </FormControl>

            <FormControl>
                <Label htmlFor="mensagem">Mensagem:</Label>
                <TextArea id="mensagem" name="mensagem" rows={10} required onChange={handleTextChange} />
            </FormControl>

            <ButtonSubmit type="submit">Enviar</ButtonSubmit>
        </form>
    )
}

export { FormContact }