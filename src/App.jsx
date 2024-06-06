// import './App.css'
import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'



function App() {
  const [puppies, setPuppies] = useState(puppyList) //adding puppyList to app
  console.log("puppyList",puppyList)
  const [featPupId, setFeatPupId] = useState(null) //creating view feature
  function handleClick() {
    // some logic here
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)


  return (
      <div className="App">
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{ setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p> //adding key when returning
          })
        }
      <div className="Puppies"> {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}</div>
      </div>
  )
}


export default App
