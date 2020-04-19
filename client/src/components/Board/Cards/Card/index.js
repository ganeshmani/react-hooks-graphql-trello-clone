import React from "react";
import styled from "styled-components";
import { Container, Draggable } from "react-smooth-dnd";

const CardContainer = styled.div`
  border-radius: 3px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  position: relative;
  padding: 10px;
  cursor: pointer;
  max-width: 250px;
  margin-bottom: 7px;
  min-width: 230px;
`;

const CardContent = styled.div``;

const Card = ({ card }) => {
  return (
    <Draggable key={card.id}>
      <CardContainer className="card">
        <CardContent>{card.title}</CardContent>
      </CardContainer>
    </Draggable>
  );
};

export default Card;
