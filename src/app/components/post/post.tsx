import { PostProps } from "@/app/blog/type";
import Image from "next/image";
import Link from "next/link";

interface PostComponentProps {
    posts: PostProps[];
}

export default function Post({ posts }: PostComponentProps) {
    return (
        <div>
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
        </div>
    )
}