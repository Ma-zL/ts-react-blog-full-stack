import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//core pages

import Login from "./pages/login";
import MainDashboard from "./pages/mainDashboard";

const mapping = {
    Login,
    MainDashboard,
};

const defaultRouter = [
    {
        path: "/login",
        type: "public",
        component: "Login",
        // materialKey: null,
        uri: "/login",
    },
    {
        path: "/mainDashboard",
        type: "public",
        component: "MainDashboard",
        // materialKey: null,
        uri: "/mainDashboard",
    },
];

interface IRouterProps {
    basename: string;
    routers: any;
    // component: any;
}

const Routers = ({ basename, routers = [] }: IRouterProps) => {
    const cancatRouters = defaultRouter.concat(routers);
    return (
        <Router basename={basename}>
            <Switch>
                {/* {cancatRouters.map((router) => {
                    const { path, uri } = router;
                    return (
                        <Route
                            exact
                            key={uri || path}
                            // materialKey={mk}
                            path={uri || path}
                            component={mapping[router.component]}
                        />
                    );
                })} */}

                <Route path="/" component={mapping["Login"]} exact />
                <Route path="/login" component={mapping["Login"]} />
                <Route path="/mainDashboard" component={mapping["MainDashboard"]} />
            </Switch>
        </Router>
    );
};

export default Routers;
