import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import AddContact from './containers/AddContact/AddContact';
import MainPage from './containers/MainPage/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/addNew' component={AddContact}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
