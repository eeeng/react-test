import React from "react";

const CountryCard = ({activeCases, name, population, recovered, todayCases, todayRecovered, flag, deaths, tests}) => {
    return(
            <div className = 'CountryCard'> 
                <a href = {'http://www.google.com/search?q=${name}'} target = '_blank'>
                    <img src = {flag} className = 'flag'/>
                </a>
                <br/>
                <span className = 'data name'>{name}</span>

                <div className = 'rows'>
                <span className = 'data population'><span className = 'title'/>Population</span><br/> <span className = 'number'>{population}</span>
                <span className = 'data recovered'><span className = 'title'/>Total Recovery</span><br/> <span className = 'number'>{recovered}</span>
                <span className = 'data todayCases'><span className = 'title'/>Today Cases</span><br/> <span className = 'number'>{todayCases}</span>
                <span className = 'data todayRecovered'><span className = 'title'/>Today's Recovery</span><br/> <span className = 'number'>{todayRecovered}</span>
                <span className = 'data deaths'><span className = 'title'/>Deaths</span><br/> <span className = 'number'>{deaths}</span>
                <span className = 'tests'><span className = 'title'/>Tests</span><br/> <span className = 'number'>{tests}</span>
                </div>
            </div>    
    )

}
export default CountryCard