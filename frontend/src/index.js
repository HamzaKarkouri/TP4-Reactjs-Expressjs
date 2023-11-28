import React from 'react';
import ReactDOM from 'react-dom/client'; //resctDOM pour afficher des elements
import './index.css';
import  App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root')); //createRoot ou je vais afficher
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

/*
function Etudiantlist(){
  return (<>
  <ul>
      <li key={1}>Zoublkair</li>
      <li key={2}>Zoublkair</li>
      <li key={3}>Zoubkaikr</li>
    </ul></>);
}

function Home(props){
  return(
  <>
  <h1>Hello {props.p.name} vous avez {props.p.age}</h1>
  <Etudiantlist/>
  </>);
  
}
const p={"name":"Said","age":20}
const root = ReactDOM.createRoot(document.getElementById('root')); //createRoot ou je vais afficher
root.render(
  <Home name="Zoubair"/>

);
*/
/*
//const root=React.createRoot("h!",{},"Bonjour")  //facon classique
let a=19
let b=20
const etudiant=[
  {"id":1,"nom":"Zoubair","age":20},
  {"id":2,"nom":"fadili","age":21},
  {"id":3,"nom":"elfadili","age":22},
  {"id":4,"nom":"ali","age":22},

];
const val=[20,15,18,19]
const nom="Zoubair";
const myElm=<>
              <h1>Bonjour tout le mode</h1>
              <h1>Hello Mr {nom}</h1>   //pour affiche une valeur
              <h1>Max = {(a>b)?a:b}</h1> 

              <ul>
                {val.map(elem=><li>{elem}</li>)} //afficher les valeur comme liste
              </ul>
              <table className="etudiantTable">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>nom</th>
                    <th>age</th>
                  </tr>
                </thead>
                <tbody>
                  {etudiant.map(elem=>
                    <tr key={elem.id}> 
                      <td>{elem.id}</td>
                      <td>{elem.nom}</td>
                      <td>{elem.age}</td>
                    </tr>
                  )}
                </tbody>
              </table>                                   
              </>

const root = ReactDOM.createRoot(document.getElementById('root')); //createRoot ou je vais afficher
root.render(
  <Home name="Zoubair"/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
*/
reportWebVitals();
