import React from 'react'
import './style/SearchStyle.scss'
function Search() {
  return (
    <div className='bg-slate-400 -t-search-container w-full'>
      <div className='t-overlay'></div>
      <div className="-t-search-content">
         <span>search</span>
      </div>
    </div>
  )
}

export default Search