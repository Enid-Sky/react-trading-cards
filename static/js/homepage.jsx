"use strict";

// // component
// function Homepage() {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//     </div>
//   );
// }

// // component to render
// ReactDOM.render(<Homepage />, document.querySelector('#app'));



// component, pass props
function Homepage(props)  {
 
    return (
        <React.Fragment>
        
        <h2>"My name is Balloonicorn, let's play!"</h2>
        <a href="/cards"> Cards page </a>
        <img src="/static/img/balloonicorn.jpg"></img>

        </React.Fragment>
    );
    
}

// component to render, on node we query by id

ReactDOM.render(<Homepage />, document.getElementById('app'));
