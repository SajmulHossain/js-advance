const getBtn = document.getElementById("getBtn");
const sendBtn = document.getElementById("sendBtn");

const sendRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.responseType = "json";
    xhr.onprogress = function () {
      console.log("loading");
    };

    xhr.onload = () => {
        if(xhr.status >= 400) {
            reject("Something went wrong")
        }
      resolve(xhr.response);
    };

    xhr.onerror = () => {        
        reject("Something went wrong")
    }
  });
};

const getData = function () {
  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", "https://sajmul.vercel.app/projects");
  // xhr.send();
  // xhr.responseType = "json"
  // xhr.onprogress = (function() {
  //     console.log('loading');
  // })
  // xhr.onload = (function () {
  //     const res = xhr.response;
  //     // console.log(JSON.parse(res));
  //     console.log(res);
  // })

  sendRequest("GET", "https://sajmul.vercel.app/projects").then((result) => {
    console.log(result);
  }).catch((err) => {
    console.log(err);
  });
};

const sendData = function () {sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    title: "",
    body: "",
    userId: 140
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });};

getBtn.addEventListener("click", getData);
sendBtn.addEventListener("click", sendData);
