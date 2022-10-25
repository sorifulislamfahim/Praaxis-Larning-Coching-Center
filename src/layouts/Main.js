import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import SideNav from '../pages/Shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
                <Container>
                    <Row>
                        <Col lg="4">
                            <SideNav></SideNav>
                        </Col>
                        <Col lg="8">
                            <Outlet></Outlet>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
};

export default Main;