import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Services from "../../services/Services";
import Circular from "../circular/Circular";

export default function Random() {
    const cocktailService = new Services();
    const [loading, setLoading] = useState(true);
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        cocktailService.getRandomCocktail().then((res) => {
            setLoading(false);
            setCocktail(res);
        });
    }, []);

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <Circular />
                </div>
            ) : (
                <View cocktail={cocktail} />
            )}
        </>
    );
}

function View({ cocktail }) {
    const { isAlc, cat, name, img, desc, ings } = cocktail;
    return (
        <div className="container">
            <Card className="border-1">
                <Row>
                    <Col lg={6}>
                        <Card.Img className="random-img" variant="top" src={img} alt={name} />
                    </Col>
                    <Col lg={6}>
                        <Card.Body>
                            <Card.Title>
                                <h2>{name}</h2>
                                <br />
                                <small>{isAlc + " - " + cat}</small>
                            </Card.Title>
                            <h4>Ingredients: </h4>
                            <ul>
                                {ings?.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <Card.Text className="rand-desc">{desc}</Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}
