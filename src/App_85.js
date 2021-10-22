import './App_85.scss';
import Homepage_85 from './pages/Homepage_85';
import { Switch, Route } from 'react-router-dom';
import Shop_85 from './pages/ShopPage_85';
import ContactPage_85 from './pages/ContactPage_85';
import SigninPage_85 from './pages/SigninPage_85';
import Header_85 from './components/Header_85';

const App_85 = () => {
  return (
    <div>
      <Header_85 />
      <Route exact path='/' component={Homepage_85} />
      <Route exact path='/shop_85' component={Shop_85} />
      <Route exact path='/contact_85' component={ContactPage_85} />
      <Route exact path='/signin_85' component={SigninPage_85} />
    </div>
  );
};

export default App_85;
