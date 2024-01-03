import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container } from 'react-bootstrap'
import './App.css';



function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
         conteudo
        </Container>

      </main>
      <Footer></Footer>
    </>
  )
}

export default App;
