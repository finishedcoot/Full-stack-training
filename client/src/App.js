import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppNavbar from "./components/AppNavbar";
import { Container } from "reactstrap";
import Shoppinglist from "./components/Shoppinglist";
import { Provider } from "react-redux";
import store from "./store";
import { ItemModal } from "./components/ItemModal";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <Shoppinglist />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
