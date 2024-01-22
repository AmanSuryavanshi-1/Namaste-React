# EP2
11) package.json will manage the package and dependencies which will be installed in our project
12) package-lock.json will locks the version and keeps the record of it when the particular dependency is installed in the project
13) package.json & package-lock.json are important files. Even if the node modules get's deleted it can be reinstalled easily by using the data of previous versions from package.json
14) Node Modules are the collection of dependencies.And  are very huge in size
15) No need to push Node modules on github as the size of node modules is very huge 
16) .git-ignore file is used to ignore the things which a developer don't want to push to Github
17) - 20) index.html

21) # Parcel
   - It plays a important role in making a react app faster
   - parcel uses other libraries from node modules to work things out 
   - parcel is a bundler which minifies and optimizes the code  
   - it creates a Dev Build 
   - creates a local server
   - Automatically refreshing the page or (HMR) hot module replacement
   - it uses a File Watching Algorithm which is written in C++
   - It gives Faster builds because it uses Caching in .parcel-cache
   - It does Image Optimization
   - Compresses
   - consistent hashing
   - Differential Bundling (to support older browsers)
   - Helps in Error handling
   - tree shaking (remove's unused code)
   - There are many feature's like lazy mode for slow loading and HTTPS load (read parcel documentation)
   - Webpack / Vite / parcel are the commonly used bundler
 
 # Can be used for BUILDING by using command *npx parcel build index.html*
> If it gives error just remove this ("main": "index.js") line from package json
   - It will give you three file 
        
        dist\index.html      
        dist\index.96c45174.css       
        dist\index.2357549c.js 
        
      - these files contains the modified code which is highly compressed and  modified.
      -  It compresses all the files breaking them into these 3 files only 
      -  This Production build is highly optimized build which you can push on the Production

      * You do not have to push dist and .parcel-cache to your github as these files gets generated again if it gets deleted same happens in case when hosting on a server
      *  So you can add dist and .parcel-cache to your .gitignore

    # EP3
    - *npx parcel index.html* will create a development build for us and host it on localHost
    - NPX means u r executing a NPM package. In this case npm package is parcel and giving source file as index.html
    - to make it easier we will write a script so we don't have to write our s *npx parcel index.html* to initiate our project again and again.
    - And that script will be created in package.json in script tag
    ```JSON
    "scripts": {
    "start": "parcel index.html", //dev mode
    "build": "parcel build index.html", // build mode
    }
    ```
    - now we can just write parcel index.html
    - exactly same as npm run start (it is also calling npx parcel index.html behind the scenes) 
    - in that case we can just write npm start or npm run start both will start the project.

**#  HOW TO INITIATE A PARCEL APP **
 [https://dev.to/coderific/using-parcel-to-create-a-react-app-3cp0#:~:text=Using%20Parcel%20to%20create%20a%20React%20app%201,file%20...%207%20Step%207%29%20Check%20everything%20works](https://)
# npm init -y
# npm i -D parcel-bundler
# npm i react react-dom
<!--^ Open the package.json file, and in the "scripts" section add the following "start" script. -->
# "start": "parcel index.html --open" 
# Create the initial index.html
```javascript
<div id="root"></div>
<script src="./index.js"></script>
```

# Create the index.js file
```javascript
import React from 'react'
import { render } from 'react-dom'

render(<p>Hello, world!</p>, document.getElementById('root'))
```

# Check everything works (npm start)