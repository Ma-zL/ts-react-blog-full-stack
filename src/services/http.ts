import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { message } from "antd";

const baseURL = "http://localhost:8080/api";

type Requesta = (url: string, data?: object) => Promise<any>;

interface HttpRequest {
    get?: Requesta;
    post?: Requesta;
    delete?: Requesta;
    put?: Requesta;
}

type Method = "get" | "post" | "delete" | "put";

const methods: Method[] = ["get", "post", "delete", "put"];

const http: HttpRequest = {};

methods.forEach((v) => {
    http[v] = (url: string, data: any) => {
        const config: AxiosRequestConfig = {
            url,
            method: v,
            baseURL,
        };
        const instance = axios.create({
            baseURL,
        });
        instance.interceptors.request.use(
            (cfg) => {
                return cfg;
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        instance.interceptors.response.use(
            (res) => {
                if (res && res.data) {
                    return res.data;
                }
                return res;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        if (v === "get" || v === "delete") {
            config.params = data;
        } else {
            config.data = qs.stringify(data);
        }

        return instance
            .request(config)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                message.destroy();
                if (!!err.response) {
                    const errData = err.response.data;
                    message.error(errData.message);
                } else {
                    const msg = err.message === "Network Error" ? "网络错误" : "未知错误";
                    message.error(msg);
                }
                return Promise.reject(err);
            });
    };
});

export default http;
