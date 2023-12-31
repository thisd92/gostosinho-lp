'use client'
import PostPreview from "@/app/components/postPreview/preview"
import { NewCharContainer, Wrapper } from "./style"
import { FormChar } from "@/app/components/form/form-char"

const AddChar = () => {

    return (
        <NewCharContainer>
            <Wrapper>
                <FormChar />
            </Wrapper>
            <Wrapper>
                <PostPreview />
            </Wrapper>
        </NewCharContainer>
    )
}

export default AddChar