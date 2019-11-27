import React, { Component } from 'react';
function msToTime() {
  var s=document.getElementById("time-in-ms").value;
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60; 
  hrs=hrs<10 ? ("0"+hrs): hrs;
  mins=mins<10 ? ("0"+mins): mins;
  secs=secs<10 ? ("0"+secs): secs;
  document.getElementById("hours").innerHTML= hrs
  document.getElementById("minutes").innerHTML= mins;
  document.getElementById("secondes").innerHTML= secs;
}
class ReactTimer extends Component {
    
    render() { 
        
        return ( <div className="main-container">
                    <div className="inputDivision">
                        <label><h1>Pour commencer merci d'ecrire un nbr en millisecondes</h1></label>
                        <input id="time-in-ms" type="number" name="ms"  onKeyUp={msToTime}/>
                    </div>
                    <div className="main-container-output">
                        <div className="output">
                            <div className="output-flex"><span id="hours">00</span><span className="date-text">Hours</span></div>
                            <div className="output-flex"><span id="hours">:</span><span className="date-text">:</span></div>
                            <div className="output-flex"><span id="minutes">00</span><span className="date-text">Minutes</span></div>
                            <div className="output-flex"><span id="hours">:</span><span className="date-text">:</span></div>
                            <div className="output-flex"><span id="secondes">00</span><span className="date-text">Secondes</span></div>
                        </div>
                    </div>
                </div>
         );
    }
}
 
export default ReactTimer;