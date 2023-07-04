import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { authorities } from '../../Assets/Enum/Authorities';



export const ToggleSideBar = () => {

  if (document.getElementById("layout-sidebar").style.display !== 'none') {
    document.getElementById("layout-sidebar").style.display = 'none'
  } else {
    document.getElementById("layout-sidebar").style.display = 'block'
  }
}

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));


export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const removeToken = () => {
  return localStorage.removeItem('agsi-tk')
}

export const setAwaysOpenMenu = () => {
  try {
    return localStorage.setItem('awaysOpenMenu', 'not')
  } catch {
    return localStorage.removeItem('awaysOpenMenu')
  }
}

export const getAwaysOpenMenu = () => {
  try {
    let value = localStorage.getItem('awaysOpenMenu') || ""
    return value
  } catch {
    return ""
  }
}

export const setRememberMenuLocalStorage = (status) => {

  localStorage.setItem('RememberMenu', status)
  // if(status)
  //    localStorage.setItem('RememberMenu', status)
  // else
  //    localStorage.removeItem('RememberMenu')
}

export const getRememberMenuLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('RememberMenu'))
  } catch {
    return true
  }
}

export function roleUserBeneficiarie() {

  const agsiJwt = localStorage.getItem('agsi-tk') ? parseJwt(localStorage.getItem('agsi-tk')) : ''

  if (!agsiJwt) { return }

  if (agsiJwt.authorities.includes(authorities.ROLE_BENEFICIARIO)) {
    console.log(agsiJwt.code);
    return { 'wallet': agsiJwt.code }
  }
  else {
    return false
  }
}

export const roleUserAGSI = () => {
  const agsiJwt = localStorage.getItem('agsi-tk') ? parseJwt(localStorage.getItem('agsi-tk')) : ''
  if (!agsiJwt) return false
  if (agsiJwt.code.trim() == 'AGSI') return true

  return false
}

export const parseJwt = (token) => {

  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export const getOperator = () => {

  try {
    let token = localStorage.getItem('agsi-tk')
    var decodedToken = parseJwt(token)
    return decodedToken.code.replace(/\s/g, '')
  } catch {
    return ""
  }
}