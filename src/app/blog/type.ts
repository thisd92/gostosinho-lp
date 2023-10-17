interface PostModel {
    title: string,
    content: string,
    img?: string | File | null,
    _id?: string
}

interface PostProps {
    title: string,
    content: string,
    images: [src: string],
    _id?: string
}

export type { PostModel, PostProps }