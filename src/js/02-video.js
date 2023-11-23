import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('video-play-time', event.seconds);
  }, 1000)
);

window.addEventListener('DOMContentLoaded', () => {
  const time = localStorage.getItem('video-play-time');
  player.setCurrentTime(time);
});
