const request = new XMLHttpRequest();
request.open("Get", "http://qq.com:8888/data.json");
request.onreadystatechange = () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.response);
  } else {
    console.log(request.response);
    console.log(request.readyState);
    console.log(request.status);
  }
};
request.send();
