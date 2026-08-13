import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = ()=>{
    return(
        <footer class="site-footer">
            <div class="footer-top">
                <div class="footer-brand">
                <h4>VAULT<span>_</span>ARCHIVE</h4>
                <p>Sistema de armazenamento seguro. Todos os dados criptografados.</p>
                </div>

                <div class="footer-col">
                <h5>NAVEGAÇÃO</h5>
                <Link to={'/'}>Início</Link>
                <Link to={'archive'}>Catálogo</Link>
                <a href="#">Sobre</a>
                </div>

                <div class="footer-col">
                <h5>SISTEMA</h5>
                <a href="#">Status: <span class="status-dot"></span> Online</a>
                <a href="#">256-bit Encryption</a>
                <a href="#">API Docs</a>
                </div>
            </div>

            <div class="footer-bottom">
                <p>&copy; 2026 VAULT ARCHIVE — TODOS OS DIREITOS RESERVADOS</p>
                <p class="footer-code">// build_0x7F3A</p>
            </div>
            </footer>
    )
} 