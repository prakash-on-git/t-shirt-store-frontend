import { Col, Container, Row } from "react-bootstrap";
import productBg from "../../Images/clothing-store.png";
import "./banner.css";

const Banner = ({title}) => {
    return ( 
        <div className="image-container">
            <img src={productBg} alt="Product-bg" />
            <div className="overlay">
                <Container>
                    <Row>
                        <Col>
                            <h2 id="text-heading">{title+"'s"}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;
