import logo from './logo.svg';
import './App.css';
import Service from './Pages/Home/Service/Service/Service';
import Services from './Pages/Home/Service/Services/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import PageNotFound from './Pages/PageNotFound/PageNotFound';

import PlaceOrder from './Pages/Home/PlaceOrder/PlaceOrder';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Footer/Footer';
import AddUser from './Pages/AddUser/AddUser';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Header></Header>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/home">
         <Home></Home>
       </Route>
       <Route path="/services">
         <Services></Services>
       </Route>
       <Route path="/adduser">
         <AddUser></AddUser>
       </Route>
       <Route path="/service/:orderName">
         <PlaceOrder></PlaceOrder>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="*">
         <PageNotFound></PageNotFound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
