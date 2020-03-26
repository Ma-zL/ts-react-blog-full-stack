import React from "react";
import { Button } from "antd";
import { RouteComponentProps } from "react-router-dom";

// import CountOperation from "@components/CountOperation";
// import ShowCount from "@components/ShowCount";

import { getArticleList } from "@services/api";
import styles from "./index.scss";

const PageA = ({ history }: RouteComponentProps) => {
    const getList = async () => {
        try {
            const res = await getArticleList();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <div>PageA</div>
            <Button onClick={() => history.push("/page-b")}>跳转B</Button>
            {/* <ShowCount />
            <CountOperation /> */}
            <Button onClick={getList}>获取文章列表</Button>
            <div className={styles.test}>{process.env.NODE_ENV}</div>
        </div>
    );
};

export default PageA;
