import { InputProps } from "./type"

function Input(props: InputProps) {

    return (
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...props} />
    )
}

export { Input }