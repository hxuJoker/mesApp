import axios from 'axios'

/**
 * 
 * 向外部暴漏一个函数 ajax
 * @param {*} url 请求路径，默认为空
 * @param {*} data 请求参数，默认为空对象
 * @param {*} type 请求方法，默认为GET
 */
export  default function ajax (url,data={},type='GET'){
    //返回值是 Promiss对象 （异步返回的数据是response.data,不是response）
    return new Promiss(function(resolve,reject){
        let promiss  //这个内部的promiss用来保存axios的返回值Promiss对象
        if(type==='GET') {
            //准备 url query参数数据
            let dataStr = '' //数据拼接字符串，将data连接到url
            Object.keys(data).forEach(key=>{
                dataStr+= key+ '=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' +dataStr
            }
            promiss = axios.get(url);
        }else{
            promiss = axios.post(url,data);
        }
        promiss.then(response =>{
            resolve(response.data)
        }).catch(error =>{
            reject(error)
        })
    })  
}