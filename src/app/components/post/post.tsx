import { PostProps } from "@/app/blog/type";
import { PostsContainer, PostContent, PostList, PostItem, PostLink } from "./style";
import Image from "next/image";
import Link from "next/link";

interface PostComponentProps {
    posts: PostProps[];
}

export default function Post({ posts }: PostComponentProps) {
    return (
        <PostsContainer>
            <PostContent>
                <PostList>
                    {posts.map(p => (
                        <PostItem key={p._id}>
                            {p.images.map((i) => (
                                <Image key={i} width={300} height={300} alt="" src={`http://localhost:8090/${i}`} />
                            ))}
                            <PostLink href={`/blog/posts/${p._id}`}>{p.title}</PostLink>
                        </PostItem>
                    ))}
                </PostList>
            </PostContent>
        </PostsContainer>
    )
}