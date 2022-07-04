// function id(){
// fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let authors = data;

//     authors.map(function(author) {

//     });
//   })
// }
// function readid(){
// fetch("https://jsonplaceholder.typicode.com/users") 
//     // Converting received data to JSON
//     .then(response => response.json())
//     .then(json => {
//         // Create a variable to store HTML
//         let li = `<tr><th>id</th><th>userId</th><th>title</th></tr>`;
//         // Loop through each data and add a table row
//         json.forEach(album => {
//             li += `<tr>
//                 <td>${album.id} </td>
//                 <td>${album.userId}</td>
//                 <td>${album.title}</d>        
//             </tr>`;
//         });
//     // Display result
//     document.getElementById("albums").innerHTML = li;
// });
// }

// function readid(){
    // var id= document.getElementById("albumid").value;
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')
// ?product=shirt&color=blue&newuser&size=m
    // let url_str = 'file:///C:/Users/manojkumar.seeta/Desktop/avanced%20js/details.html?id=1';

// let url = new URL(url_str);
// let search_params = url.searchParams; 

// get value of "id" parameter
// "100"
// console.log(search_params.get('id'));
   let fetchRes = fetch("https://jsonplaceholder.typicode.com/albums/"+id);
            // fetchRes is the promise to resolve
            // it by using.then() method
            fetchRes.then(res =>
                res.json()).then(d => {
                    // console.log(d)
                    document.write(JSON.stringify(d))
                })
            // }