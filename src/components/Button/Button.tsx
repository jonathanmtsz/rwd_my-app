import {StyledButton} from "./Button.style"

interface ButtonProps {
    children: string
    danger?: boolean
    success?: boolean
}

export const Button = ({ children, success, danger, ...rest }: ButtonProps) => {
    return (
        <StyledButton {...rest} danger={danger} success={success}>{children}</StyledButton>
    )
}

export default Button