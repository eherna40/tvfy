import $ from 'jquery'
import tvShows from '../tv-shows-container'
import { searchShows } from '../tv-api'
import renderShows from '../render'
import page from 'page'
$('#search')
  .find('form')
  .submit(function (ev){
    ev.preventDefault();
    
    let search = $(this)
      .find('input[type="text"]')
      .val()
    page(`/search?q=${search}`)
    
  })
