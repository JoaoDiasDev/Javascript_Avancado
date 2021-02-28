import React from 'react'
import Main from '../template/Main'

export default function Home(props) {
    return (
        <Main Main icon="home" title="Início" subtitle="Segundo Projeto React." >
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema de cadastros em React!</p>
        </Main>
    )
}