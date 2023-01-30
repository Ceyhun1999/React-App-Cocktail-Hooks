export default function Footer() {
    let data = new Date().getFullYear()
    return (
        <footer className="bg-dark text-light py-2 text-center">
            <div className="container">Copyright &copy; {data}</div>
        </footer>
    );
}
