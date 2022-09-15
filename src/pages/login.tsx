import {auth, provider } from '../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from 'react-bootstrap/'


export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        navigate("/");
    }

    return (
        <Container fluid="md" className="mt-5">
            <Row g="0"> 
                <Col lg="5">
                    <img
                    alt=""
                    className="img-fluid" 
                    src="https://images.unsplash.com/photo-1640537702474-3e503c21eefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    />
                </Col>
                <Col lg="7">
                    <h1>Login</h1>
                    <h3>Sign In With Google To Continue</h3>
                    <button onClick={signInWithGoogle}>Sign In With Google</button>
                </Col>
            </Row>
        </Container>
    );
} 