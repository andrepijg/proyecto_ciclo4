import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';
//import Login from "./components/login/login";
import TopMenu from "./components/navBar/navBar";
import AppRouter from "./components/routes/router";


function App() {
  return (
    <div className="App">
      <TopMenu/>
      <Container>    
      <AppRouter/>
      </Container>

    </div>
  );
}

export default App;
