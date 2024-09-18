import { useState } from "react";
import { SearchUser } from "./components/Form"
import { Profile } from "./components/Profile";
import { Repository } from "./components/Repository";
import { User } from "./models/user";
import { Item } from "./models/item";
import { GitHub } from "./services/api";
import { AxiosError } from "axios";
import { Message } from "./components/Message";
import { HeaderContainer, MainContainer, RootContainer } from "./styles";

export const App = () => {
  const [user, setUser] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<User | null>();
  const [items, setItems] = useState<Item[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [currentRepo, setCurrentRepo] = useState<string>('');
  const [history, setHistory] = useState<Item[]>([]);

  
  const getUserData = async () => {
    setCurrentUser(null);
    setItems([]);
    setIsError(false);
    setCurrentRepo('');
    GitHub.getUser(user).then((resultUser) => {
      if(resultUser!=null){
        setCurrentUser(resultUser);
        
        GitHub.getRepositories(user).then((resultData) => {
          setItems(resultData);
        }).catch((err: AxiosError) => {
          console.log(err.code);
          setIsError(true);
        });
      }
    }).catch((err: AxiosError) => {
      console.log(err.code);
      setIsError(true);
    });
  }

  function handleSearchEvent() {
    getUserData();
  }

  function handleSearchRepoEvent() {
    if(currentRepo!==''){
      if(history.length > 0){
        const filteredItems = history.filter((e) => e.name.includes(currentRepo)); 
        setItems(filteredItems);  
      } else {      
        const filteredItems = items.filter((e) => e.name.includes(currentRepo)); 
        setHistory(items);
        setItems(filteredItems);  
      }
    }
  }

  function handleClearRequest(){
    if(history.length > 0){
      setItems(history);  
      setHistory([]);
      setCurrentRepo('');
    }
  }

  return (
    <RootContainer>
        <HeaderContainer>Wiki de Repositórios do GitHub Com React</HeaderContainer>
        <MainContainer>
        <SearchUser onClick={handleSearchEvent} 
                value={user} 
                onChange={event => setUser(event.target.value)} />
         {
          isError ? (
            <Message label="Houve um ou mais erros ao tentar localizar o usuário e carregar seus repositórios" />
          ) : null
         }
         {
            currentUser!=null ? (
              <Profile name={currentUser.name} 
                       nick={currentUser.login} 
                       description={currentUser.bio} 
                       image={currentUser.avatar_url}/>
            ) : null
          }
          {
            items?.length > 0 ? (
              <Repository 
                 items={items}
                 value={currentRepo} 
                 onSearchClick={handleSearchRepoEvent}
                 onClearClick={handleClearRequest}
                 onChange={event => setCurrentRepo(event.target.value)}    
               />
            ) : null
          }
      </MainContainer>
    </RootContainer>
   )
}