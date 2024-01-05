import Calendario from "../calendario/calendario"
import 'bootstrap/dist/css/bootstrap.min.css'
//import Button from 'react-bootstrap/Button';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './style.css';

function Faltas() {
    return (
        <div className="container ">
        <Calendario />
        <div className="calendar-info-container">
            <div className="calendar-info">
                <div className="dot orange-dot"></div>
                <p>Dias de aula</p>
            </div>
            <div className="calendar-info">
                <div className="dot green-dot"></div>
                <p>Presente</p>
            </div>
            <div className="calendar-info">
                <div className="dot red-dot"></div>
                <p>Ausente</p>
            </div>
        </div>
        <div className="text-container">
            <p>Em caso de ausência, valorizamos a transparência e a responsabilidade acadêmica.
                Se você precisar justificar uma falta, utilize este espaço para enviar seu atestado médico.
                Sua saúde é nossa prioridade, e sua participação é fundamental.
                Clique abaixo para enviar o atestado e garantir que sua falta seja registrada de maneira adequada.</p>
            <Button variant="warning" size="lg">Justifique sua falta aqui</Button>{' '}
        </div>

    </div>
)
}

export default Faltas

// codigo sem bootstrap: 
/*
  <div className="container">
            <Calendario />
            <div className="calendar-info-container">
                <div className="calendar-info">
                    <div className="dot orange-dot"></div>
                    <p>Dias de aula</p>
                </div>
                <div className="calendar-info">
                    <div className="dot green-dot"></div>
                    <p>Presente</p>
                </div>
                <div className="calendar-info">
                    <div className="dot red-dot"></div>
                    <p>Ausente</p>
                </div>
            </div>
            <div className="text-container">
                <p>Em caso de ausência, valorizamos a transparência e a responsabilidade acadêmica.
                    Se você precisar justificar uma falta, utilize este espaço para enviar seu atestado médico.
                    Sua saúde é nossa prioridade, e sua participação é fundamental.
                    Clique abaixo para enviar o atestado e garantir que sua falta seja registrada de maneira adequada.</p>
                <Button variant="primary" size="lg">Justifique sua falta aqui</Button>{' '}
            </div>

        </div>
    )
*/