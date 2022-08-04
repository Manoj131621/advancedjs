// function userCreate() {
//     const uid = document.getElementById("userid").value;
//     const id = document.getElementById("id").value;
//     const tit = document.getElementById("title").value;
//     // const email = document.getElementById("email").value;
      
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("POST", "https://jsonplaceholder.typicode.com/albums/create");
//     xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhttp.send(JSON.stringify({ 
//       "uid": uid, "id": id, "tit": tit
//     }));
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         const objects = JSON.parse(this.responseText);
//         Swal.fire(objects['message']);
//         loadTable();
//       }
//     };
//   }
// const form = document.querySelector('form');
// const thankYouMessage = document.querySelector('#thank-you-message');
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   thankYouMessage.classList.add('show');
//   setTimeout(() => form.submit(), 2000);
// });
// function submitForm()
// {
//  submitted = true;
//  goHome(submitted);
// }
// function goHome(submitted)
// {
// if(redirect == submitted)
// {
//   alert("form submitted");
//   document.location.href = "albums.html";
// }
// }

// document.addEventListener("submit", sendData);
// function sendData(e) {
//   e.preventDefault();
//   const a = document.querySelector("#num1").value;
//   const b = document.querySelector("#num2").value;

//   fetch("/add", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       a: parseInt(a),
//       b: parseInt(b)
//     })
//   })
//     .then(res => res.json())
//     .then(data => {
//       const { result } = data;
//       document.querySelector(
//         ".result"
//       ).innerText = `The sum is: ${result}`;
//     })
//     .catch(err => console.log(err));
// }


// const myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', function (e) {
// e.preventDefault();
// const formData = new FormData(this);
// fetch('create.js', {
// method: 'post',
// body: formData
// }).then(function (response) { return response.text();
// }).then(function (text) {
// console.log(text);
// }).catch(function (error) {
// console.error(error);
// })
// });
function Create(){
  // const m1 = document.getElementById('myForm')
  // console.log(m1)
fetch('https://jsonplaceholder.typicode.com/albums',{
  method:'POST',
  body: JSON.stringify(
    {
      "userId": document.getElementById("userid").value,
      "id": document.getElementById("id").value,
      "title": document.getElementById("title").value
    }
  ),
})
.then(res => res.json())
.then(data => console.log(data));
}