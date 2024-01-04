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
        < >
            <Header />

            <div className='cont-perfil'>
                <div className='user-photo-profile'>
                    <div className='user-bg'>
                        <i className='fas fa-user user-icon' ></i>
                    </div>
                    <Button type="submit" className='btn-perfil'>Alterar imagem</Button>
                    <Button type="submit" className='btn-perfil'>Redefinir senha</Button>
                </div>
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='py-5'>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                            <Form.Label>Primeiro nome</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=""
                                style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                            <Form.Label>Sobrenome</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder=""
                                style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}

                            />
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                            <Form.Label>Usuário</Form.Label>
                            <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    placeholder=""
                                    aria-describedby="inputGroupPrepend"
                                    pattern="[a-zA-Z]{5,}"
                                    style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}
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
                                placeholder=""
                                style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}
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
                                style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Fornecer número de celular válido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                            type="email" 
                            placeholder="" 
                            required 
                            style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Fornecer email válido
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>


                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control 
                            type="text" 
                            placeholder="" 
                            pattern="[a-zA-Z]{2,}" 
                            required 
                            style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}
                            />
                            <Form.Control.Feedback type="invalid">
                                Fornecer endereço válido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control 
                            type="text"
                             placeholder="" 
                             pattern="[a-zA-Z]{2,}" 
                             required 
                             style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}
                             />
                            <Form.Control.Feedback type="invalid">
                                Fornecer nome de estado válido
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                value={cep}
                                onChange={handleCepChange}
                                onBlur={handleCepLookup}
                                isInvalid={cepError !== null}
                                required 
                                style={{ backgroundColor: '#807F7F', color: '#fff', borderBlockColor:'#000000' }}
                                />
                            <Form.Control.Feedback type="invalid">
                                Fornecer CEP válido
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3 " >
                        <Form.Check
                            required
                            label="Concordo com os termos e condições"
                            feedback="Precisa concordar antes de enviar."
                            feedbackType="invalid"
                            className="custom-checkbox"
                        />
                    </Form.Group>
                    <Button type="submit" className='btn-perfil'>Salvar</Button>
                </Form>
            </div>


            <Footer />
        </>
    );

}

export default Perfil
