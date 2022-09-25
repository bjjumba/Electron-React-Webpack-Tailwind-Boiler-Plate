import React,{useEffect,useState} from 'react'
import axios from 'axios'


const Sample = () => {
const[data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://contactapinode.herokuapp.com/contact").then((response)=>{
      setData(response.data)
      console.log(response);
    })
  })
  return (
    
    <div>
      { JSON.stringify(data)}
      Sample</div>
  )
}

export default Sample