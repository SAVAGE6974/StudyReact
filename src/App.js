import './App.css';
import Header from './components/jsxFils/Header';
import Background from './components/jsxFils/background';
import mainImage from './components/images/mainImg2.jpg';
import Nav from './components/jsxFils/nav';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Background background={mainImage} />
    </div>
  );
}

export default App;
