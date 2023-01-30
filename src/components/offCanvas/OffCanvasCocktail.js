import { useEffect, useState } from "react";
import { Card, Offcanvas } from "react-bootstrap";
import Services from "../../services/Services";

export default function OffCanvasCocktail({ showCanvas, handleCloseCanvas, id }) {
    const cocktailService = new Services();
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        cocktailService.getCocktailById(id).then((res) => setCocktail(res));
        console.log(cocktail);
    }, []);

    const { img, name, isAlc, cat, ings, desc } = cocktail;
    return (
        <Offcanvas show={showCanvas} onHide={handleCloseCanvas}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Card>
                    <Card.Img variant="top" src={img} alt={name} />
                    <Card.Body>
                        <Card.Title>
                            <h2>{name}</h2>
                            <br />
                            <small>{isAlc + " - " + cat}</small>
                        </Card.Title>
                        <h4>Ingredients: </h4>
                        <ul>
                            {ings?.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                        <Card.Text>{desc}</Card.Text>
                    </Card.Body>
                </Card>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
