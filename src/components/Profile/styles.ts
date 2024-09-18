import { styled } from "styled-components";

export const ProfileContainer = styled.div<object>`
    margin-bottom: 1rem;
    padding: 0.75rem;
    border-bottom: 0.125rem solid #2D333B;
    display: flex;
    flex-direction: column;
    align-items: center;    
`

export const ImageProfile = styled.img<object>`
    border: 0;
    border-radius: 50%;
    max-width: 8rem;
`

export const DataProfileContainer = styled.div<object>`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    color: #999999;
    align-items:center;
`

export const DataProfileName = styled.span`
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
`

export const DataProfileNick = styled.span`
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.25rem;
`
export const DataProfileDescription = styled.span`
    display: block;
    font-size: 1rem;
    text-align: justify;
    margin-bottom: 1rem;
`