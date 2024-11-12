import Navbar from "./Navbar"

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <h2>Nikita</h2>
            <div className="footer-bottom">
                <p>© {year}</p>
                <Navbar />
            </div>
        </footer>
    )
}
