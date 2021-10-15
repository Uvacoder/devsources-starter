import { Home } from "./pages";
import { useState } from "react";
import { Layout, Navbar } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar onClick={handleOpen} isOpen={isOpen} />
      <Layout
        style={{ transform: isOpen ? "translateX(300px)" : "translateX(0px)" }}
      >
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
