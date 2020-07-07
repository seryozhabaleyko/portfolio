import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Provider } from 'react-awesome-slider/dist/navigation';

import Header from './components/Header';
import Fullpage from './components/Fullpage';

function App() {

    const location = useLocation();

    return (
        <Provider slug={location.pathname}>
            <Header/>
            <main className="main">
                <Switch>
                    <Route path="/" exact>
                        <Fullpage/>
                    </Route>
                    <Route path="/portfolio">
                        <Fullpage/>
                    </Route>
                    <Route path="/contact">
                        <Fullpage/>
                    </Route>
                </Switch>
            </main>
        </Provider>
    );
}

export default App;