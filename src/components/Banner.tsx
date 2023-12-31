import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const text = {
    title: 'Come explore our beautiful lands!'
}

const Banner = () => {
    return (
        <section className="py-3 banner">
            <Container>
                <Row>
                    <Col className='text-center'>
                        <h2>{text.title}</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;