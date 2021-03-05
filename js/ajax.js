const API_KEY= "840523a722e0ffc0a860538562e81c5e";

function findMovie() {
   
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=" + API_KEY)
  .then(response => response.json())
  .then(getMovies)
  .catch(err => console.log(err))
}


function getMovies(response) {
    
    let liste = response.results
    let url = "https://image.tmdb.org/t/p/original";
    console.log(liste)
    
    for(let i = 0; i < liste.length; i++) {
        
        let div = document.createElement("div")
        div.classList.add("test")
        
        let titre = document.createElement("h2")
        titre.innerHTML = liste[i].title
        
        let img = document.createElement("img")
        img.src = url + liste[i].poster_path
    
        let note = document.createElement("p")
        note.innerHTML = `Note: ${liste[i].vote_average} / 10`
        
        let vote = document.createElement("p")
        vote.innerHTML = `${liste[i].vote_count} personnes ont voté`
        
        let date = document.createElement("p")
        date.innerHTML = `Sortie le: ${liste[i].release_date}`
        
        let description = document.createElement("p")
        description.innerHTML = liste[i].overview
        
        div.appendChild(titre)
        div.appendChild(img)
        div.appendChild(note)
        div.appendChild(vote)
        div.appendChild(date)
        div.appendChild(description)
        
        document.querySelector(".Film").appendChild(div)
    }

}

findMovie()