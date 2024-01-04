import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './style.css'
import axios from 'axios';
import Header from '../header/Header'
import Footer from '../footer/Footer'



   

function Perfil() {
    const [validated, setValidated] = useState(false);
    const [cep, setCep] = useState('');
    const [cepError, setCepError] = useState(null);
    const [cepData, setCepData] = useState(null);

    const handleCepChange = (event) => {
        const newCep = event.target.value;
        setCep(newCep);
        setCepError(null); // Limpa mensagens de erro ao digitar
    };

    const handleCepLookup = async () => {
        try {
            // Remove caracteres não numéricos do CEP
            const cleanedCep = cep.replace(/\D/g, '');
    
            // Validação básica do formato do CEP
            const cepRegex = /^\d{8}$/;
            if (!cepRegex.test(cleanedCep)) {
                throw new Error('Formato de CEP inválido');
            }
    
            // Consulta o CEP usando o serviço ViaCEP
            const response = await axios.get(`https://viacep.com.br/ws/${cleanedCep}/json/`);
            setCepData(response.data);
        } catch (error) {
            console.error('Erro ao consultar o CEP:', error.message);
            setCepError('CEP inválido');
        }
    };
    
    







    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
        <Header/>
        <Form noValidate validated={validated} onSubmit={handleSubmit} className='py-5'>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Primeiro nome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Sobrenome</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"

                    />
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Usuário</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="Digite aqui"
                            aria-describedby="inputGroupPrepend"
                            pattern="[a-zA-Z]{5,}"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Deve ter no mínimo 5 caracteres
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Row>

                <Form.Group as={Col} md="4" controlId="validationCustom06">
                    <Form.Label>Data de Nascimento</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        placeholder="Selecione a data"
                    />
                    <Form.Control.Feedback type="invalid">
                        Selecione a data de nascimento.
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="tel"
                        placeholder=""
                        required
                       />
                    <Form.Control.Feedback type="invalid">
                        Fornecer CEP válido
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                        Fornecer email válido
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>


            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Logradouro</Form.Label>
                    <Form.Control type="text" placeholder="City" pattern="[a-zA-Z]{2,}" required />
                    <Form.Control.Feedback type="invalid">
                        Fornecer endereço válido
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="State" pattern="[a-zA-Z]{2,}" required />
                    <Form.Control.Feedback type="invalid">
                        Fornecer nome de estado válido
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>CEP</Form.Label>
                    <Form.Control
                         type="text"
                         placeholder="Digite aqui"
                         value={cep}
                         onChange={handleCepChange}
                         onBlur={handleCepLookup}
                         isInvalid={cepError !== null}
                         required/>
                    <Form.Control.Feedback type="invalid">
                        Fornecer CEP válido
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Concordo com os termos e condições"
                    feedback="Precisa concordar antes de enviar."
                    feedbackType="invalid"
                />
            </Form.Group>
            <Button type="submit" className='btn-perfil'>Salvar</Button>
        </Form>
        <Footer/>
        </>
    );

}

export default Perfil
