import { SETTINGS_KEY, SETTINGS_CONFIG_PATH } from "./constants";
import http from "./http";

export const getSettings = async () => {
    const data = sessionStorage.getItem(SETTINGS_KEY);
    if (data) {
        return new Promise(function (resolve) {
            resolve(JSON.parse(data));
        });
    }
    const urls = await http.get(SETTINGS_CONFIG_PATH);
    sessionStorage.setItem(SETTINGS_KEY, JSON.stringify(urls));
    return urls;
};
