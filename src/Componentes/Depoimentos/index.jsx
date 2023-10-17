import React from 'react'
import style from './depoimentos.module.css'

export default function Depoimentos() {
    return (
        <main className={style.conteudo__depoimentos}>
            <section className={style.depoimento__video__container}>
                <iframe className={style.depoimento__video} src="https://www.youtube.com/embed/rcO40IKMJUg" title="Depoimento Curso de Excel" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <article className={style.depoimento__container__texto}>
                    <h4>Leonardo Rodrigues</h4>
                    <p>"Recentemente eu terminei o Curso de Excel da Expert Cursos, eu já utilizava o Excel, mas graças ao curso eu pude aprender coisas que eu tinha esquecido e diversas coisas novas. Me sinto muito mais preparado para fazer Planilhas, Tabelas e Dashboards e depois de muito tempo consegui atualizar o meu currículo".</p>
                </article>
            </section>
            <section className={style.depoimentos__container}> 
                <img src="//static-public.pages.hotmart.com/uploads/media/file/6151909/58.png" alt="Depoimento" />
                <img src="//static-public.pages.hotmart.com/uploads/media/file/5031234/2.png" alt="Depoimento" />
                <img src="//static-public.pages.hotmart.com/uploads/media/file/5032217/22.jpg" alt="Depoimento" />
                <img src="//static-public.pages.hotmart.com/uploads/media/file/6151917/60.jpg" alt="Depoimento" />
                <img src="//static-public.pages.hotmart.com/uploads/media/file/6782092/75.jpg" alt="Depoimento" />
                <img src="//static-public.pages.hotmart.com/uploads/media/file/5031218/1.png" alt="Depoimento" />
                <img src="//static-public.pages.hotmart.com/uploads/media/file/6151912/59.jpg" alt="Depoimento" />
                <img src="//static-public.pages.hotmart.com/uploads/media/file/5031273/6.png" alt="Depoimento" />
                <img src="//static-public.pages.hotmart.com/uploads/media/file/5031259/3.png" alt="Depoimento" />
            </section>
        </main>
    )
}
