import styled from "styled-components";

export const RepositoryItemContainer = styled.div<object>`
    display: flex;
    flex-direction: column;
    align-items: start;
    color: #999999;
    padding: 0.75rem;
    border-bottom: 0.125rem solid #2D333B;
    margin-bottom: 1rem;
`

export const RepositoryItemTitle = styled.span<object>`
    width: 100%;
    color: #539BF5;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
`

export const RepositoryItemDescription = styled.span<object>`
    width: 100%;
    font-size: 1rem;
    text-align: justify;
`