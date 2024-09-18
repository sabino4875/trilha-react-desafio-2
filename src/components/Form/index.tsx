import { Button } from "../Button";
import { Input } from "../Input";
import { SearchContainer, SearchItems } from "./styles";

type FormProps = {
    value: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
};

type SearchFormProps = {
    value: string,
    onSearchClick: React.MouseEventHandler<HTMLButtonElement>,
    onClearClick: React.MouseEventHandler<HTMLButtonElement>,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
};


export const SearchUser = (props: FormProps) => {
    return (
        <SearchContainer>
            <SearchItems>
                <Input value={props.value} onChange={props.onChange} placeholder="@username" />
                <Button onClick={props.onClick} label="Buscar" />
            </SearchItems>
        </SearchContainer>
    );
}

export const SearchRepository = (props: SearchFormProps) => {
    return (
        <SearchContainer>
            <SearchItems>
                <Input value={props.value} onChange={props.onChange} placeholder="@repository" />
                <Button onClick={props.onSearchClick} label="Filtrar" />
                <Button onClick={props.onClearClick} label="Limpar" />
            </SearchItems>
        </SearchContainer>
    );
}
