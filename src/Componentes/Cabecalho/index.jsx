import React from 'react'
import style from './cabecalho.module.css'

export default function Cabecalho() {
  return (
    <header className={style.cabecalho}>
        <img className={style.cabecalho__imagem} src="//static-public.pages.hotmart.com/uploads/media/file/2618687/expert_cursos_-_logos_rgb_-_aberto-25.png" alt="Logo" />
    </header>
  )
}
