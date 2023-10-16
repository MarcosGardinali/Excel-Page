import React from 'react'
import style from './videoapresentacao.module.css'

export default function VideoApresentacao() {
  return (
    <iframe className={style.video__apresentacao} src="https://www.youtube.com/embed/6IIirlrgQUo" title="Cursos de Excel e Power BI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}
