/*
  1. Add import React from 'react';
  2. Delete everything inside of return
  3. Make function into arrow function
  4. Import Header and Footer
  5. Wrap h1 in main tag
  6. Add Header and Footer tag
  7. Install react-bootstrap
  8. Import container from react-bootstrap - move h1 to container
  9. Add className="py-3" padding top and bottom to main
  10. Import Homescreen from ./screens/Homescreen
  11. Inside container replace h1 with <HomeScreen/>
  12. Import BrowserRouter as Router, Route from react-router-dom
  13. Wrap everything in return with Router
  14. Create route to HomeScreen by replace HomeScreen with <Route path='/' component={HomeScreen} exact/>
  15. Create new File ProductScreen.js and import 
  16. Add <Route path='/product/:id' component={ProductScreen}/>
*/
import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


const App = () => {
  return (
    <Router>
    <Header/>
      <main className="py-3">
      <Container>
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/product/:id' component={ProductScreen}/>
      </Container>
      </main>
    <Footer/>
    </Router>
  );
}

export default App;
