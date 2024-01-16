import 'bootstrap/dist/css/bootstrap.min.css'
import {Form, Button} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'


function RedefinirSenha() {
    return (
      <section className='redefinir-container'>
        <div className='geo-form'>
            <img src="/imagens/form.Geom.png" alt="" />
        </div>
        <Container className="vh-100">
            <div className='front-page'>
                <div className='logo'>
                    <img src="/imagens/Logo-Softex.png" alt="" />
                    <p>Workflow Automation Platform</p>
                </div>
                <div className='redefine-password'>
                    <h3>Redefinição de senha</h3>
                    <div className='email-enviado'>
                        <FontAwesomeIcon icon={faCheckCircle} className='icon-check'/>
                        <p>Um e-mail foi enviado para <span>exemploemail@gmail.com</span> para finalizar o cadastro</p>
                    </div>
                    
                    <p>Por favor, insira no campo abaixo  o código de ativação que você recebeu por e-mail e redefina uma nova senha.</p>
                    
                    <Form className='form'>
                        
                        <Form.Control  type="text" placeholder='Código'/>
                        <Form.Control  type="password" placeholder='Nova senha' />
                        <Form.Control  type="password" placeholder='Repita a nova senha' />
                        
                        <Button className="btn-secondary custom-button">Redefinir senha</Button>
                    </Form>
                    <Button className="btn-secondary custom-button">Voltar para a tela inicial</Button>
                </div> 
            </div>
        </Container>
      </section>
    )
}  
export default RedefinirSenha;