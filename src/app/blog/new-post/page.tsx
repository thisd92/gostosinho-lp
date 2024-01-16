'use client'
import { FormPost } from "@/app/components/form/form-post"
import PostPreview from "@/app/components/postPreview/preview"
import { NewPostContainer, Wrapper } from "./style"
import { PostModel } from "../type"
import { useState } from "react"

const AddPost = () => {
    const newPost: PostModel = {
        title: '',
        content: '',
        img: null
    }

    const [post, setPost] = useState<PostModel>(newPost)

    return (
        <section>
            <div>
                <FormPost setPost={setPost} post={post} />
            </div>
            <div>
                <PostPreview post={post} />
            </div>
        </section>
    )
}

export default AddPost