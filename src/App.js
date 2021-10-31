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
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
function App() {
  return (
    <div className="App">
    <AuthProvider>
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
       <PrivateRoute path="/adduser">
         <AddUser></AddUser>
       </PrivateRoute>
       <PrivateRoute path="/myorders/update/:name">
         <MyOrders></MyOrders>
       </PrivateRoute>
       <PrivateRoute path="/manageallorders">
         <ManageAllOrders></ManageAllOrders>
       </PrivateRoute>
       <PrivateRoute path="/service/:serviceId">
         <PlaceOrder></PlaceOrder>
       </PrivateRoute>
       <Route path="/login">
         <Login></Login>
       </Route>
       <Route path="*">
         <PageNotFound></PageNotFound>
       </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
