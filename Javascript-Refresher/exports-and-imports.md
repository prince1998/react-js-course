 ## Export and Import (Modules)


```js
 // person.js
 const person = {
     name: 'Max'
 }

// default export 
 export default person

// utility.js - named export (you will have to use curly braces in import)
export const clean = () => {...}
export const baseData = 10;

// app.js
import person from './person.js'
import prs from './person.js' // here person or prs is alias for default 'person' 

import {baseData} from './utility.js' // named exports; we are importinb baseData by its name; name must be same as used in export file and must be put inside curly braces
 
import {clean} from './utility.js'

//or we can put together baseData and clean

import {baseData, clean} from './utility.js'

// You can also define an alias as per convenince by:

import {clean as cln } from './utility.js'

//You can import everything using *
import * as bundled from './utility.js'
// bundled here is a javascript object and imported modules will be properties
// Eg. you import baseData using bundled.baseData 

```

default keyword means if we import something from that file, it will always be our default export.

Import default and ONLY export of the file Name in the receiving file is up to you

A file can only contain one default and an unlimited amount of named exports. You can also mix the one default with any amount of named exports in one and the same file.




