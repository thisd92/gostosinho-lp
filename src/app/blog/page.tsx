'use client'
import Link from "next/link"
import { PostProps } from "./type"
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

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
            <div>
                <ul>
                    {posts.map(p => (
                        <li key={p._id}>
                            {p.images.map((i) => (
                                <Image key={i} width={300} height={300} alt="" src={`http://localhost:8090/${i}`} />
                            ))}
                            <Link href={`/blog/posts/${p._id}`}>{p.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default Blog