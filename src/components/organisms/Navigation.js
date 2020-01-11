import React from 'react'
import styled from 'styled-components'
import {Row, Col, Container, Nav } from 'react-bootstrap';

/* Styling */

const Anchor = styled.a`
  color: #FFC759 !important;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  &:hover {
      text-decoration: none;
      color: #FFC759;
  }
`

const P = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  float: right;
  margin-top: 5px;
  color: #545454
  font-weight: 700;
`

const Input = styled.input`

  width: 100%;
  height: 48px;
  border-radius: 5px;
  padding-left: 50px;
  border: none;
  letter-spacing: 2px;
  font-weight: 100;
  ::placeholder{
      color: lightgrey;
      font-weight: 400;
  }
`

const BigButton = styled.input`
  background: #FFC759;
  width: 100%;
  height: 48px;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-weight: 500;
`

const Circle = styled.div`
    height: 80px;
    margin: 0 auto;
    width: 80px;
    border-radius: 50%;
    border-color: #266db9;
    border-style: solid;
    background: #266db9;
    border-width: 2px;
    position: absolute;
    left: 50%;
    z-index: 999999;
    left: calc(50% - 45px);
    cursor: pointer;
`;

/* End Styling */

class Navigation extends React.Component {

    constructor(props) {

        super(props);
        this.state = {};

    }

    // Removes the access token when the user is logging out
    removeAccessToken(){
        localStorage.removeItem('accessToken')
        window.location.href = "login";
    }

    render() {
        return (
            <Container className="mt-5">
            <a href="/"><Circle className="mt-2"><i className="fas fa-home home-glyph fa-2x"></i></Circle></a>
                    <Nav>
                        <Row className="nav-row">
                            <Col className="nav-col">
                                <Nav.Item>
                                    <i className="fas fa-map-marker-alt glyph"></i>
                                    <Nav.Link href="locations" className="nav-link">Locaties</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <i className="fas fa-tasks glyph task-icon"></i>
                                    <Nav.Link href="tasks" className="nav-link">Taken</Nav.Link>
                                </Nav.Item>
                            </Col>

                            <Col className="nav-col">
                                <Nav.Item>
                                    <i className="fas fa-sign-out-alt glyph"></i>
                                    <Nav.Link href="login" onClick={this.removeAccessToken} className="nav-link">Uitloggen</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <i className="fas fa-chart-line glyph"></i>
                                    <Nav.Link href="/" className="nav-link">Overzicht</Nav.Link>
                                </Nav.Item>
                            </Col>
                        </Row>
                    </Nav>
            </Container>
        );
    }
}

export default Navigation