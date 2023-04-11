import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories";
import Header from "./Header";
import About from "./About";
import Category from "./Category";
import Session from "./Session";
import Register from "./Register";
import Confirmation from "./Confirmation";

function App() {
  return (
    <div className="app">
      <Header/>

        <Routes>
            <Route path="/" element={<Home title={"Welcome to the site"}/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="categories" element={<Categories/>} >
                <Route index element={<h3>Select a category from above</h3>}/>
                <Route path=":catId" exact element={<Category/>} errorElement={<h1 className={"not-found"}>Page not found</h1>}>
                    <Route index element={<h3>Select a session from above</h3>}/>
                    <Route path=":sessionId" exact element={<Session/>} errorElement={<h1 className={"not-found"}>Page not found</h1>}/>
                    <Route path={"*"} element={<h1 className={"not-found"}>Page not found</h1>}/>
                </Route>
                <Route path={"*"} element={<h1 className={"not-found"}>Page not found</h1>}/>
            </Route>
            <Route path={"register"} element={<Register/>}/>
            <Route path={"confirmed"} element={<Confirmation/>}/>
            <Route path={"*"} element={<h1 className={"not-found"}>Page not found</h1>}/>
        </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;