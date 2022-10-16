import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header/Header';
// import Main from '../Main/Main';
// import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Header />
        </Route>
      </Switch>

    </div>
  );
}

export default App;