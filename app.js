import React from 'react';
import ReactDOM from 'react-dom/client';


//React.createElement => ReactElement(JSobject) => HtmlElement(render)

//This is React
const headingReact = React.createElement('h1', {id:"heading"}, 'Namaste React Root!!')



// JSX =>(Transplie using Babel) React.createElement => ReactElement(JSobject) => HtmlElement(render)

//this is JSX, (transplied it before it Reach the JS Engine ) - Parcel => Babel do the traplilation (JSX to React)
const headingJSX = <h1 id='heading' className='heading'>Namaste React Using JSX</h1>

//multiLine JSX
// (<h1 id='heading' 
//    className='heading'>
//     Namaste React Using JSX</h1>)

//functional Component Example
const fn = () => true;
const FunctionalComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}
const FunctionalComponent2 = () => 
      ( <h1> 
        Namaste React Functional Component
        </h1> )
/*-------------------------------------------------------*/

const name = "Jayagovind";
const Title = ()=> <h1>Namaste React Functional Component</h1>;
const reactElement1 = <span>This is React Element 1 </span>
const reactElement2 = (<div><h1>This is React Elemment 2</h1>{reactElement1}</div>)

//rendering inside MainHeader Component // this is also called Component Compostiion one inside another
//{} we can Write any Javascript expression inside this curly braces inside JSX
const MainHeader = () => <div className='main'>
    {name} 
    {console.log("hi")}
    {reactElement2}
    {Title()} 
    <Title/>
    <Title></Title>
</div>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MainHeader/>)

