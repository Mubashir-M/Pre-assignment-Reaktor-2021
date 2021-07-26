import React from 'react';
import { useDispatch } from 'react-redux';
import './Chapters.css'
import { searchUpdate, searchEmpty } from './features/searchSlice';

function Chapters({ chapterList }) {
  
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchUpdate(event.target.value))
  }

  const handleReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    dispatch(searchEmpty());
  }
  
  return (
    <div className = "chapters">
      <h1>Chapters</h1>
      <input placeholder="Search for rules..." onChange= {handleSearch}></input>
      <button onClick={handleReset}>Reset Search</button>
      <div className="chapters__list">
        {chapterList && chapterList.map((element, index) => {
          
          return <a className={element.chapter.slice(0,2).trim().includes('.') ? `chapters__heading` : null} href= {`#${element.chapter.slice(0,3).trim()}`} key = {index} onClick={handleReset}
            >{element.chapter}
            </a>
        })}
      </div>
    </div>
  );
}

export default Chapters;