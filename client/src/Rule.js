import React from 'react';
import './Rule.css'
import { useSelector } from 'react-redux';
import { selectText } from './features/searchSlice'

function Rule({ chapter }) {
  const searchResult = useSelector(selectText);


  return (
    <div className="rule">
      
      <div className="rule__single">
        
        {
          searchResult !== "" ?  (chapter.rules.filter((rule) => rule.toLowerCase().includes(searchResult.toLowerCase())).length !== 0) &&
            <h2 id = {`${chapter.chapter.slice(0,3).trim()}`} className={chapter.chapter.slice(0,2).trim().includes('.') ? `rule__heading` : null}>{chapter.chapter}</h2> 
           : <h2 id = {`${chapter.chapter.slice(0,3).trim()}`} className={chapter.chapter.slice(0,2).trim().includes('.') ? `rule__heading` : null}>{chapter.chapter}</h2> 
        }
        
        {chapter.rules.filter((rule) => rule.toLowerCase().includes(searchResult.toLowerCase())).map((rule,index) => {
          return <p key = {index}>{rule}</p>
        })}
      </div>
      
    </div>
  );
}

export default Rule;