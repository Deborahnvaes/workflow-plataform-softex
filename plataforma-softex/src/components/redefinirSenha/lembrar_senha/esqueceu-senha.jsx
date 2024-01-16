import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import './styles.css';
import image from '../../Login/Style/img/form.Geom.png'
import imageLogo from '../../Login/Style/img/Logo-Softex.png'
 
function EnviarEmail() {
    return (
      <section className='email-container'>
        <div className='geo-form'>
            <img src= {image} alt="" />
        </div>
        <Container className="vh-100">
          <div className='front-page'>
              <div className='logo'>
                  <img src= {imageLogo} alt="" />
                  <p>Workflow Automation Platform</p>
              </div>
              <div className='remember-password'>
                <h3>Redefinição de senha</h3>
                <p>Digite o seu e-mail no campo abaixo e lhe enviaremos uma nova senha</p>
                <Form className='form-email'> 
                  <Form.Control type="text" placeholder='Digite o seu e-mail'/>
                  <Button className="btn-secondary custom-button">Redefinir senha</Button> 
                </Form> 
                <Button className="btn-secondary custom-button">Voltar para tela inicial</Button> 
              </div> 
          </div>
        </Container>
      </section>
    )
  }
  
  export default EnviarEmail;