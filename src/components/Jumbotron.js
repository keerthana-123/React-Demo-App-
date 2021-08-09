import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstarp';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${boatImage}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => {
  <Jumbo fluid classname="Jumbo">
    <div classname="overlay" />
    <Container>
      <h1>
        Welcome
        <p>KeerthiSaleem Together Forever</p>
      </h1>
    </Container>
  </Jumbo>;
};
