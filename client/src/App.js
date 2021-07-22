import React, { useEffect, useState } from 'react';
import './App.css';
import Chapters from './Chapters';
import Rules from './Rules';

function App() {
  
  const [text , setText] = useState([]);
  const [rulesArray, setRulesArray] = useState([{ chapter:"", chapterNum:"", rules:[]}]);


  useEffect(() => {
    const fetchRules = async() => {
      let response = await fetch('http://localhost:3000/');
      response = await response.json();
      setText(response.split("\n"));
    }
    fetchRules();
  },[])

  useEffect(() => {
    const iterateLines = () => {
      const set = [];
      let index = 0;
      
     
      if (text[index]){
        // Adding table of contents to the set as chapters
        while (!text[index].includes('Contents')){
          index++;
        }
        index++;
        while (!text?.[index].includes('Glossary')){
          if (text[index] !== '\r') set.push({ chapter: text[index], chapterNum: text[index].slice(0,3).trim() , rules: []});
          index++;
        }
       while (!text[index].includes('1. Game Concepts')){
          index++;
        }

        // Adding extra chapter to the end as set_Index+1 below could be out of bounds.
        set.push({ chapter: "End", chapterNum: null , rules: []});
        index++;
        let set_Index = 0;
        const length = set.length-1;

        // Traversing chapters in set and adding rules to corresponding chapters.
        while (!text?.[index].includes('Glossary')){
          if (text[index] !== '\r') {
            let line = text[index].slice(0,3).trim();
            
            if (set_Index < length && line !==  set[set_Index+1].chapterNum) {
              set[set_Index].rules.push(text[index]);
            } else {
              if (set_Index < length) set_Index++;
            }
          }
          index++;
        }
        // Popping out the extra.
        set.pop();
        setRulesArray(set);
      }
      
    }
   
    iterateLines();
   
  },[text])
  
console.log(rulesArray);
  return (
    <div className="app">
      <div className="app__left">
        <Chapters chapterList = {rulesArray}/>
      </div>
      <div className="app__right">
        <Rules chapterArray = {rulesArray} />
      </div>
      
      
      
    </div>
  );
}

export default App;
