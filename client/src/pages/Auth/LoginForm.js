import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid/index";
import { Input, FormBtn } from "../../components/Form/index";



function LoginForm({ login, register }) {
  const [userObject, setUserObject] = useState({
    username: "",
    password: "",
  });
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event) => {
    setUserObject({
      ...userObject,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    login(userObject.username, userObject.password);
    setRedirectTo("/prediction");
  };

  if (redirectTo) {
    return <Redirect to={{ pathname: redirectTo }} />;
  } else {
    return (
      <>
        <main>
          <Container>
            <Row>
              <Col size="md-3"></Col>
              <Col size="md-6">
                <div className="title">Login to Mood Swing</div>
                <form>
                  {/* <label class="form__label" htmlFor="username">Username: </label> */}
                  <Input
                    type="text"
                    name="username"
                    value={userObject.username}
                    onChange={handleChange}
                    placeholder="username"
                    className="form__field"
                  />
                  {/* <label class="form__label" htmlFor="password">Password: </label> */}
                  <Input
                    type="password"
                    name="password"
                    value={userObject.password}
                    onChange={handleChange}
                    placeholder="password"
                    className="form__field"
                  />
                  {/* <label class="form__label" htmlFor="password">Password: </label> */}
                  
                  <Link to="/signup">Register</Link>
                  <FormBtn onClick={handleSubmit}>LOGIN</FormBtn>
                </form>
                {/* </Card> */}
              </Col>
              <Col size="md-3"></Col>
            </Row>
          </Container>
        </main>
      </>
    );
  }
}

export default LoginForm;