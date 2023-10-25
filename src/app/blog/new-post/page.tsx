'use client'
import { FormPost } from "@/app/components/form/form-post"
import PostPreview from "@/app/components/postPreview"
import { NewPostContainer, Wrapper } from "./style"

const AddPost = () => {

    return (
        <NewPostContainer>
            <Wrapper>
                <FormPost />
            </Wrapper>
            <Wrapper>
                <PostPreview />
            </Wrapper>
        </NewPostContainer>
    )
}

export default AddPost