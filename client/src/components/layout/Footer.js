import React from 'react'

export const Footer = () => {
    return (
        <footer className="container">
            <ul className="nav justify-content-center">
                <li className="nav-item"><a className="nav-link text-black-50" href="/"><i className="icofont-facebook"></i></a></li>
                <li className="nav-item"><a className="nav-link text-black-50" href="/"><i className="icofont-twitter"></i></a></li>
                <li className="nav-item"><a className="nav-link text-black-50" href="/"><i className="icofont-linkedin"></i></a></li>
                <li className="nav-item"><a className="nav-link text-black-50" href="/"><i className="icofont-pinterest"></i></a></li>
                <li className="nav-item"><a className="nav-link text-black-50" href="/"><i className="icofont-instagram"></i></a></li>
            </ul>
            <p className="text-center">© 2021. The Artist Blue Book</p>
        </footer>
    )
}

export default Footer;
