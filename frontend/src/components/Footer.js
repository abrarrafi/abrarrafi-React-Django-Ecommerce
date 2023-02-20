import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function Header(){
    return(
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy;</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Header;