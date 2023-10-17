import React from 'react'
import style from './conteudobonus.module.css'
import { AiFillCheckCircle } from 'react-icons/ai';
import Botao from '../Botao'

export default function ConteudoBonus() {
  return (
    <section className={style.conteudo__bonus}>
      <h3 className={style.conteudo__bonus__titulo}>Além de todo o Conteúdo do Curso Você Ainda Recebe <strong>10 Aulas BÔNUS</strong> com <strong>MODELOS PRONTOS</strong> de Planilhas no <strong className={style.conteudo__bonus__titulo__excel}>Excel</strong> e Dashboards no <strong className={style.conteudo__bonus__titulo__power}>Power BI</strong></h3>
      <section className={style.container__imagens__bonus}>
        <img src="//static-public.pages.hotmart.com/uploads/media/file/3713709/imagem_1.png" alt="Bonus" />
        <img src="//static-public.pages.hotmart.com/uploads/media/file/3183884/design_sem_nome_(16).png" alt="Bonus" />
        <img src="//static-public.pages.hotmart.com/uploads/media/file/3713712/imagem_3.png" alt="Bonus" />
        <img src="//static-public.pages.hotmart.com/uploads/media/file/6151854/1.jpg" alt="Bonus" />
        <img src="//static-public.pages.hotmart.com/uploads/media/file/6151857/2.jpg" alt="Bonus" />
        <img src="//static-public.pages.hotmart.com/uploads/media/file/6151859/3.jpg" alt="Bonus" />
      </section>
      <section className={style.listas__excel__power}>
        <ul className={style.lista}>
          <li className={style.lista__excel}><AiFillCheckCircle color='rgb(51, 102, 30)' size={50} />PLANILHA PARA FLUXO DE CAIXA</li>
          <li><AiFillCheckCircle color='rgb(51, 102, 30)' size={45} />CURVA ABC</li>         
          <li><AiFillCheckCircle color='rgb(51, 102, 30)' size={45} />GRÁFICO DE GANTT</li>
          <li><AiFillCheckCircle color='rgb(51, 102, 30)' size={45} />PLANILHA ORÇAMENTÁRIA</li>
          <li><AiFillCheckCircle color='rgb(51, 102, 30)' size={45} />PLANILHA PARA CONTROLE FINANCEIRO</li>
          <li><AiFillCheckCircle color='rgb(51, 102, 30)' size={45} />E MUITO MAIS...</li>
        </ul>
        <ul className={style.lista}>
          <li className={style.lista__power}><AiFillCheckCircle color='rgb(255, 193, 7)' size={45} />DASHBOARD COMERCIAL</li>
          <li><AiFillCheckCircle color='rgb(255, 193, 7)' size={45} />DASHBOARD DE VENDAS E DEVOLUÇÕES</li>
          <li><AiFillCheckCircle color='rgb(255, 193, 7)' size={45} />DASHBOARD DE RH/FUNCIONÁRIOS</li>
          <li><AiFillCheckCircle color='rgb(255, 193, 7)' size={45} />DASHBOARD DE METAS E RESULTADOS</li>
          <li><AiFillCheckCircle color='rgb(255, 193, 7)' size={45} />DASHBOARD PARA ANÁLISE DE PRODUTOS  </li>
          <li><AiFillCheckCircle color='rgb(255, 193, 7)' size={45} />E MUITO MAIS...</li>
        </ul>
      </section>
      <Botao cor="rgb(67, 77, 128)">
        Quero Aprender Excel e Power Bi
      </Botao>
      <p className={style.conteudo__bonus__subtitulo}>Sem mensalidades e sem taxas adicionais!</p>
      <p className={style.conteudo__bonus__subtitulo}><strong className={style.conteudo__bonus__subtitulo__destque}>+ mais de 85.000 alunos em 41 países!</strong></p>
      <p className={style.conteudo__bonus__subtitulo}>O que dizem os alunos?</p>
    </section>
  )
}
