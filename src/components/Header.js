import React,{useState} from 'react'
import Search from './Search.js'
const Header = () => {
  const[text,setText]=useState("Search")
  const setSearch=(e)=>{
    setText(e.target.value)
  }
  return (
    <>
     <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">NoteBook</h1>
          <Search clickEvent={setSearch} text={text}/>
          <h4 className="text-gray-200 font-bold">Searching for:{text}</h4>
        </div>
      </header>
    </>
  )
}

export default Header