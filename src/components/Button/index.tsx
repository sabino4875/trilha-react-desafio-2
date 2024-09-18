import { ButtonContainer } from "./styles";

type ButtonProps = {
    label: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button = (props: ButtonProps) => {
    return (
        <ButtonContainer onClick={props.onClick}>{props.label}</ButtonContainer>
    );
}