//CORE OF React



//const header = React.createElement('h1', {id : 'heading'}, 'Welcome to React!');
//console.log(header); //object

//for creatting this Structure // below code
{/* <div id="root">
    <div id="parent">
        <div id="child1">
            <h1 id="heading1">Core React</h1>
        </div>
        <div id="child2">
            <h2 id="heading1">fundamental</h2>
            <h2 id="heading2">learning</h2>
        </div>
    </div>
</div> */}

const parent = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'child1' },
            [
                React.createElement('h1', { id: 'heading1' }, 'Core React'),
                React.createElement('h2', { id: 'heading2' }, '------------------')
            ]),
        React.createElement('div', { id: 'child2' },
            [
                React.createElement('h2', { id: 'heading1' }, 'fundamental'),
                React.createElement('h2', { id: 'heading2' }, 'learning')
            ])
    ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);