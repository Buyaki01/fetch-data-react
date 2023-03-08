import React from 'react'

const AddForm = () => {
  return (
    <form className='mt-5 text-center'>
      <h2 className='text-4xl'> Personal Information </h2>
      <div>
        <label htmlFor="name" className='hidden'></label>
        <input
          className='border border-slate-500 p-3 mt-5 mb-5' 
          type="text"
          placeholder='Enter your First and Last Name'
        />
      </div> 

      <div>
        <label htmlFor="username" className='hidden'></label>
        <input 
          className='border border-slate-500 p-3 mt-5 mb-5'
          type="text"
          placeholder='Username'
        />
      </div>

      <div>
        <label htmlFor="email" className='hidden'></label>
        <input 
          className='border border-slate-500 p-3 mt-5 mb-5'
          type="email"
          placeholder='email'
        />
      </div>

      <div>
        <label htmlFor="phone" className='hidden'></label>
        <input
          className='border border-slate-500 p-3 mt-5 mb-5'
          type="number"
          placeholder='Phone Number'
        />
      </div>

      <div>
        <label htmlFor="website" className='hidden'></label>
        <input
          className='border border-slate-500 p-3 mt-5 mb-5'
          type="text"
          placeholder='Website'
        />
      </div>
     
      <div>
        <h3 className='text-2xl'> Address Details </h3>
        <div>
          <label htmlFor="street" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='street'
          />
        </div>
        <div>
          <label htmlFor="suite" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='suite'
          />
        </div>
        <div>
          <label htmlFor="city" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='city'
          />
        </div>
        <div>
          <label htmlFor="zipcode" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='zipcode'
          />
        </div>
        <div>
          <label htmlFor="suite" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='suite'
          />
        </div>

        <div>
          <h3 className='text-2xl'>Geographic details</h3>

          <div>
            <label htmlFor="lat" className='hidden'></label>
            <input 
              className='border border-slate-500 p-3 mt-5 mb-5'
              type="text"
              placeholder='Latitude'
            />
          </div>

          <div>
            <label htmlFor="lng" className='hidden'></label>
            <input 
              className='border border-slate-500 p-3 mt-5 mb-5'
              type="text"
              placeholder='Longitude'
            />
          </div>

        </div>
      </div>

      <div>
        <h3 className='text-2xl'> Company Details</h3>
        <div>
          <label htmlFor="company-name" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='Company Name'
          />
        </div>

        <div>
          <label htmlFor="catchPhrase" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='Catch Phrase'
          />
        </div>

        <div>
          <label htmlFor="bs" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='bs'
          />
        </div>

      </div>

    </form>
  )
}

export default AddForm