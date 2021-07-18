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
        index++;
      
        let index2 = 0;
        while (!text?.[index].includes('Glossary')){
         
          if (text[index] !== '\r') {
          
            let line = text[index].slice(0,3).trim();
            if (index2 === 24) console.log(text[index])

            if (index2 < 141 && line !==  set[index2+1].chapterNum) {
              set[index2].rules.push(text[index]);
            } else {
              if (index2 < 141) index2++;
            }

          }

          index++;
        }
        
  
        setRulesArray(set);
      }
      
    
    
    }
   
    iterateLines();
   

  },[text])
  
  console.log(rulesArray)
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
