# Namaste-React
Namaste-react-course

Episode 1
----------------------------------------------------
How Core React works fundamentals  : covered in : commit 1


Episode 2
----------------------------------------------------
package.json : configuration for NPM  (dependencys)
diffrnce between package.json vs lock json
version caret vs tilde in package.
dependency in node module for example: parcel 
npm vs npx
npx parcel index.html // 

Parcel : read doc
-------
dev build
local server
HMR - Hot module replacement
File watching algoritham = build in c++
Cashing - faster build
image optimisation
minification /bundling
Compress
consisitent hashing *** read
code splitting 
diffrencial bundling - support older browser
Diagnostic
error handling / error suggestion
-HTTPs
Tree shaking 

for build for production // npx parcel build index.html 
and don't forgot to remove entry points main : in package.json

browserList
-------------------------


Episode 3
--------------------------------------------
"scripts": {
    "start": "parcel index.html",   // start is keyword
    "build": "parcel build index.html",
    "test" : "jest"
  },

  npm run start  ====  npm start  // ==  (npx parcel index.html)
  npm run build  !==  npm build

------------------------------------------
  React Element is not a HTML element it a Object
  when we reder this to Dom its become a HTml element

  JSX is Not HTMl : JSX is like HTML syntax /XML (its diffrent syntax)


  JSX and React is Diffrent

  Functional Component should start with Cappital Letter (Naming comvention)

  ------------------------------------------
  Babel (JSX - React)
  ------------------------------------------
  JSX attribute  = ClassName , tabIndex // camelcase 


  React Component
  ----------------------------------------------
  Class Based Component  (Old way)
  Function Based Component/functional component (New Way) ***


  Functional Component 
  ---------------------------------------------
  If a function is Returning a "React Element" its functional component.

  functional Componenet Return a JSX 

  its a Normal JS fucntion Returning a "React Element"

  JSX prevent Cross site Attack 
  it sanitize Everything inside {data}



  Episode 4
  ------------------------------------------------------
















