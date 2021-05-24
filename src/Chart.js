import React from "react"
import Graph from "./Graph"
import "./Chart.css"
const Chart =()=>{
  
const [cases, setCases] = React.useState("");
  const [key, setKey] = React.useState([])
  const [key1, setKey1] = React.useState([])
  const [key2, setKey2] = React.useState([])
  const [value,setValue] = React.useState([])
  const [value1,setValue1] = React.useState([])
  const [value2,setValue2] = React.useState([])
  const getData = async () => {
    const response = await fetch("https://corona.lmao.ninja/v2/historical/all");
    setCases(await response.json());
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(()=> {
    if (cases !== "") {
      let x = []
      let x2 = []
      let x3 = []
      let y = []
      let y2 = []
      let y3 = []
      for (var i in cases.cases) {
        x.push(i)
        y.push(cases.cases[i])
      }setKey(x)
      setValue(y)
      for (var a in cases.recovered) {
        x2.push(a)
        y2.push(cases.recovered[a])
      }setKey1(x2)
      setValue1((y2))
      for (var b in cases.deaths) {
        x3.push(b)
        y3.push(cases.deaths[b])
      }setKey2(x3)
      setValue2((y3))
      
    }
    
    
  },[cases])
console.log(cases)
  return(
    <div className="AllGraph">
    <Graph xAxis={key} yAxis={value} text="Covid 19" label="No. of Cases" bg="#A8C8F8" border="rgb(5,76,227)"/>
    <Graph xAxis={key1} yAxis={value1} text="Covid 19" label="Recovered" bg="#0eff00" border="#02ab0c"/>
    <Graph xAxis={key2} yAxis={value2} text="Covid-19" label="Deaths" bg="rgb(247,55,55)" border="#840000"/>
    </div>
    )
}

export default Chart