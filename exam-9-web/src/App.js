import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import MainPage from './containers/MainPage/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
