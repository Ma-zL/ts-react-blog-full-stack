import http from "../commons/http";

export const systemLogin = () => {
    return http.post("login", { name: "admin", password: 123456 });
};
