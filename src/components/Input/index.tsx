import { InputContainer } from "./styles";

type InputProps = {
    value: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    placeholder: string,
}

export const Input = (props: InputProps) => {
    return (
        <InputContainer type="text" 
                        value={props.value} 
                        onChange={props.onChange} 
                        placeholder={props.placeholder}/>
    );
}