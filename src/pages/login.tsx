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
        <section className="py-auto mt-5 login px-5 mx-5">
            <Container fluid="sm">
                <Row g="0"> 
                    <Col lg="5" className="px-0">
                        <img
                        alt=""
                        className="img-fluid" 
                        src="https://images.unsplash.com/photo-1640537702474-3e503c21eefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                        />
                    </Col>
                    <Col lg="7" className="text-center py-3">
                        <div>
                            <h1>Log In</h1> 
                        </div>
                        <div className="text-center py-3 pt-5">
                            <h4>Sign In With Google To Continue</h4>  
                        </div>
                        <div className="offset-2 col-lg-8">
                            <button onClick={signInWithGoogle} className="btnLogin">Google Log-In</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
} 