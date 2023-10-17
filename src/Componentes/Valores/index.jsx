import React from 'react'
import style from './valores.module.css'
import Botao from '../Botao'

export default function Valores() {
  return (
    <main className={style.conteudo__valores}>
      <h4>Desconto Exclusivo</h4>
      <section className={style.valores__container}>
        <h5>De <strong className={style.valor__risco}>R$297,00</strong></h5>
        <p>Por Apenas</p>
        <p className={style.valor__destaque}>R$97,00</p>
        <ul className={style.lista__pagamento__info}>
          <li><strong>&#10003;</strong> Pagamento em até 12x</li>
          <li><strong>&#10003;</strong> Taxa única, sem mensalidades</li>
          <li><strong>&#10003;</strong> Acesso vitalício</li>
          <li><strong>&#10003;</strong> Garantia de 7 dias</li>
          <li><strong>&#10003;</strong> Certificado Reconhecido</li>
          <li><strong>&#10003;</strong> Suporte Exclusivo</li>
          <li><strong>&#10003;</strong> Exercícios Práticos</li>
          <li><strong>&#10003;</strong> + Bônus Inclusos</li>
          <li><strong>&#10003;</strong> Receba agora em seu e-mail</li>
        </ul>
        <Botao cor="rgb(71, 179, 100)">
          Quero Me Inscrever Agora!
        </Botao>
      </section>
    </main>
  )
}
