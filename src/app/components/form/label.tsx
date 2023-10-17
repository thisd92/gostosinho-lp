import { LabelProps } from "./type"

function Label(props: LabelProps) {

    return (
        <label {...props}>{props.children}</label>
    )
}

export { Label }