import React from 'react';
import { useDispatch } from 'react-redux';
import './Chapters.css'
import { searchUpdate } from './features/searchSlice';

function Chapters({ chapterList }) {
  
  const dispatch = useDispatch();
  const handleSearch = (event) => {
    event.preventDefault();

    // update redux state on change and see state changes in the browser redux tools
    dispatch(searchUpdate(event.target.value))

  }

  return (
    <div className = "chapters">
      <h1>Chapters</h1>
      <input placeholder="Search for rules..." onChange= {handleSearch}></input>
      <div className="chapters__list">
        {chapterList && chapterList.map((element, index) => {
          
          return <a className={element.chapter.slice(0,2).trim().includes('.') && `chapters__heading`} href= {`#${element.chapter.slice(0,3).trim()}`} key = {index}>{element.chapter}</a>
        })}
      </div>
    </div>
  );
}

export default Chapters;