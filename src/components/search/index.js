import { useState, useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Container, SearchInputs } from './style';
import Dropdown from '../dropdown';
import icon from '../../assets/imgs/searchIcon.svg';
import jsonData from '../../assets/data.json'; // Importar o arquivo JSON

// Função para calcular a similaridade de Jaccard entre duas strings
function jaccardSimilarity(str1, str2) {
  const set1 = new Set(str1);
  const set2 = new Set(str2);
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  return intersection.size / union.size;
}

function Search({ placeholder }) {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const history = useHistory();
  const [closestMatchTitle, setClosestMatchTitle] = useState(null);

  useEffect(() => {
    // Verificar se há uma entrada válida antes de carregar os dados
    if (value.trim()) {
      // Filtrar os itens com base na entrada atual
      onSearch(value);
    } else {
      // Limpar os dados filtrados se não houver entrada
      setFilteredData([]);
      setClosestMatchTitle(null);
    }
  }, [value]);

  const onChange = (event) => {
    const searchValue = event.target.value;
    setValue(searchValue);
  };

  const clearInput = () => {
    setValue("");
    setClosestMatchTitle(null); // Limpar o título do item mais próximo
  };

  const onSearch = (searchValue) => {
    const trimmedValue = searchValue.trim().toLowerCase();

    // Filtrar os itens com base na similaridade de Jaccard
    const filteredSet = new Set();
    const sortedFilteredData = [];

    jsonData.forEach(item => {
      const similarity = jaccardSimilarity(trimmedValue, item.title.toLowerCase());
      if (similarity > 0.0001 && !filteredSet.has(item.title)) {
        filteredSet.add(item.title);
        sortedFilteredData.push(item);
      }
    });

    // Atualize os itens filtrados para o dropdown
    setFilteredData(sortedFilteredData);

    // Defina o título do item mais semelhante para exibição opcional
    const mostSimilarItem = sortedFilteredData.length > 0 ? sortedFilteredData[0].title : null;
    setClosestMatchTitle(mostSimilarItem);
  };

  const handleSearchClick = () => {
    onSearch(value);
  };

  return (
    <Container>
      <SearchInputs>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        <button onClick={handleSearchClick} disabled={!value} type="submit"><i><img src={icon} alt="search icon" /></i></button>
      </SearchInputs>
      {value.trim() && <Dropdown data={filteredData} value={value} returnedValue={setValue} clearInput={clearInput} closestMatchTitle={closestMatchTitle} />}
    </Container>
  );
};

export default withRouter(Search);
