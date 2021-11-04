import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import RouterControl from "./Components/Function/RouterControl"

import './App.css';
import './css/header.css';
import './css/footer.css';
import './css/style.css';

function App() {

    const showRouter = (router) => {
        var result = '';
        if (router.length > 0) {
            result = router.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />)
            })
        }
        return (
            <Switch>{result}</Switch>
        )
    }

    return (
        <Router>
            <Header />
            <div className="outer">
                <div className="inner">
                    {showRouter(RouterControl)}
                </div>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
