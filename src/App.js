import Error404 from "container/error/Error404";
import Home from "container/pages/Home";
import store from "./store";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="*" element={<Error404/>}/>

          <Route path="*" element={<Home/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
