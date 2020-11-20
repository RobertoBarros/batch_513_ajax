const moviesList = document.getElementById('movies-list');
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit',(event)=>{
  event.preventDefault() // Evita que o submit recarregue a página
  const keyword = document.getElementById('keyword').value;

  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`

  fetch(url)
    .then(response=> response.json())
    .then((data)=>{
      moviesList.innerHTML = '';
      data.Search.forEach((movie)=>{
        // console.log(movie.Title)

        const item = `<h3>${movie.Title}</h3>
                      <img src='${movie.Poster}'>`

        moviesList.insertAdjacentHTML('beforeend',`<li>${item}</li>`)
      });
    })

});




