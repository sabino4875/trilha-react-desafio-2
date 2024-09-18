import { MessageContainer } from "./styles";

type MessageProps = {
    label: string,
}

export const Message = (props: MessageProps) => {
    return (
        <MessageContainer>
            {props.label}
        </MessageContainer>
    );
}