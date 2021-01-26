import React from 'react';
import SlideRoutes from 'react-slide-routes';
import { Route, NavLink, useLocation } from 'react-router-dom';



const Home = () => <div style={styles.home}>Home</div>;
const About = () => <div style={styles.about}>About</div>;
const Contact = () => <div style={styles.contact}>Contact</div>;

const styles = {
  home: {
    color: '#fff',
    fontSize: '64px',
    background: 'rgba(255, 100, 0)',
  },
  about: {
    color: '#fff',
    fontSize: '64px',
    background: 'rgba(0, 150, 255)',
  },
  contact: {
    color: '#fff',
    fontSize: '64px',
    background: 'rgba(44, 219, 88)',
  },
}

const App = () => {
  const location = useLocation();

  return (
    <>
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <SlideRoutes location={location} duration={500}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </SlideRoutes>
    </>
  );
};

export default App;
