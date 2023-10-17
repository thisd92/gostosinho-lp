import { ButtonProps } from "./type"

const ButtonSubmit = (props: ButtonProps) => {
    return (
        <button>
            {props.children}
        </button>
    )
}

export { ButtonSubmit }