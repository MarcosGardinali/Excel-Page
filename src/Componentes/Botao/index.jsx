import React from 'react'
import style from './botao.module.css'

export default function Botao({children}) {
  return (
    <a href="https://go.hotmart.com/I87635787O?ap=da7d" className={style.botao}>{children}</a>
  )
}