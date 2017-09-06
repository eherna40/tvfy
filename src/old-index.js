import $ from 'jquery'

$(function(){
  var tvShows =  $('.app-container').find('.watchlist')
  function renderShow(shows){
    var ss = shows.forEach(function(show){
      var col = template
      .replace(':name:', show.name ? show.name : '')
      .replace(':img:', show.image ? show.image.medium : '')
      .replace(':img alt:', show.name ? show.name + " Logo" : '')
      .replace(':country:', show.network ? show.network.country.name : '' )  
      .replace(':likes:', show.rating ? show.rating.average : '' )  

    var col = $(col)
    col.hide()
    tvShows.append(col.fadeIn(1500))
    })
    console.log('a')
    return true
  }
  
  $('#search')
    .find('form')
    .submit(function (ev){

      ev.preventDefault();
      
      let search = $(this)
        .find('input[type="text"]')
        .val()
      
       tvShows.find('.movie').remove()
      $('.load').show()
      
      $.ajax({
        url: 'http://api.tvmaze.com/search/shows',
        data: { q: search },
        success: function(res, textStatus, xhr){
          var shows = res.map(function(show){
            return show.show
          })
              $('.load').hide();

          renderShow(shows)
        }
      })
    })

  var template = `
<div class="col s12 m6 l3 movie">
  <div class="img center">
    <img class="responsive-img" src=":img:" alt=":img alt:">
  </div>
  <div class="title">
    <div class="category">MOVIE</div>
    <div class="movie-title">:name:</div>
    <div class="director">:country:</div>
  </div>
  <div class="play circle scale-transition">
    <i class="material-icons">play_arrow</i>
  </div>
  <div class="like-comment">
    <div class="like">
      <i class="material-icons">thumb_up</i>
       :likes:
    </div>
  </div>
  <div class="select active back"></div>
</div>`  
  
  if(!localStorage.shows){
    $
    .ajax('http://api.tvmaze.com/shows')
    .then(function(shows){
      tvShows.find('.load').hide();
      $('.load').hide();
      localStorage.shows = JSON.stringify(shows)
      renderShow(shows);
      tvShows.css('opacity', 1)
    })

  }else{
        $('.load').hide();

      renderShow(JSON.parse(localStorage.shows))
      
  }

})
