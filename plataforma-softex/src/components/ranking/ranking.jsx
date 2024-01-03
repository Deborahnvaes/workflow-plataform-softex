import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import './styles.css';

function MostrarRanking() {
  return (
    <div className='container'>
        <div className='ranking-info'>
            <div className='your-classification'>
                <h1>Seu Ranking</h1>
                <span className='ranking-position'>40</span>
                <h3>50 alunos</h3>
                <p>Parabéns você está indo bem</p>
            </div>
            <div className='monitoring'>
                <img src="/imagens/vector-11.png" alt="" />
                <Button variant='secondary' className='costumize-button'>Acompanhe seu desenvolvimento</Button>
            </div>
        </div>
    </div>
  )
}

export default MostrarRanking;