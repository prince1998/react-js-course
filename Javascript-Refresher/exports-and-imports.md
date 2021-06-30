 ## Export and Import (Modules)


```js
 // person.js
 const person = {
     name: 'Max'
 }

 export default person

// utility.js
export const clean = () => {...}
export const baseData = 10;

// app.js
import person from './person.js'
import prs from './person.js'

import {baseData} from './utility.js'
import {clean} from './utility.js'

```

default keyword means if we import something from that file, it will always be our default export.

Import default and ONLY export of the file Name in the receiving file is up to you