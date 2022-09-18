import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CustomNavbar = () => {
  const [user] = useAuthState(auth);

  const logOut = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/login">
            <img
              alt=""
              src="https://www.passaro.org/wp-content/uploads/2018/11/Ema.jpg"
              width="50"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            The Social App!
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="text-white">Home</Nav.Link>
              {user ? (<Nav.Link href="/createpost" className="text-white">Create Post</Nav.Link>) : ""}
            </Nav>
            <Nav className="ms-auto">
                {!user && (
                    <>
                    <Nav.Link href="/login" className="text-white">Log In</Nav.Link>
                    </>
                )}
                {user && (
                    <>
                    <Navbar.Text className="text-white">{user?.displayName}</Navbar.Text>
                    <img src={user?.photoURL || ""} width="40" height="40"  className="d-inline-block align-top mx-2"/>
                    <Nav.Link onClick={logOut} className="text-white ps-4"> Log Out</Nav.Link>
                    </>
                )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
