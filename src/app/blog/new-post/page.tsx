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
        <NewPostContainer>
            <Wrapper>
                <FormPost setPost={setPost} post={post} />
            </Wrapper>
            <Wrapper>
                <PostPreview post={post} />
            </Wrapper>
        </NewPostContainer>
    )
}

export default AddPost