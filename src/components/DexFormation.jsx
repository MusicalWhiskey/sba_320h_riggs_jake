import React from 'react'

export default function DexFormation({ gotoNextPage, gotoPrevPage }) {
  return (
    <div>
      {gotoPrevPage && <button className='botton_prev' onClick={gotoPrevPage}>Back</button>}
      {gotoNextPage && <button className='botton_next' onClick={gotoNextPage}>Next</button>}
    </div>
  )
}