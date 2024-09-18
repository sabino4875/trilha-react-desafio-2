import { RepositoryItemContainer, RepositoryItemDescription, RepositoryItemTitle } from "./styles";

type RepositoryItemProps = {
    id: number,
    node_id: string,
    title: string,
    description: string
}

export const RepositoryItem = (props: RepositoryItemProps) => {
    return (
        <RepositoryItemContainer id={props.node_id}>
            <RepositoryItemTitle>{props.title}</RepositoryItemTitle>
            <RepositoryItemDescription>{props.description}</RepositoryItemDescription>
        </RepositoryItemContainer>
    );
}