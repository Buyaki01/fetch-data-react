import React from 'react'

const AddForm = () => {
  return (
    <form className='mt-5'>
      <div>
        <label htmlFor="name"></label>
        <input 
          type="text"
          placeholder='Jane Doe'
        />
      </div> 
      <div>
        <label htmlFor="username"></label>
        <input 
          type="text"
        />
      </div>
      <div>
        <label htmlFor="email"></label>
        <input 
          type="email"
        />
      </div>
      <div>
        <label htmlFor="address"></label>
        <input 
          type="text"
        />
      </div>
    </form>
  )
}

export default AddForm