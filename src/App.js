import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar>
        <div className="content">
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Routes>
        </div>
        </Navbar>
      </div>
    </BrowserRouter>
  );
}

export default App;
