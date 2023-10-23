'use client'
import { FormPost } from "@/app/components/form/form-post"
import PostPreview from "@/app/components/postPreview"
import { NewPostContainer } from "./style"

const AddPost = () => {

    return (
        <NewPostContainer>
            <FormPost />
            <PostPreview />
        </NewPostContainer>
    )
}

export default AddPost