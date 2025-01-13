// import './assets/main.css'
/**
 * ｛age:age｝
 * 
 */

import { createApp } from 'vue'
import App from './App.vue'

/**
 * require
 * import from
 */

import {name,age,run,say} from './impo/car.js'
console.log('name',name);
console.log('age',age);
run();
say();
console.log('==bird==');
import long1,{legs} from './impo/bird'
console.log('long1',long1);
console.log('legs',legs);

createApp(App).mount('#app')
