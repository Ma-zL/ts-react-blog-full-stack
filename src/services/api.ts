import http from "./http";

export const getArticleList = (data = {}) => {
    return http.get("article/list", data);
};

export const test = (data = {}) => {
    // return http.get("test", data);
    return http.post("test", data);
};
