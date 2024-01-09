import './style.css'
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Inicial() {
  return (
    < >
      <Header />
      <section className='container-inicial'>

        <Card style={{ width: "18rem" }} className="card">
        <i className="fas fa-id-card card-icon"></i>
        <Card.Body>
          <Card.Link as={Link} to="/perfil" className="btn-card">
            Perfil
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }} className="card">
        <i className="fas fa-file-upload card-icon"></i>
        <Card.Body>
          <Card.Link as={Link} to="/faltas" className="btn-card">
            Faltas
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">


        <i className="fas fa-signal card-icon"></i>
        <Card.Body>
          <Card.Link as={Link} to="/ranking" className="btn-card">
            Ranking
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">



        <i className="fas fa-comments card-icon"></i>
        <Card.Body>
          <Card.Link as={Link} to="#" className="btn-card">
            Contato
          </Card.Link>
        </Card.Body>
      </Card>
      </section>
      

      <Footer />
    </>
  );
}

export default Inicial;
