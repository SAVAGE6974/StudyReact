import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Fotter from './components/Fotter';

function ChildComp(){
  return <div>Child Component</div>
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp />
      </Body>
      <Fotter />
    </div>
  );
}

export default App;
