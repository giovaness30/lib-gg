import React from 'react';
import './Conteiner.scss';

interface ConteinerProps {
  children: any;
}

const Conteiner = ({ children }: ConteinerProps) => {
  return <div className="conteiner">{children}</div>;
};

export default Conteiner;
