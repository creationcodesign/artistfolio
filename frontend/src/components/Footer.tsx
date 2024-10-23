
export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer>
            <h2>Footer</h2>
            <p>© {year}</p>
        </footer>
    )
}
