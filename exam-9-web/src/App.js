import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import AddContact from './containers/AddContact/AddContact';
import EditContact from './containers/EditContact/EditContact';
import MainPage from './containers/MainPage/MainPage';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={MainPage}/>
        <Route path='/addNew' component={AddContact}/>
        <Route path='/edit/:id' component={EditContact}/> 
      </Switch>
    </BrowserRouter>
  );
};

export default App;
