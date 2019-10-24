import axios from 'axios'
axios.defaults.baseURL = 'http://open.duyiedu.com';
axios.interceptors.request.use(function (config) {
    config.params = {
        ...config.params,
        appkey: "snail_1558877884079"
    }
    return config;
}, function (error) {
    return Promise.reject(error)
});
export default axios;