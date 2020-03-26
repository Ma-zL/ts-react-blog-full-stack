import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routerMap from "./routerMap";

const App = () => {
    return (
        <Suspense fallback={<div>loading</div>}>
            <Router>
                <Switch>
                    {routerMap.map((items) => {
                        return <Route exact key={items.path} path={items.path} component={items.component} />;
                    })}
                </Switch>
            </Router>
        </Suspense>
    );
};

export default App;
