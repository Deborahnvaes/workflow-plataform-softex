import './App.css';
// import LoginForm from './components/Login/LoginForm.jsx'
// import GlobalStyles from './components/Login/Style/GlobalStyles.jsx';
import EnviarEmail from './components/redefinirSenha/lembrar_senha/esqueceu-senha.jsx';
import RedefinirSenha from './components/redefinirSenha/redefinir_senha/redefinindo-senha.jsx';
function App() {
  return (
    <>
    {/* <GlobalStyles />
    <LoginForm /> */}
    <EnviarEmail/>
    <RedefinirSenha/>
    </>
)

}

export default App;
