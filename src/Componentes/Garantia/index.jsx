import React from 'react'
import style from './garantia.module.css'

export default function Garantia() {
  return (
    <main className={style.conteudo__garantia}>
        <img src="//static-public.pages.hotmart.com/uploads/media/file/5100946/garantia_nova.png" alt="Selo de Garantia" />
        <section className={style.conteudo__garantia__textos}>
            <h4>7 dias de garantia incondicional</h4>
            <p>Você tem 7 dias para acessar o conteúdo e se ainda achar que os cursos não são para você, basta enviar um e-mail solicitando o reembolso e devolveremos todo o seu dinheiro, sem perguntas! Mesmo que a compra seja efetuada via boleto, cartão de crédito ou pix.</p>
        </section>
    </main>
  )
}
