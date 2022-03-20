
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <body className="App">
      <div className="App-header">
        <h1><u>COUNTRY</u></h1>
        <div>
          <LodCountry></LodCountry>
        </div>
      </div>
    </body>
  );
};

function LodCountry() {
  const [countries, setCountry] = useState([]);
  console.log(countries)
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  }, []);
  return (
    <div>
      {
        countries.map(country => <Country name={country.name} nativeName={country.nativeName}></Country>)
      }
    </div>
  )
};
function Country(props) {
  return (
    <div className='countries'>

      <div className='country'>
        <h1>Name: {props.name}</h1>
        <h2>Native Name: {props.nativeName}</h2>

      </div>
    </div>
  )
}





export default App;
