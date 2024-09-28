import React from 'react'
import Actor from './Actor';

export default function App() {
  const actor = ["Saharukh", "Salman", "Akshay", "Amir", "Ranvir", "Arbaz", "Sohail"];
  const style="border-2 border-purple-700 rounded-2xl m-1 p-3"
  return (
    <div className='flex flex-col items-center mt-10'>

      <Actor name="Amitab" age={35} />
      {
        actor.map(hero => (<Actor name={hero} age={45} style={style } />))
      }

    </div>
  )
}


