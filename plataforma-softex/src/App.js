import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container } from 'react-bootstrap'
import Inicial from './components/tela-inicial/Inicial';
import './App.css';



function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
         <Inicial></Inicial>
        </Container>

      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
