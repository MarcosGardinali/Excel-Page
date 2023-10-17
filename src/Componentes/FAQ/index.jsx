import React from 'react'
import style from './faq.module.css'
import Botao from '../Botao'

export default function Faq() {
    return (
        <main className={style.conteudo__faq}>
            <h3>Perguntas Frequentes</h3>
            <section className={style.container__faq}>
                <h4>Quem pode fazer esse curso?</h4>
                <p>Qualquer pessoa que esteja buscando conhecimento e capacitação profissional, fique tranquilo(a) caso você não tenha nenhum conhecimento prévio, vamos desde o básico, desde os primeiros passos até a parte mais avançada.</p>
            </section>
            <section className={style.container__faq}>
                <h4>Como vou receber o curso?</h4>
                <p>Após realizar a sua inscrição você receberá o acesso ao curso em seu e-mail, basta clicar no botão ACESSAR MEU PRODUTO, criar a sua senha e começar o seu curso.</p>
            </section>
            <section className={style.container__faq}>
                <h4>Quanto tempo terei de acesso ao curso?</h4>
                <p>Você recebe acesso vitalício ao curso, pode estudar no seu tempo e no seu horário, assistir e reassistir as aulas quantas vezes quiser.</p>
            </section>
            <section className={style.container__faq}>
                <h4>O certificado é válido em todo o Brasil?</h4>
                <p>Nossos cursos profissionalizantes são denominados cursos livres e são autorizados a emitirem certificados com base Legal no Decreto N° 5.154, 23 de Julho de 2004, Art. 1° e 3° e de acordo com as normas do Ministério da Educação pela Resolução CNE n 04/99, Art 11º. Os cursos livres são uma modalidade de ensino legal e válida em todo o território nacional. Você pode usar os nossos certificados para colocar no seu currículo e são válidos para horas extracurriculares para a faculdade.</p>
            </section>
            <section className={style.container__faq}>
                <h4>Terei suporte durante o curso?</h4>
                <p>Sim, você terá acesso a nossa Área de Membros do curso e poderá tirar todas as suas dúvidas em cada aula com o professor.</p>
            </section>
            <section className={style.container__faq}>
                <h4>Quais as formas de pagamento?</h4>
                <p>Aceitamos diversas opções de pagamento, você pode pagar através do Cartão de Crédito, Boleto Bancário, Pix ou Paypal.</p>
            </section>
            <section className={style.container__faq}>
                <h4>Emitem nota fiscal?</h4>
                <p>Sim, todos os nossos cursos e produtos contam com Nota Fiscal, você receberá em seu e-mail, seja pessoa física ou pessoa jurídica (empresa).</p>
            </section>
            <section className={style.container__faq}>
                <h4>Esse site é seguro?</h4>
                <p>Sim, usamos o sistema de pagamento Hotmart, que é 100% seguro e confiável (100% criptografado), utilizado pelas maiores empresas de produtos digitais do Brasil.</p>
            </section>
            <Botao cor="rgb(67, 77, 128)">
                Quero me inscrever agora!
            </Botao>
        </main>
    )
}
