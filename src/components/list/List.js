import { useEffect, useState } from "react";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";
import Services from "../../services/Services";
import "./List.css";

export default function List({ handleShowCanvas }) {
    const cocktailService = new Services();
    const [cocktailArr, setCocktailArr] = useState([]);
    const [error, setError] = useState(false);
    const [letter, setLetter] = useState("a");
    const [active, setActive] = useState(0);

    useEffect(() => {
        cocktailService.getCocktailByLetter(letter).then(
            (res) => {
                setCocktailArr(res);
            },
            (error) => onError()
        );
    }, [letter]);

    const changeLetter = (x, y) => {
        setError(false);
        setLetter(y);
        setActive(x);
    };

    const onError = () => {
        setError(true);
    };

    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letters = [];
    for (let i = 0; i < abc.length; i++) {
        letters.push(
            <Pagination.Item
                onClick={() => changeLetter(i, abc[i].toLowerCase())}
                key={i}
                active={i === active}>
                {abc[i]}
            </Pagination.Item>
        );
    }

    return (
        <>
            (
            <Container className="">
                <h2 className="text-center text-light pb-3">Cocktails By First Letter</h2>
                <div className="pagin d-lg-flex justify-content-center">
                    <Pagination className="my-0 mx-auto pb-3">{letters}</Pagination>
                </div>
                {error ? (
                    <ErrorList />
                ) : (
                    <Row sm={2} xs={1} md={2} lg={3} className="g-4">
                        {cocktailArr.map((item, idx) => (
                            <Col className="" key={idx}>
                                <Card className="h-100 card-magic">
                                    <Card.Img variant="top" src={item.img} alt={item.name} />
                                    <Card.Body>
                                        <Card.Title>
                                            {item.name}{" "}
                                            <i>
                                                {item.cat} - {item.isAlc}
                                            </i>{" "}
                                        </Card.Title>
                                        <Card.Text className="ing">
                                            <b>Ingredients: </b> <i>{item.ings.join(", ")}</i>
                                        </Card.Text>
                                        <Card.Text className="cardDesc">{item.desc}</Card.Text>
                                    </Card.Body>
                                    <button
                                        className="btn"
                                        onClick={() => handleShowCanvas(item.id)}
                                        variant="primary"
                                        size="sm">
                                        Read more...
                                    </button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
            </Container>
            )
        </>
    );
}

function ErrorList() {
    return <h4 className="text-light text-center py-3">There is no cocktail starting with this letter</h4>;
}
