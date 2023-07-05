import React from 'react';
import { styled } from 'styled-components';

interface ConteinerProps {
  children: any;
}

const StyleConteiner = styled.div`
  width: 100%;
`;

const Conteiner = ({ children }: ConteinerProps) => {
  return <StyleConteiner>{children}</StyleConteiner>;
};

export default Conteiner;
