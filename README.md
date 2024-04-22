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
  Food Ordering App!!!

  First - Plan (Wireframe) - create
  Second - Based on Wireframe : decide components
  <header>
  <logo>
  <nav>

  <body>
  <search bar>
  <Resturent container>
    <resturent cards>

  <footer> 
    <contact us>
    <copy right>


Props 
------
props is an object 

which help to pass data to a functional component 

passing props like this 

<Component resName="ResturantName">
//NORMAL
(props)=> {
{props.resName}
}

//DESTRUCTRING
({resName})=> {
{resName}
}




config Driven UI
----------------------
in Nutshell data coming from the backend will decide what to show in the frontend
for a food order app diffrent location shows diffrent details based on this 

call Config Driven UI (it should have a config for each and every location)


Key :
--------
should use key when looping
Never Use index as key use somthing unique like Id or something...



Episode 5
---------------------

create seperate component / split component
component file name start with Capital Letter "Header"

file extention (it doesn't Matter)
.js
.jsx
.tsx (Typescript)


export

--


Default export vs named export (one file contain only one default export)

export const App_Data = {..}  (named export)


how to import 
--

named export will be imported like this 

import { APP_DATA } from ./utils

default export will be imported like this

import APP_DATA from ./utils


""You are trying to reassign a value to ResObj, which seems to be imported from an external file. 
Reassigning a value to an imported module is not allowed. Instead, 
you should filter the data and store it in a new variable.""


# Hook (is a normal JS function)
- useState() : super powerfull state variable in React
- useEffect()


example useState()

const [list,setList] = useState([])

here setList is a function / what happen to the variable is defined by the setList function



 When ever a state variable updated React will rerender that UI


 # Reconsiliation ALGORITHAM / React Fiber

 
Episode 6
---------------------






















