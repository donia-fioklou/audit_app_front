import {Route,BrowserRouter as Router,Routes,} from "react-router-dom";
import Home from "./pages/home/Home";
import AnnexeQuestion from "./pages/annexeA/AnnexeQuestion";
import AnnexeResultat from "./pages/annexeA/AnnexeResultat";
import Objectif from "./pages/objectifs/Objectif";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route exact path="" element={<Home />}></Route>
        <Route exact path="objectif" element={<Objectif/>}></Route>
        <Route exact path="annexe/question/new" element={<AnnexeQuestion />}></Route>
        <Route exact path="annexe/resultat" element={<AnnexeResultat />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
