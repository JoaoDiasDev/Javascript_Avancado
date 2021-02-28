import './Footer.css'
import React from 'react'

export default function Footer(props) {
    return (
        <footer className="footer">
            <span>
                Desenvolvido com <i className="fa fa-heart text-danger"></i> por
                <strong>Joao<span className="text-danger">Dias</span></strong>
            </span>
        </footer>
    )
}