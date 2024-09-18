import { Item } from "../../models/item";
import { SearchRepository } from "../Form";
import { RepositoryItem } from "../RepositoryItem";
import { Repositories, RepositoriesInputContainer, RepositoriesItemsContainer, RepositoryTitle } from "./styles";
  
type RepositoryProps = {
    items: Array<Item>;
    value: string;
    onSearchClick: React.MouseEventHandler<HTMLButtonElement>;
    onClearClick: React.MouseEventHandler<HTMLButtonElement>;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Repository = (props: RepositoryProps) => {
    return (
        <Repositories>
            <RepositoryTitle>Repositórios criados: {props.items.length}</RepositoryTitle>
            <RepositoriesInputContainer>
                <SearchRepository onChange={props.onChange} 
                                  onSearchClick={props.onSearchClick} 
                                  onClearClick={props.onClearClick}
                                  value={props.value} />
            </RepositoriesInputContainer>
            <RepositoriesItemsContainer>
                {props.items.map(item =>(
                    <>
                        <RepositoryItem id={item.id} node_id={item.node_id} title={item.name} description={item.description} />
                    </>
                ))}
            </RepositoriesItemsContainer>
        </Repositories>
    );
}