import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from './style';

export default function Dropdown(props) {
  const [nearestResult, setNearestResult] = useState(null); // Estado para armazenar o resultado mais próximo
  const history = useHistory();

  useEffect(() => {
    // Encontrar o resultado mais próximo quando os dados ou o valor de pesquisa mudam
    findNearestResult();
  }, [props.data, props.value]);

  const findNearestResult = () => {
    const searchTerm = props.value.toLowerCase();
    const nearestItem = props.data.find(item => item.title.toLowerCase().includes(searchTerm));
    setNearestResult(nearestItem);
  };

  const handleSelectResult = (title, id) => {
    props.returnedValue(title);
    props.clearInput();
    history.push(`/Meu_IFC_Light//search:${id}`); // Redirecionar para a página com o ID do item clicado
  };

  return (
    <Container>
      {/* Renderizar resultados filtrados */}
      {props.data && props.data.length > 0 && props.data
        .filter(item => {
          const searchTerm = props.value.toLowerCase();
          const title = item.title.toLowerCase();
          return searchTerm && title.startsWith(searchTerm) && title !== searchTerm;
        })
        .concat(nearestResult) // Adicionar o resultado mais próximo à lista de resultados filtrados
        .filter(item => item && item.id) // Remover itens inválidos sem id
        .filter((item, index, self) => self.findIndex(i => i.id === item.id) === index) // Remover duplicatas
        .slice(0, 6)
        .map(item => (
          <div onClick={() => handleSelectResult(item.title, item.id)} key={item.id}>
            {item.title}
          </div>
        ))}
    </Container>
  );
};
