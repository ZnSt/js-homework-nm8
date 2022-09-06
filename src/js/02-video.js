import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime(param) {
  localStorage.setItem('videoplayer-current-time', param.seconds);
}

const getDataStorage = localStorage.getItem('videoplayer-current-time');

if (getDataStorage) {
  player.setCurrentTime(getDataStorage);
}

player.setColor('#FF0000');
