function userCreate() {
    const uid = document.getElementById("userid").value;
    const id = document.getElementById("id").value;
    const tit = document.getElementById("title").value;
    // const email = document.getElementById("email").value;
      
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://jsonplaceholder.typicode.com/albums/create");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({ 
      "uid": uid, "id": id, "tit": tit
    }));
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const objects = JSON.parse(this.responseText);
        Swal.fire(objects['message']);
        loadTable();
      }
    };
  }
const form = document.querySelector('form');
const thankYouMessage = document.querySelector('#thank-you-message');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  thankYouMessage.classList.add('show');
  setTimeout(() => form.submit(), 2000);
});
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