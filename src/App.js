
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login/Login';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MyOrders from './components/MyOrders/MyOrders';
import NotFound from './components/NotFound/NotFound';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Footer from './components/Shared/Footer/Footer';



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
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:serviceId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
     </AuthProvider>

      
 
    </div>
  );
}

export default App;
