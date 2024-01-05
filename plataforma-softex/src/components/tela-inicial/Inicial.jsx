import './style.css'
import { Card } from 'react-bootstrap';

function Inicial() {
    return (
        <>
            <Card style={{ width: '18rem' }} className='card'>
                <i className="fas fa-id-card card-icon"></i>
                <Card.Body>
                    <Card.Link href="#" className='btn'>Perfil</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <i className="fas fa-file-upload card-icon"></i>
                <Card.Body>
                    <Card.Link href="#" className='btn'>Faltas</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <i className="fas fa-signal card-icon"></i>
                <Card.Body>
                    <Card.Link href="#" className='btn'>Ranking</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <i className="fas fa-comments card-icon"></i>
                <Card.Body>
                    <Card.Link href="#" className='btn'>Chat</Card.Link>
                </Card.Body>
            </Card>
            </>
    );
}

export default Inicial
