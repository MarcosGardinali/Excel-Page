import React from 'react'
import style from './conteudo.module.css'
import VideoApresentacao from '../Video__Apresentacao'
import Botao from '../Botao'
import SecaoSobre from '../Secao__Sobre'
import Certificados from '../Certificados'
import ConteudoBonus from '../ConteudoBonus/ConteudoBonus'
import Depoimentos from '../Depoimentos'
import Comunidade from '../Comunidade'
import Apostilas from '../Apostilas'
import QuemSomos from '../QuemSomos'
import Garantia from '../Garantia'
import Valores from '../Valores'
import Faq from '../FAQ'

export default function Conteudo() {
  return (
    <main className={style.conteudo}>
        <h1 className={style.conteudo__titulo}>Cursos de <strong className={style.conteudo__titulo__excel}>Excel</strong> e <strong className={style.conteudo__titulo__power}>Power BI</strong></h1>
        <VideoApresentacao />
        <Botao cor="rgb(67, 77, 128)">
          Matricule-se aqui! Com certificado!
        </Botao>
        <SecaoSobre />
        <Certificados />
        <ConteudoBonus />
        <Depoimentos />
        <Comunidade />
        <Apostilas />
        <QuemSomos />
        <Garantia />
        <Valores />
        <Faq />
    </main>
  )
}
