import { useState } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Main from "../main/Main";
import OffCanvasCocktail from "../offCanvas/OffCanvasCocktail";

export default function App() {
    const [id, setId] = useState(null);
    const [showCanvas, setCanvas] = useState(false);
    const handleCloseCanvas = () => setCanvas(false);
    const handleShowCanvas = (id) => {
        setCanvas(true);
        setId(id);
    };

    return (
        <>
            <Header />
            <Main handleShowCanvas={handleShowCanvas} />
            <Footer />
            {showCanvas ? (
                <OffCanvasCocktail id={id} showCanvas={showCanvas} handleCloseCanvas={handleCloseCanvas} />
            ) : null}
        </>
    );
}
