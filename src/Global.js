import React from 'react';
import Loader from "./Loader";
import Chart from "./Chart";

const Global = () => {
  const [g_cases,setG_Cases] = React.useState("");
  const [h_cases,setH_Cases] = React.useState("");
  const [showAll,setShowAll] = React.useState(false);
  const [filteredData,setFilteredData] = React.useState();

  const url = "https://corona.lmao.ninja/v2/all?yesterday";
  const getData = async () => {
    const response = await fetch(url);
    setG_Cases(await response.json());
  };
  
  const getData3 = async () => {
    const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
    const data = await response.json();
    data.sort((a, b) => b.cases - a.cases);
    setH_Cases(data);
  };
  React.useEffect(() => {
    getData();
    getData3();
  }, []);
  React.useEffect(()=> {
    if (h_cases) {
      if (showAll) {
        setFilteredData(h_cases);
      } else {
        const data = [...h_cases];
        setFilteredData(data.splice(0, 15));
      }
    }
  },
    [showAll,h_cases]);

  function time(ms) {
    return new Date(ms).toISOString().slice(11,
      -1);
  }

  const handleTable = () => {
    if (showAll) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };
  return (
    <div className="Global">
      <div id="GlobalData">
      <h1 id="heading1">GLOBAL CASES <i class="fas fa-globe"></i> </h1>
      <hr />
    </div>
      { g_cases === "" ?
     <Loader /> :
      (<div>
        <div className="cases">
     <div className="indian_cases totalCases">
              <h3 className="total" id="total"> TOTAL CASES</h3><span>{g_cases.cases}</span>
              <h3 className="new" id="new"> <i class="fas fa-chart-line"></i> {g_cases.todayCases}</h3><i class="icon fas fa-users"></i>
        </div>
     <div className="indian_cases activeCase">
              <h3 className="active" id="active"> ACTIVE CASES</h3><span>{g_cases.active}</span>
              <h3 className="new" id="new"> <i class="fas fa-chart-line"></i> {g_cases.todayCases}</h3><i class="icon fas fa-procedures"></i>
        </div>
      <div className="indian_cases recoveredCase">
              <h3 className="recovered" id="recovered"> RECOVERED</h3><span>{g_cases.recovered}</span>
              <h3 className="new" id="recovered"><i class="fas fa-chart-line"></i> {g_cases.todayRecovered}</h3><i class="icon fas fa-heartbeat"></i>
        </div>
      <div className="indian_cases deathCase">
              <h3 className="death" id="death"> DEATHS </h3><span>{g_cases.deaths}</span>
              <h3 className="new" id="death"> <i class="fas fa-chart-line"></i> {g_cases.todayDeaths}</h3><i class="icon fas fa-skull-crossbones"></i>
        </div>
      <div className="indian_cases testCase">
              <h3 className="test" id="test"> TESTS </h3><span>{g_cases.tests}</span>
              <h3 className="new" id="death"> Tests Per Million: {Math.floor(g_cases.testsPerOneMillion)}</h3><i class="icon fas fa-vials"></i>
        </div>
      <div className="indian_cases deathCase">
              <h3 className="death" id="death"> CRITICAL </h3><span>{g_cases.critical}</span>
              <h3 className="new" id="death"> Critical Per Million: {Math.floor(g_cases.criticalPerOneMillion)}</h3><i class="icon fas fa-exclamation-triangle"></i>
        </div>
      <div className="indian_cases population">
              <h3 className="death" id="death"> POPULATION </h3><span>{g_cases.population}</span>
              <i class="icon subIcon fas fa-users"></i>
        </div>
      <div className="indian_cases affected">
              <h3 className="death" id="death"> AFFECTED COUNTRIES </h3><span>{g_cases.affectedCountries}</span>
              <i class="icon subIcon fas fa-globe-americas"></i>
        </div>
        
        </div>
        <h6 className="time">last updated at {time(g_cases.updated)}</h6>
        <hr />
        <Chart />
        </div>
      )}
      { filteredData ? <div class="table-responsive-xl" id="GlobalTable">
      <hr />
  <table class="table table-striped">
  <thead>
    <tr className="tableTitle">
      <th scope="col">#</th>
      <th scope="col">Country</th>
      <th scope="col">Total</th>
      <th scope="col">Active</th>
      <th scope="col">Deaths</th>
      <th scope="col">Recovered</th>
      <th scope="col">Critical</th>
      <th scope="col">Tests</th>
      <th scope="col">Population</th>
    </tr>
        </thead>
  <tbody>
  {filteredData.map((elem, ind)=>(
            <tr>
      <th scope="row">{ind+1}</th>
      <td>{elem.country} <img src={elem.countryInfo.flag} className="flag" alt=""/></td>
      <td>{elem.cases}</td>
      <td>{elem.active}</td>
      <td>{elem.deaths}</td>
      <td>{elem.recovered}</td>
      <td>{elem.critical}</td>
      <td>{elem.tests}</td>
      <td>{elem.population}</td>
    </tr>
          )) }
        </tbody>
        </table>
      <center>
  <a href="#" className="showAll" onClick={handleTable}>Show {showAll ? 'Less': "More"  }</a>
    </center>  <hr />
      </div> : <div><Loader /> loading....</div> 
      }
    </div>
  );
}

export default Global;