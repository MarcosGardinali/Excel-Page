import React from 'react'
import style from './conteudo.module.css'
import VideoApresentacao from '../Video__Apresentacao'
import Botao from '../Botao'
import SecaoSobre from '../Secao__Sobre'
import Certificados from '../Certificados'

export default function Conteudo() {
  return (
    <main className={style.conteudo}>
        <h1 className={style.conteudo__titulo}>Cursos de <strong className={style.conteudo__titulo__excel}>Excel</strong> e <strong className={style.conteudo__titulo__power}>Power BI</strong></h1>
        <VideoApresentacao />
        <Botao>
          Matricule-se aqui! Com certificado!
        </Botao>
        <SecaoSobre />
        <Certificados />
    </main>
  )
}
