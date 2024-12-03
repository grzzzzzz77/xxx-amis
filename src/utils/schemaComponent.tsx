import React from 'react';
import {render as renderAmis, ToastComponent, AlertComponent} from 'amis';
import {alert, confirm, toast} from 'amis';
import axios from 'axios';

export default function (schema: any) {
    return class extends React.Component {
        render() {
            return renderAmis(
                schema,
                {
                    // 可以添加数据
                    data: {
                    },
                },
                {
                    // 下面是 amis 需要的一些配置
                    fetcher: ({
                        url, // 接口地址
                        method, // 请求方法 get、post、put、delete
                        data, // 请求数据
                        responseType,
                        config, // 其他配置
                        headers // 请求头
                    }: any) => {
                        config = config || {};
                        config.withCredentials = true;
                        responseType && (config.responseType = responseType);

                        // 统一添加token
                        if (!headers) {
                            headers = {};
                        }
                        headers.token = localStorage.getItem('token');

                        if (config.cancelExecutor) {
                            config.cancelToken = new axios.CancelToken(config.cancelExecutor);
                        }

                        config.headers = headers;
                        config.method = method;
                        config.url = url;
                        method === 'get' && (config.params = data);
                        method !== 'get' && (config.data = data);

                        return axios(config).then(response => {
                            return response;
                        });
                    },
                    isCancel: (value: any) => axios.isCancel(value),
                    copy: (content: string) => {
                        toast.success('内容已复制到粘贴板');
                    },
                    // 用来获取其他配置项
                    ...({
                        // 下面是一些可选的配置项
                        alert,
                        confirm,
                        toast
                    })
                }
            );
        }
    }
}