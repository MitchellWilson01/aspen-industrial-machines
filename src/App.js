import React from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import Navmenu from './components/Navmenu/Navmenu';
import Home from './components/pages/Home/Home';
import Services from './components/pages/Services/Services';
import Equipment from './components/pages/Equipment/Equipment';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer/Footer';


const App = ()  => {
  const NavmenuWithRouter = withRouter(Navmenu)

  return (
    <>
      <Router>
        <NavmenuWithRouter />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/equipment" exact component={Equipment} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
