import './style.css'
import Card from 'react-bootstrap/Card';

function Inicial() {
    return (
        <section className='card-container'>
            <Card style={{ width: '18rem' }} className='card'>
                <i class="fas fa-id-card card-icon"></i>
                <Card.Body>
                    <Card.Link href="#" className='btn'>Perfil</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <i class="fas fa-file-upload card-icon"></i>
                <Card.Body>
                    <Card.Link href="#" className='btn'>Faltas</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <i class="fas fa-signal card-icon"></i>
                <Card.Body>
                    <Card.Link href="#" className='btn'>Perfil</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className='card'>
                <i class="fas fa-comments card-icon"></i>
                <Card.Body>
                    <Card.Link href="#" className='btn'>Chat</Card.Link>
                </Card.Body>
            </Card>
        </section>

    );
}

export default Inicial
