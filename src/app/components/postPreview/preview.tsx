import Image from "next/image";
import { PreviewContainer, PreviewContent, TextsContainer } from "./style";
import { PostModel } from '@/app/blog/type';

interface PostPreviewProps {
    post: PostModel
}

export default function PostPreview({ post }: PostPreviewProps) {
    return (
        <PreviewContainer>
            Preview
            <PreviewContent>
                {post.img && typeof post.img === 'string' ? (
                    <Image width={300} height={300} src={post.img} alt="Preview" />
                ) : (
                    post.img instanceof File && <Image width={300} height={300} src={URL.createObjectURL(post.img)} alt="Preview" />
                )}
                <TextsContainer>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </TextsContainer>

            </PreviewContent>

        </PreviewContainer>
    )
}