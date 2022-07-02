// const url = 'https://restcountries.com/v2/all';
// fetch(url).then(resp => resp.json).then(data=>{
//     console.log(data);
// }).catch(err=>console.log(err))

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens