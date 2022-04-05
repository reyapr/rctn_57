import fetch from 'node-fetch'

// fetch('https://swapi.dev/api/people')
//     .then((response) => response.json())
//     .then((data) => {
//         return data.results.filter(res => res.height < 100)
//     })
//     .then(res => {
//         console.log(res, `<=================== res promise ==================`);
//     })
//     .catch(err => {
//         console.log(err, `<=================== err promise ==================`);
//     })
    

// let fetchStarWars = async () => {}
async function fetchStarWarsData() {
    const response = await fetch('https://swapi.dev/api/people')
    const data = await response.json()
    let filteredData = data.results.filter(res => res.height < 100)
    return filteredData
}

(async () => {
    let result = await fetchStarWarsData()
    console.log(result, `<=================== result ==================`);
})()

console.log( `<=================== test ==================`);

