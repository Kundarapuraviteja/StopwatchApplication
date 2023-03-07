import React from 'react';



function DisplayComponent(props) {
  const h = () => {
     if(props.time.h === 0){
       return '';
     }else {
       return <span>{(props.time.h >= 10)? props.time.h : "0"+ props.time.h}</span>;
     }
  }

  
  return (

    <><div>
      {(props.status === 0) ?
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.start}>Start</button>

          <button className="stopwatch-btn stopwatch-btn-yel"
            disabled>Reset</button>

        </div> : ""}

      {(props.status === 1) ?
        <div>
          <button className="stopwatch-btn stopwatch-btn-red"
            onClick={props.stop}>Stop</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}>Reset</button>
        </div> : ""}

      {(props.status === 2) ?
        <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
            onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
            onClick={props.reset}>Reset</button>
        </div> : ""}

    </div>
    <div >

        {h()}&nbsp;&nbsp;
        <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
        <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;:&nbsp;
        <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>
      </div></>
    
  );
}

export default DisplayComponent;