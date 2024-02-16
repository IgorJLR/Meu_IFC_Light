import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Container } from './style';

export default function Dropdown(props) {
  return (
    <Container>
      {props.data.filter((item) => {
        const searchTerm = props.value.toLowerCase();
        const title = item.title.toLowerCase();
        return (
          searchTerm && title.startsWith(searchTerm) && title !== searchTerm
          // searchTerm && itemId === item.id && title !== searchTerm
        );
      }).slice(0, 6).map((item) => (
        <div onClick={() => {props.returnedValue(item.title); props.clearInput}} key={item.id}>
          {item.title}
        </div>
      ))}
    </Container>
  );
};
