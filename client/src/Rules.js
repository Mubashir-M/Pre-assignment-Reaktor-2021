import React from 'react';
import './Rules.css'
import Rule from './Rule';


function Rules( { chapterArray }) {
  
 

  return (
    <div className = "rules">

      <div className="rules__body">
        <h1>Rules</h1>
        <div className="rules__list">
          { chapterArray && chapterArray.map((chapter, index) => {
            return <Rule key = {index} chapter = {chapter} />
          })} 
      </div>
      </div>
      
    </div>
  );
}

export default Rules;