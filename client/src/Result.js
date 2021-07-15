import React from 'react';
import './Result.css'
import Rule from './Rule';


function Result( { chapterArray }) {
  
 

  return (
    <div className = "results">

      <div className="results__body">
        <h1>Rules</h1>
        <div className="results__list">
          { chapterArray && chapterArray.map((chapter, index) => {
            return <Rule key = {index} chapter = {chapter} />
          })} 
      </div>
      </div>
      
    </div>
  );
}

export default Result;