import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './components/RoutingWithStaticDataTask/Users';
import Albums from './components/RoutingWithStaticDataTask/Albums';
import Comments from './components/RoutingWithStaticDataTask/Comments';
import Home from './components/RoutingWithStaticDataTask/Home';
import Photos from './components/RoutingWithStaticDataTask/Photos';
import Posts from './components/RoutingWithStaticDataTask/Posts';
import ToDos from './components/RoutingWithStaticDataTask/ToDos';
import Nav from './components/RoutingWithStaticDataTask/Nav';
import EmployeeInfo from './components/EmployeeInfo';
import FilmRequest from './components/FilmRequest';

function App() {
  return (
    <>
      <FilmRequest/>
      {/* <EmployeeInfo/> */}
      {/* <BrowserRouter>
      <Nav/>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/Users">
        <Users/>
      </Route>
      <Route path="/Albums">
        <Albums/>
      </Route>
      <Route path="/Comments">
        <Comments/>
      </Route>
      <Route path="/Photos">
        <Photos/>
      </Route>
      <Route path="/Posts">
        <Posts/>
      </Route>
      <Route path="/ToDos">
        <ToDos/>
      </Route>
      </BrowserRouter> */}
    </>
  );
}

export default App;
