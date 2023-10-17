import React from 'react'
import style from './rodape.module.css'

export default function Rodape() {
  return (
    <footer className={style.rodape}>
        <img src="//static-public.klickpages.com.br/uploads/media/file/2617776/expert_cursos_-_logos_rgb-06_-_sem_fundo.png" alt="Logo" />
        <a href="https://api.whatsapp.com/send?phone=5513997422340&text=Ol%C3%A1%20Expert%20Cursos%2C" target='_blank'>WhatsApp (13)99742-2340</a>
        <p>suporte@experttcursos.com.br</p>
    </footer>
  )
}
