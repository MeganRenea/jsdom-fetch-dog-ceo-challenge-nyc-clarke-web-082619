console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
    fetchBreeds();

    document.getElementById("breed-dropdown").addEventListener("change", (event) =>{
        let breeds = document.querySelectorAll("li")
        breeds.forEach(function(breed) {
            if (event.target.value === breed.innerText[0]){
            breed.style.display = "block";
        }
            else 
            breed.style.display = "none"
 
  })})})

  function fetchImages() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderImages(json));
  }

  function renderImages(json){
      const container = document.getElementById("dog-image-container")
      json.message.forEach(image => {
        const img = document.createElement("img")
          img.src= `${image}`
          container.appendChild(img)
      })
  }

  function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
  }

function renderBreeds(json) {
    let ul = document.querySelector("ul")

    for (dog in json.message){
        let li = document.createElement("li")
        li.innerText = dog
        ul.appendChild(li)
    }
}



document.addEventListener("click", (event)=>{
  if (event.target.nodeName === "LI"){
      event.target.style.color = `rgb(255,0,0)`
  }
})


