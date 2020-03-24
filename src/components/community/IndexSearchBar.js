import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
// import axios from 'axios'

export default function IndexSearchBar(query, pageNumber) {
  // useEffect(() => {
  //   axios(
  //     method:'GET',
  //     url: 'http://openlibrary.org/search.json',
  //   )
  // }, [query, pageNumber])
  return (
    <>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          style={{
            display: 'block',
            borderRadius: '25px',
            border: '2px solid #79cee2',
            width: '500px',

            padding: '5px 60px',
            margin: '10px auto',
          }}
          placeholder="搜尋"
        />
        <AiOutlineSearch
          style={{
            position: 'absolute',
            fontSize: '25px',
            top: '20%',
            left: '30%',
            color: '#79cee2',
          }}
        />
      </div>
    </>
  )
}
