import './App.css';
import { Switch, Route } from 'react-router-dom';
import Main from '../Main/Main';

function App() {
  return (
    <div className='app'>
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;