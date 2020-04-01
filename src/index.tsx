import React from "react";
import ReactDOM from "react-dom";
// import styles from "./index.scss";
// import { Button } from "antd";
// import ViewsTest from "@views/ViewTest";
// import SharedTest from "@shared/SharedTest";
// import App from "@views/App";
import Provider from "@store/index";
import Routers from "./router";
import { getSettings } from "@commons/settingsHelper";
import getUrl from "@commons/urlHelper";

async function init() {
    const urls = await getUrl(),
        settings = await getSettings();
    return Promise.resolve({ urls, settings });
}

init().then(() => {
    ReactDOM.render(
        <Provider>
            <Routers basename="login page" routers="/login" />
        </Provider>,
        document.querySelector("#app")
    );
});
