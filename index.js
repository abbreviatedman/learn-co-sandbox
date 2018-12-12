const url = "https://anapioficeandfire.com/api/characters/583"

fetch(url)
  .then(response => response.json())
  .then(json => console.log(json)
)

console.log('waiting...')