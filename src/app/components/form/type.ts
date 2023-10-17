interface LabelProps {
    htmlFor: string
    id?: string
    children?: React.ReactNode
}

interface TextAreaProps {
    name: string
    id: string,
    rows: number,
    required?: boolean
    value?: string
    readOnly?: boolean
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void
}

interface InputProps {
    type: string
    name: string
    id: string
    required?: boolean
    value?: string
    readOnly?: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
}

interface Contact {
    name: string,
    email: string,
    mensagem: string
}

export type { Contact, InputProps, LabelProps, TextAreaProps }