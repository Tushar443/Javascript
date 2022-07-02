const url = 'https://restcountries.com/v2/all'

const fetchUrl = async ()=>{
    try{
        const countries = await fetch(url);
        const res = countries.json();
        console.log(res);
    }catch(e){
        console.log(e);
    }
}

fetchUrl()

/*
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()
*/
