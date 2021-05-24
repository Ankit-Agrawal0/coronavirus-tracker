import React from 'react';
import './Indian.css';
import Loader from "./Loader"
const Indian = () => {
  const [cases, setCases] = React.useState("");
  const stateData = cases.regionData;
  const url = "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true";
  const getData = async () => {
    const response = await fetch(url);
    setCases(await response.json());
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <div className="Indian">
    <div id="IndianData">
      <h1 id="heading2">INDIAN CASES</h1>
      <hr />
    </div>
      { cases === "" ?
   <div><Loader /> loading....</div>  :
      (
        <div className="cases">
     <div className="indian_cases totalCases">
              <h3 className="total" id="total"> TOTAL CASES</h3><span>{cases.totalCases}</span>
              <h3 className="new" id="new"><i class="fas fa-chart-line"></i>  {cases.activeCasesNew}</h3><i class="icon fas fa-users"></i>
        </div>
     <div className="indian_cases activeCase">
              <h3 className="active" id="active"> ACTIVE CASES</h3><span>{cases.activeCases}</span>
              <h3 className="new" id="new"> <i class="fas fa-chart-line"></i>  {cases.activeCasesNew}</h3><i class="icon fas fa-procedures"></i>
        </div>
      <div className="indian_cases recoveredCase recoveredca">
              <h3 className="recovered" id="recovered"> RECOVERED</h3><span>{cases.recovered}</span>
              <h3 className="new" id="recovered"><i class="fas fa-chart-line"></i>  {cases.recoveredNew}</h3><i class="icon fas fa-heartbeat"></i>
        </div>
      <div className="indian_cases deathCase deathca">
              <h3 className="death" id="death"> DEATHS</h3><span>{cases.deaths}</span>
              <h3 className="new" id="death"><i class="fas fa-chart-line"></i>  {cases.deathsNew}</h3><i class="icon fas fa-skull-crossbones"></i>
        </div>
        <hr />
        </div>
      )}
      <div className="state_wise">
      <hr />
       <div className="state">
          <h2>State Wise </h2>
          <hr />
        </div>
        <div class="table-responsive-md" id="IndianTable">
  <table class="table table-striped">
  <thead>
    <tr className="tableTitle">
      <th scope="col">#</th>
      <th scope="col">Region</th>
      <th scope="col">Total</th>
      <th scope="col">Active</th>
      <th scope="col">New</th>
      <th scope="col">Recovered</th>
      <th scope="col">RecoveredNew</th>
    </tr>
  </thead>
  <tbody>
  { stateData ? stateData.map((elem, ind)=>(
              <tr>
      <th scope="row">{ind+1}</th>
      <td>{elem.region}</td>
      <td>{elem.totalInfected}</td>
      <td>{elem.activeCases}</td>
      <td>{elem.newInfected}</td>
      <td>{elem.recovered}</td>
      <td>{elem.newRecovered}</td>
    </tr>
            )):
            <Loader />
            }
          </tbody>
          </table>
        <hr />
        </div>
      </div>
    </div>
  );
}

export default Indian;