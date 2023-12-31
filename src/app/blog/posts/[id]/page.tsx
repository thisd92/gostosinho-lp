'use client'
import { PostModel, PostProps } from "../../type"
import { useEffect, useState } from "react"
import axios from "axios"
import Image from "next/image"

interface BlogPostProps {
    params: {
        id: string
    }
}
function BlogPost({ params }: BlogPostProps) {

    const initialPost: PostProps = {
        title: "",
        content: "",
        images: [""]
    }

    const [postData, setPostData] = useState<PostProps>(initialPost);
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
       fetchPostData()
    }, [])


    return (
        <>
            <div>Blog Post</div>
            <div>
                {postData.images.map((i) => (
                    <Image key={i} width={300} height={300} alt="" src={`http://localhost:8090/${i}`} />
                ))}
                
            </div>
            <div>
                <h3>{postData.title}</h3>
                <p>{postData.content}</p>
            </div>
        </>
    )
}


export default BlogPost