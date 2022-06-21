import './App.css';
import CountryCard from './CountryCard'
import covidData from './covidData';
import React, {useState, useEffect} from 'react';

function App() {
  const [CountryFilter, setCountryFilter] = useState('')
  const [reverse, setReverse] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  
  const filteredCountries = covidData.filter(item => {
    const country = item.country

    if(CountryFilter == ''){
      return item

    }
    else if(country.toLowerCase().includes(CountryFilter.charAt.toLowerCase())){
      return item

    }

    const countries = filteredCountries.map(item => {
      return <CountryCard
        name = {item.country}
        population = {item.population.toLocaleString('en-US')}
        recovered = {item.recovered.toLocaleString('en-US')}
        todayCases = {item.todayCases}
        todayRecovered = {item.todayRecovered}
        deaths = {item.deaths.toLocaleString('en-US')}
        flag = {item.countryInfo.flag}
        tests = {item.tests.toLocaleString('en-US')}
        key = {item.country.toLocaleString('en-US')}
        />
    const countriesReversed = [...countries].reverse()
    const toggleDarkModeStyles = {
      background: darkMode ? 'rgb(235,235,235)': 'rgb(31,31,31)',
      boxShadow: darkMode ? '0 0 10px rgb(235,235,235)': '0 0 10px rgb(31,31,31)'
    }

    const toggleHandlerStyles = {
      left: darkMode ? '92px' : '4px',
      background: darkMode ? 'rgb(31,31,31)' : 'rgb(235,235,235)' 

    }
     
    }) 
  return (
    <>
      <style>{'
          body{
            background: ${darkMode ? 'rgb(31,31,31)' : 'rgb(241,241,241)'}
          }
          .toggleDarkMode{
            background: ${darkMode ? 'rgb(235,235,235)' : 'rgb(31,31,31)'}
          }
          .results{
            color: ${darkMode ? 'white' : 'black'}
          }
          .toggle{
            background: ${darkMode ? '#333' : 'rgb(0,42,255)'};
            border: ${darkMode ? '1px solid grey' : 'none'}
          }
          .toggle:hover{
            background: ${darkMode ? '#4a4a4a' : 'rgb(39,74,246)'}
          }
          .filterInput{
            border: ${darkMode ? '1px solid grey' : ''};
          }
      '
      
      </style>

    <div className = 'App'>
      <div className='toggleDarkMode' style={toggleDarkModeStyles}>
        <div className='toggleHandler' style={toggleHandlerStyles} onClick = {() =>{
          setDarkMode(!darkMode)
        } }></div>
        </div>
        <div className='subContainer'>
          <span className='results'>{countries.length == 0 ? 'No results. Try again' : '${countries.length} results found'}</span>
          <br/>
          {countries.length !==0 ? <input className='filterInput' value={CountryFilter} placeholder = 'Filter Country' 
          onChange={(e) => {setCountryFilter(e.target.value)}}>setTimeout(() => {
            window.relocation.reload()
          }, 1000)}

          {countries.length  !== 0 ? <button className='toggle' onClick={() => {setReverse(!reverse)}}>{reverse ? 'Descending Order' : 'Ascending Order'}</button> : ''}
          
          <div className='countriesContainer'>
            {reverse ? countries : countriesReversed}
            </div>
          </div>
        </div>
  

    </>
    

  );
}

export default App;
