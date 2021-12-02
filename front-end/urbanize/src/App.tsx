import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/statics/navbar/NavBar';
import Footer from './components/statics/footer/Footer';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import CadastroUsuario from './components/pages/cadastro/CadastroUsuario';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/cadastrar'>
              <CadastroUsuario />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;