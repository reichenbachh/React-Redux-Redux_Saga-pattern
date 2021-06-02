import './App.css';
import { Provider } from "react-redux"
import store from "./redux/store"
import TestContainer from "./testCompopnent/test-container"

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <TestContainer />
      </div>
    </Provider>
  );
}

export default App;
