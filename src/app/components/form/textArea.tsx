import { TextAreaProps } from "./type"

const TextArea = (props: TextAreaProps) => {
    return (
        <textarea {...props} />
    )
}

export { TextArea }