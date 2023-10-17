'use client'
import { useRef, useState } from "react"
import { Input, Label, TextArea } from "@/app/components/form"
import { PostModel } from "../type"
import { ButtonSubmit } from "@/app/components/buttons/Buttons"
import axios from "axios"

const AddPost = () => {

    const newPost: PostModel = {
        title: '',
        content: '',
        img: null
    }

    const [post, setPost] = useState<PostModel>(newPost)
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
            console.log(formData)
        }
        await axios.post('http://localhost:8090/api/posts', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        resetValues()
    }

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Label htmlFor="title">Título</Label>
            <Input type="text" id="title" name="title" onChange={handleChange} required></Input>

            <Label htmlFor="content">Conteúdo</Label>
            <TextArea rows={20} id="content" name="content" onChange={handleTextChange} required></TextArea>

            <Label htmlFor="file">Imagem</Label>
            <input type="file" id="file" name="file" onChange={handleFileChange} accept="image/*" />

            <ButtonSubmit type='submit'>Add Post</ButtonSubmit>
        </form >
    )
}

export default AddPost