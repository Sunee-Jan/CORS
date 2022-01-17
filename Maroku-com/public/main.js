// const request = new XMLHttpRequest();
// request.open("Get", "http://qq.com:8080/main.js");
// request.onreadystatechange = () => {
//   if (request.readyState === 4 && request.status === 200) {
//     console.log(request.response);
//   } else {
//     console.log(request.response);
//   }
// };
// request.send();

const script = document.createElement("script");
script.src = "http://qq.com:8080/data.json";
document.body.appendChild(script);
