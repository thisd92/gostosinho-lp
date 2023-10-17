'use client'
import { PostModel } from "../../type"
import { useEffect, useState } from "react"
import axios from "axios"

interface BlogPostProps {
    params: {
        id: string
    }
}
function BlogPost({ params }: BlogPostProps) {

    const initialPost: PostModel = {
        title: "",
        content: "",
    }

    const [postData, setPostData] = useState<PostModel>(initialPost);
    const [loading, setLoading] = useState(true);

    async function fetchPostData() {
        try {
            const response = await axios.get(`http://localhost:8090/api/posts/${params.id}`)
            setPostData(response.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        if (params.id) fetchPostData()
    }, [params.id])


    return (
        <>
            <div>Blog Posts</div>
            <div>
                <p>Title: {postData.title}</p>
                <p>Conteúdo: {postData.content}</p>
            </div>
        </>
    )
}


export default BlogPost