

// function readid(){
    // var id= document.getElementById("albumid").value;
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString)
    const id = urlParams.get('id')
   let fetchRes = fetch("https://jsonplaceholder.typicode.com/albums/"+id);
            // fetchRes is the promise to resolve
            // it by using.then() method
            fetchRes.then(res =>
                res.json()).then(d => {
                    // console.log(d)
                    document.write(JSON.stringify(d))
                })
            // }