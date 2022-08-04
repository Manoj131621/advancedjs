function Create(){
  // const m1 = document.getElementById('myForm')
  // console.log(m1)
fetch('https://jsonplaceholder.typicode.com/albums',{
  method:'POST',
  body: JSON.stringify(
    {
      "userId": document.getElementById("man"),
      "id": document.getElementById("van"),
      "title": document.getElementById("can")
    }
  ),
})
.then(res => res.json())
.then(data => console.log(data));
var newWindow = window.open("albums.html","_blank");
newWindow.alert('Created successfully')
}