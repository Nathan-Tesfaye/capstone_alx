import React from 'react'
import Weather from './components/Weather'


const App = () => {
  return (
    <div className='sm:bg-slate-500 h-screen flex flex-col items-center justify-center bg-slate-500'>
      <Weather />
    </div>
  )
}

export default App