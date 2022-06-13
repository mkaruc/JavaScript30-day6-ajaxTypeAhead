const endpoint = 'https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json';

const cities=[];

const inputWord= document.querySelector(".searched");
const suggestions= document.querySelector(".suggestions");

fetch(endpoint)
 .then(blob=>blob.json())
 .then(data=>cities.push(...data))

function finding(foundWord,cities){
    return cities.filter(place => {
        const regex=new RegExp(foundWord, 'gi');
        return place.name.match(regex) || place.region.match(regex)
    });
}
function numberCommas(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}
function displayResults(){
    const matchArray=finding(this.value,cities);
    const html=matchArray.map(myList=> {
        const regex=new RegExp(this.value, 'gi');
        const cityName=myList.name.replace(regex,`<span class="hl">${this.value}</span>`);
        const regionName=myList.region.replace(regex,`<span class="hl">${this.value}</span>`);

        return `
        <li>
            <span class="name">${cityName} - ${myList.id} , ${regionName}</span>
            <span class="population">Population:${numberCommas(myList.population)}</span>
        `;
    }).join('');
    suggestions.innerHTML=html;
}

inputWord.addEventListener('change', displayResults);
inputWord.addEventListener('keyup', displayResults);