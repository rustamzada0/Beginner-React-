// import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Navbar from './components/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const a = 23;
  const isActive = true;
  return (
    <div className="container">

      {/* <h1>Hello</h1>
      {1 + 1}

      <br />

      {"tunay".toUpperCase()}

      <br />

      {a}

      <br />

      <div>
        {isActive ? "aktivdir" : "passivdir"}
      </div>

      <br /> */}

      {/* <h4 style={{color:"red", fontSize:"30px"}}>App Component</h4> */}

      {/* <h4 className='header' >App Component</h4> */}

      <h4>App Component</h4>

      {/* <Navbar /> */}

      <Navbar title="Navbar props"/>

      <hr />
      <br />

      {/* <User /> */}

      <User/>

      <User
        name="Meftun Mirzezade"
        department="Textile"
        salary={800}
        />

      {/* <User />
      <User />
      <User /> */}




    </div>
  );
}


export default App;
