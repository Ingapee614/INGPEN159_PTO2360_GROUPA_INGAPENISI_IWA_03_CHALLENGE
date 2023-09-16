// scripts.js

import { company} from './script1.js' 
import { year } from './script1.js'

const message = '© ' + company + ' (' + year+ ')';

document.querySelector('footer').innerText = message
console.log(message);