import { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { Container, SearchInputs } from './style';

import Dropdown from '../dropdown';
import icon from '../../assets/imgs/searchIcon.svg';

function Search({ placeholder, data }) {
  const [value, setValue] = useState("");
  const history = useHistory();
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const clearInput = (e) => {
    setValue(e.target.value)
  };

  // formata o termo buscado e interpola na url
  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    const searchTermId = data.find(element => element.title === searchTerm)
    console.log(searchTerm)
    history.push(`/search:${searchTermId.id}`);
  };

  return (
    <Container>
      <SearchInputs>
        <input type="text" placeholder={placeholder} value={value} onChange={onChange} />
        <button onClick={() => {onSearch(value); setValue(() => ''); }} disabled={!value} type="submit"><i><img src={icon} alt="search icon" /></i></button>
      </SearchInputs>
      <Dropdown data={data} value={value} returnedValue={setValue} clearInput={clearInput} />
    </Container>

  );
};

export default withRouter(Search);
