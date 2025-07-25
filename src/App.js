import './App.css';
import Header from './components/jsxFils/Header';
import Background from './components/jsxFils/background';
import mainImage from './components/images/mainImg2.jpg';
import Nav from './components/jsxFils/nav';
import Lastest from './components/jsxFils/lastest';
import Footer from './components/jsxFils/footer';
import Main from './components/jsxFils/main';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Background background={mainImage} />
      <Lastest />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
