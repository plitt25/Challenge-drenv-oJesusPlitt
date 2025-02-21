import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3 mt-4">
            <Container className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        width="40"
                        height="40"
                        className="me-2 rounded-circle"
                    />
                    <span className="fw-bold">Productos Challenge</span>
                </div>

                <div className="text-center">
                    <small>&copy; {new Date().getFullYear()} by Jesus David Plitt Torres</small>
                </div>
                <div>
                    <a
                        href="https://www.linkedin.com/in/jesus-david-plitt-torres-fullstack"
                        className="text-white me-3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Linkedin
                    </a>

                </div>
            </Container>
        </footer>
    );
};

export default Footer;
