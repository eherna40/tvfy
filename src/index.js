import $ from 'jquery'
import page from 'page'
import {getShows, searchShows} from './tv-api'
import renderShow from './render'
import tvShows from './tv-shows-container'
import './search-form'
import qs from 'qs'


page('/', function(ctx, next){
if(!localStorage.shows){
    getShows(function (shows){
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

page('/search', function(ctx, next){
  tvShows.find('.movie').remove()
    $('.load').show()
    const search = qs.parse(ctx.querystring);
    searchShows(search, function (res){
      $('.load').hide();
      var shows = res.map(function(show){
        return show.show
      })
      renderShow(shows)
    })         
})

page()