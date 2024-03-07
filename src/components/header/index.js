import { useHistory } from "react-router-dom";
import Data from '../../assets/data.json';

import Search from '../search';

import { Container, GreetingsHeader, Greetings } from "./style";

import mapPointerIcon from '../../assets/imgs/map-pointer.svg';
import homeIcon from '../../assets/imgs/home.svg';

export default function Header() {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push('/Meu_IFC_Light/');
  }
  return (
    <Container>
      <GreetingsHeader>
        <Greetings>
          <small>Bem-vindo(a) ao</small>
          <h1>meuifc</h1>
        </Greetings>
        <div>
          <button><img src={mapPointerIcon} alt="" /></button>
          <button onClick={handleBackToHome}><img src={homeIcon} alt="" /></button>
        </div>
      </GreetingsHeader>
      <Search placeholder="Onde Gostaria de Ir?" data={Data} />
    </Container>
  );
};
