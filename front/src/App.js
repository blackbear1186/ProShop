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
*/
import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'


const App = () => {
  return (
    <>
    <Header/>
      <main className="py-3">
      <Container>
        <HomeScreen/>
      </Container>
      </main>
    <Footer/>
    </>
  );
}

export default App;
