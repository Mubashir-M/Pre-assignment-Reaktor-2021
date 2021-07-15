import React, { useEffect } from 'react';

function Parser({ text }) {
  useEffect(() => {
    const iterateLines = () => {
      var index = 0;
      //var length= text.length;
      while (!text[index].includes('Contents')){
        index++;
      }
  
        while (!text[index].includes('Glossary')){
          console.log(text[index]);
          index++;
        }
      /*while (index < length){
        
        console.log()
      }*/
    
    }
    iterateLines();
  },[text])
  return (
    <div>
      
    </div>
  );
}

export default Parser;