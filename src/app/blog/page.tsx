'use client'
import Link from "next/link"
import { PostProps } from "./type"
import { useEffect, useState } from "react"
import axios from "axios"
import Post from "../components/post/post"

const Blog = () => {

    const [posts, setPosts] = useState<PostProps[]>([])

    async function getPosts() {
        try {
            const response = await axios.get('http://localhost:8090/api/posts')
            setPosts(response.data)
            console.log('renderizou')
            console.log(posts)
        } catch (error) {
            console.log('Erro ao obter os posts:', error);
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <div>Blog</div>
            <Link href='/blog/new-post'>Novo Post</Link>
            {posts.length > 0 && <Post posts={posts} />}
        </>

    )
}

export default Blog