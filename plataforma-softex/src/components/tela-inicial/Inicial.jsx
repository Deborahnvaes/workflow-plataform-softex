import './style.css';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Header from '../header/Header'
import Footer from '../footer/Footer'

function Inicial() {
  return (
    < >
      <Header />

      <Card style={{ width: "18rem" }} className="card">
        <i className="fas fa-id-card card-icon"></i>
        <Card.Body>
          <Link to="/perfil" className="btn">
            Perfil
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <i className="fas fa-file-upload card-icon"></i>
        <Card.Body>
          <Link to="/faltas" className="btn">
            Faltas
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <i className="fas fa-signal card-icon"></i>
        <Card.Body>
          <Link to="#" className="btn">
            Ranking
          </Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="card">
        <i className="fas fa-comments card-icon"></i>
        <Card.Body>
          <Link to="#" className="btn">
            Chat
          </Link>
        </Card.Body>
      </Card>

      <Footer />
    </>
  );
}

export default Inicial;
