import React from 'react'
import style from './secaosobre.module.css'
import ListaExcelPower from '../ListaExcelPower'
import Botao from '../Botao'

export default function SecaoSobre() {
    return (
        <main className={style.conteudo__sobre}>
            <h2 className={style.conteudo__sobre__titulo}>
                <strong className={style.conteudo__sobre__titulo__destaque}>12x R$19,19</strong>
                ou apenas R$197 à vista
            </h2>
            <p className={style.conteudo__sobre__texto}>Nossos cursos online priorizam o tempo dos alunos, com videoaulas de no máximo 20 minutos, conteúdo direto, execução passo a passo de todos os módulos e exercícios práticos. Você vai aprender tudo sobre Excel e Power BI Do BÁSICO ao AVANÇADO e com CERTIFICADOS RECONHECIDOS como capacitação profissional com carga horária de 60 horas, uma Área de Membros exclusiva onde você pode tirar todas as suas dúvidas com nossos professores. Confira abaixo todo o conteúdo do curso:</p>
            <ListaExcelPower /> 
            <Botao cor="rgb(67, 77, 128)">
                Quero me capacitar profissionalmente
            </Botao>      
        </main>
    )
}
