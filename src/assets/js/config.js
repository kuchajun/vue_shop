
import axios from 'axios'
import qs from 'qs'
//import * as _ from './whole'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080';
//axios.defaults.baseURL = 'http://weike.sjxmtkj.com/api/Basic';
// axios.defaults.baseURL = 'http://192.168.1.129:8383';
//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
    config.data = qs.stringify(config.data);
  }
  return config;
},(error) =>{
   console.log("错误的传参");
  return error;
});
//code状态码200判断
axios.interceptors.response.use((res) =>{
  if(res.data.code != '200'){
    console.log(res.data.msg);
    return res;
  }
  return res;
}, (error) => {
  console.log("网络异常");
  return error;
});
export default axios;