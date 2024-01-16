import axios from "axios"
import React, { useRef } from "react"
import { Input, Label, TextArea } from "."
import { ButtonSubmit } from "../buttons/Buttons"
import { PostModel } from "@/app/blog/type"

interface FromPostProps {
    setPost: React.Dispatch<React.SetStateAction<PostModel>>,
    post: PostModel
}

const FormPost: React.FC<FromPostProps> = ({ setPost, post }) => {

    const newPost: PostModel = {
        title: '',
        content: '',
        img: null
    }

    const formRef = useRef<HTMLFormElement>(null)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value })
    }

    function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = e.target
        setPost({ ...post, [name]: value })
    }

    function resetValues() {
        setPost(newPost)
        if (formRef.current) formRef.current.reset()
    }

    // Manipule a seleção de arquivos para atualizar o estado 'img'
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setPost({ ...post, img: selectedFile });
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', post.title)
        formData.append('content', post.content)
        if (post.img instanceof File) {
            formData.append('file', post.img, post.img.name);
        }
        await axios.post('http://localhost:8090/api/posts', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        alert('Post Criado')
        resetValues()
    }

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div>
                <Label htmlFor="title">Título</Label>
                <Input type="text" id="title" name="title" onChange={handleChange} value={post.title} required></Input>
            </div>

            <div>
                <Label htmlFor="content">Conteúdo</Label>
                <TextArea rows={20} id="content" name="content" onChange={handleTextChange} value={post.content} required></TextArea>
            </div>

            <div>
                <Label htmlFor="file">Imagem</Label>
                <input type="file" id="file" name="file" onChange={handleFileChange} accept="image/*" />
            </div>

            <ButtonSubmit type='submit'>Adicionar Postagem</ButtonSubmit>
        </form >
    )
}

export { FormPost }