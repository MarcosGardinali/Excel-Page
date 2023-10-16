import React from 'react'
import style from './certificados.module.css'

export default function Certificados() {
  return (
    <section className={style.conteudo__certificados}>
        <h3 className={style.conteudo__certificados__titulo}>Certificados Reconhecidos</h3>
        <p className={style.conteudo__certificados__texto}>Certificados emitidos de forma online em PDF. Válido em todo território nacional na comprovação de atividades de capacitação profissional, aperfeiçoamento e atividades complementares.</p>
        <p className={style.conteudo__certificados__texto__lei}>(Lei 9394/96, Decreto 5154, Deliberação CEE 14/97)</p>
        <section className={style.imagem__container}>
            <img src="//static-public.pages.hotmart.com/uploads/media/file/5532634/certificado_excel_site_com_borda.jpg" alt="Certificado" />
            <img src="//static-public.pages.hotmart.com/uploads/media/file/3400756/expert_cursos_-_logos_rgb_-_aberto-25.png" alt="Certificado" />
            <img src="//static-public.pages.hotmart.com/uploads/media/file/5809490/certificado_power_bi_site_com_borda.jpg" alt="Certificado" />
        </section>
    </section>
  )
}
