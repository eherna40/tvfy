import $ from 'jquery'
import tvShows from '../tv-shows-container'

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
  



export default function renderShow(shows){
    shows.forEach(function(show){
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
  }