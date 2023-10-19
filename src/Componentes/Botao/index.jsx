import React from 'react'
import style from './botao.module.css'

export default function Botao({children, cor}) {
  return (
    <a style={{backgroundColor: cor}} href="https://go.hotmart.com/I87635787O?ap=2867" className={style.botao}>{children}</a>
  )
}