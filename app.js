const endpoint = 'https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json';

const cities=[];

fetch(endpoint)
 .then(blob=>blob.json())
 .then(data=>cities.push(data))

