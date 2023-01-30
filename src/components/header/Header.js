import "./Header.css";

export default function Header() {
    return (
        <header className="bg-dark text-white py-3 ">
            <div className="container d-flex justify-content-between align-items-center">
                <h2>Cocktails</h2>
                <div className="logo"></div>
            </div>
        </header>
    );
}
