import React from 'react';
import './Rule.css'
import { useSelector } from 'react-redux';
import { selectText } from './features/searchSlice'

function Rule({ chapter }) {
  const searchResult = useSelector(selectText);
  // make sure that the chapters that do not contain rules with searched words are not displayed
  return (
    <div className="rule">
      
      <div className="rule__single">
        <h2 id = {`${chapter.chapter.slice(0,3).trim()}`} >{chapter.chapter}</h2>
        {chapter.rules.filter((rule) => rule.toLowerCase().includes(searchResult.toLowerCase())).map((rule,index) => {
          return <p key = {index}>{rule}</p>
        })}
      </div>
      
    </div>
  );
}

export default Rule;