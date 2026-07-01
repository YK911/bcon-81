// import { btnEl, carsListEl } from './scripts/refs';

import './scripts/getArticles';

import { btnEl, carsListEl, config as refsCnfg } from './scripts/refs';
// console.log(btnEl);

console.log(refsCnfg);

// import * as refsModule from './scripts/refs';
// console.log('🚀 ~ refsModule:', refsModule.btnEl);

import Notify from 'simple-notify';
import 'simple-notify/dist/simple-notify.css';

// import { number } from './script';

const config = {};

btn.addEventListener('click', () => {
  const notificationOptions = {
    status: 'success',
    title: 'Notify Title',
    text: 'Notify text lorem ipsum',
    effect: 'fade',
    speed: 300,
    customClass: '',
    customIcon: '',
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    notificationsGap: null,
    notificationsPadding: null,
    type: 'outline',
    position: 'right top',
    customWrapper: '',
  };

  new Notify(notificationOptions);
});
