import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/statics/navbarusuario/NavBarUser';
import Footer from './components/statics/footer/Footer';
import Home from './components/pages/home/Home';
import HomeCont from './components/pages/HomeCont/HomeCont';
import Login from './components/pages/login/Login';
import CadastroUsuario from './components/pages/cadastro/CadastroUsuario';
import NavBarUser from './components/statics/navbarusuario/NavBarUser';
import {Provider} from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';

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

            <Route path='/home'>
              <Home />
              <HomeCont />
            </Route>
            <Route path='/cadastrar'>
              <CadastroUsuario />
            </Route>
          </div>
        </Switch>
        <Footer />
      </Router>
      </Provider>
  );
}

export default App;