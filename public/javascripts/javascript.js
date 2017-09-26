$(document).ready(function () {

  function getMovies() {
    $.ajax({
      method: 'GET',
      url: '/movie',
      success: success
    })
  }

  function success(result) {
    console.log('good')
      // $('#movie-list').empty()
      // $('#create-todo-item').val('')
      // result.forEach(appendTODOElements)
    }

// AJAX request handlers for movies
function createMovie(id, title, year, director_id) {
  $.ajax({
    method: 'POST',
    url: `/movie`,
    data: {id: id, title: title, year: year, director_id: director_id},
    success: getMovies
  })
}

function deleteMovie(movieId) {
  $.ajax({
    method: 'DELETE',
    url: `/movie/${movieId}`,
    success: getMovies
  })
}




})
