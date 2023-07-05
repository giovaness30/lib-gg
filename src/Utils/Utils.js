import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

export const handleLoading = (text, isLoading) => {
  return isLoading ? <CircularProgress /> : text
}
export const isNullValue = (value) => {
  return value === undefined || value === null || value === ''
}
export function currencyFormatter(value) {
  if (!Number(value)) return;

  const amount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(value / 100);
  return `${amount}`;
}