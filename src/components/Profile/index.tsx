import { DataProfileContainer, DataProfileDescription, DataProfileName, 
         DataProfileNick, ImageProfile, ProfileContainer } from "./styles";

type ProfileProps = {
    name: string,
    nick: string,
    description: string,
    image: string,
}

export const Profile = (props: ProfileProps) => {
    return (
        <ProfileContainer>
            <ImageProfile src={props.image} alt="picture" title="picture" />
            <DataProfileContainer>
                <DataProfileName>{props.name}</DataProfileName>
                <DataProfileNick>{props.nick}</DataProfileNick>
                <DataProfileDescription>{props.description}</DataProfileDescription>
            </DataProfileContainer>
        </ProfileContainer>
    );
}