import * as React from 'react';
import Box from '@mui/material/Box';
import './Header.css';

const style = {
  width: 85,
  height: 80,
  margin: '10px',
  borderRadius: '2px',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#DDF1FB',
    opacity: [0.9, 0.8, 0.7],
  }
}

export default function HeaderApp({ title, onClick, index }) {

  return (
    <Box sx={style} onClick={onClick}>
      <div className='box-menu'>
        {/* <WidgetsIcon className="box-menu-icon" sx={{ fontSize: 30 }} /> */}
        <img src={`https://raw.githubusercontent.com/AgsiSistemas/agsi.br.componente/master/public/img/IconsModules/${title.toUpperCase()}.png`} alt={title} />
        {/* <img src={`img/IconsModules/${title.toUpperCase()}.png`} alt={title} /> */}
        {/* <i className="pi pi-th-large box-menu-icon"/> */}
        <p>{title}</p>
      </div>
    </Box>
  );
}