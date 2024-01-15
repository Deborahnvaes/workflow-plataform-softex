import {React, useState} from "react";
import styled from "styled-components";
import { Row, Col, Form, Button } from "react-bootstrap";
import logo from "./Style/img/Logo-Softex.png";
import { useNavigate } from 'react-router-dom';
import backGroundImagem from '../Login/Style/img/form.Geom.png';
import { createGlobalStyle } from "styled-components";

import GlobalStyle from './Style/GlobalStyles';


const StyledLoginContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 5px;
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
  left: 35%;
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
  top: 190px;
  right: 90px;

  @media (max-width: 768px) {
    font-size: 14px;
    top: 180px;
    right: 20px;
  }
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    if (email === 'alunofap@gmail.com' && password === '1234') {
      navigate('../tela-inicial');
    } else {
      setError('Credenciais inválidas. Por favor, tente novamente.');
    }
  };

  return (
    <>
      <GlobalStyle />
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
        <Form.Group controlId="formEmail">
          <StyledInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <StyledInput
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formRememberMe">
          <Form.Check
            style={{ color: "#8A8A8A" }}
            type="checkbox"
            label="Lembrar-me"
          />
        </Form.Group>
      </StyledForm>

      <StyledSubmitButton variant="primary" type="button" onClick={handleLogin}>
        Entrar
      </StyledSubmitButton>

      {error && <p style={{ color: 'red' }}>{error}</p>}

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
};

export default LoginForm;

