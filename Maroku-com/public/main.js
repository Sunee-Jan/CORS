//解决跨域访问：
//方法一：通过CORS的方式直接解除Ajax的禁止跨域
const request = new XMLHttpRequest();
request.open("Get", "http://localhost:8888/data.json");
request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(JSON.parse(request.response));
  } else {
    console.log(request.response);
    console.log(request.readyState);
    console.log(request.status);
  }
};
request.send();

//方法二：【JSONP】 此方法主要用于IE旧版本
//数据提供方与需求方提前沟通好，将数据转换为JS数据，
//将该数据作为实参传入需求方提供的JS函数内
//将该函数放入新的JS文件中，将该JS文件地址提供给需求方
//为了数据安全，提供方可以将该JS文件通过referer的方式，将访问用户设置仅为需求方的域名
//需求方通过该地址，生成一个script标签，将该地址存入新建的script的src下，并将该script标签插入body中
//引用成功后，即可调用该数据函数
//调用函数获取数据成功后，即可删除该script标签，避免标签后续引入过多

let random = Math.random();

window[random] = function (data) {
  console.log(data);
};
const script = document.createElement("script");
script.src = `http://qq.com:8888/data.js?functionName=${random}`;
document.body.appendChild(script);
document.body.removeChild(script);
