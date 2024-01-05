import React from "react";
import styled from "styled-components";
import { Row, Col, Form, Button } from "react-bootstrap";
import logo from "./Style/img/Logo-Softex.png";
import { FaUser, FaLock } from "react-icons/fa";

const StyledLoginContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
  padding: 40px;
  border: 3px solid black;
  box-sizing: border-box;
  width: calc(35% - 20px);

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    left: 0;
    right: 0;
    margin: 10px;
  }
`;

const StyledTitle = styled.label`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-200%);
  background-color: white;
  padding: 0 10px;
`;

const StyledInput = styled.input`
  margin: 10px 10px 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid;
  background-color: #8a8a8a;
  color: white;

  &::placeholder {
    color: white !important;
    font-weight: bold;
  }
`;

const StyledForm = styled(Form)`
  width: 100%;
`;

const StyledSubmitButton = styled(Button)`
  width: 100%;
  background-color: #dc782a;
  color: white;
  font-weight: bold;
  border-radius: 30px;
  border: none;
  height: 30px;
  font-size: 15px;
  margin-top: 33px;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 10px;
  right: 50px;
  width: 420px;

  @media (max-width: 768px) {
    width: 100%;
    top: 20px;
    right: 0;
  }
`;

const SiteName = styled.p`
  font-size: 18px;
  font-weight: bold;
  right: 150px;
  position: absolute;
  top: 210px;
  right: 80px;

  @media (max-width: 768px) {
    font-size: 14px;
    top: 180px;
    right: 20px;
  }
`;

const LoginForm = () => (
  <>
    <LogoImage src={logo} alt="Logo" />
    <SiteName>Workflow Automation Platform</SiteName>
    <StyledLoginContainer>
      <Row className="mb-4">
        <Col>
          <StyledTitle style={{ fontWeight: "bold", color: "#DC782A" }}>
            LOGIN
          </StyledTitle>
        </Col>
      </Row>

      <Col>
        <StyledForm>
          {["Username", "Password"].map((field, index) => (
            <Form.Group key={index} controlId={`form${field}`}>
              <StyledInput
                type={index === 1 ? "password" : "text"}
                placeholder={field}
              />
            </Form.Group>
          ))}

          <Form.Group controlId="formRememberMe">
            <Form.Check
              style={{ color: "#8A8A8A" }}
              type="checkbox"
              label="Lembrar-me"
            />
          </Form.Group>
        </StyledForm>

        <StyledSubmitButton variant="primary" type="submit">
          Entrar
        </StyledSubmitButton>
      </Col>

      <Row>
        <Col>
          <a style={{ color: "black", fontSize: "10px" }} href="esqueceuSenha">
            Esqueceu a senha?
          </a>
        </Col>
      </Row>
    </StyledLoginContainer>
  </>
);

export default LoginForm;
