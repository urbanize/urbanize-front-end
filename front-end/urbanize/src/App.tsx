import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/statics/footer/Footer';
import CadastroUsuario from './components/pages/cadastro/CadastroUsuario';
import Home from './components/pages/home/Home';
import HomeCont from './components/pages/HomeCont/HomeCont';
import Login from './components/pages/login/Login';
import './App.css';
import ListaTema from './components/temas/listaTema/ListaTema';
import HomeLogin from './components/pages/HomeLogin/HomeLogin';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import DeletarPostagem from './components/postagens/DeletarPostagem/DeletarPostagem';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBarUser from './components/statics/navbarusuario/NavBarUser';
import ListaPostagemUser from './components/postagens/listapostagemuser/ListaPostagemUser';
import SobreNos from './components/pages/SobreNos/SobreNos';




function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <NavBarUser />
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            
            <Route exact path='/'>
              <Home />
              <HomeCont />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/homelogin'>
              <HomeLogin />
              </Route>

            <Route path='/home'>
              <Home />
              <HomeCont />
            </Route>

            <Route path='/cadastrar'>
              <CadastroUsuario />
            </Route>
            <Route path='/temas'>
              <ListaTema />
            </Route>
            <Route path='/posts'>
              <ListaPostagem />
            </Route>
            <Route exact path='/formularioPostagem'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioPostagem/:id'>
              <CadastroPost />
            </Route>
            <Route exact path='/formularioTema'>
              <CadastroTema />
            </Route>
            <Route exact path='/formularioTema/:id'>
              <CadastroTema />
            </Route>
            <Route path='/deletarPostagem/:id'>
              <DeletarPostagem />
            </Route>
            <Route path='/deletarTema/:id'>
              <DeletarTema />
            </Route>
            <Route path='/postsuser'>
              <ListaPostagemUser />
            </Route>
            <Route path='/sobreNos'>
              <SobreNos/>
            </Route>
            
          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;