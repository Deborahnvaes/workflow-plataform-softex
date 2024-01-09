import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import './ranking.css';
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Vetor from './img/vector-11.png'

function MostrarRanking() {
  return (
    < > 
    <Header />
    <div className='container'>
        <div className='ranking-info'>
            <div className='your-classification'>
                <h1>Seu Ranking</h1>
                <span className='ranking-position'>50</span>
                <h3>60 alunos</h3>
                <p>Parabéns você está indo bem</p>
            </div>
            <div className='monitoring'>
                <img src={Vetor} alt="" />
                <Button variant='secondary' className='costumize-button'>Acompanhe seu desenvolvimento</Button>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default MostrarRanking;  