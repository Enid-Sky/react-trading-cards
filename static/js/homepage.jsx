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



// component
class Homepage extends React.Component {
    render() {
        return (
            <div class="welcome">
              <h2>"My name is Balloonicorn, let's play!"</h2>
              <a href="/cards"> Cards page </a>
              <img src="/static/img/balloonicorn.jpg"></img>
            </div>
        );
    }
}

// component to render
ReactDOM.render(<Homepage />, document.querySelector('#app'));
