import React from 'react'

const AddForm = ({handleSubmit, name, setName, username, setUsername, email, setEmail, phone, setPhone, website, setWebsite, street, setStreet, suite, setSuite, city, setCity, zipcode, setZipcode, lat, setLat, lng, setLng, companyName, setCompanyName, catchPhrase, setCatchPhrase, bs, setBs}) => {
  return (
    <form onSubmit={handleSubmit} className='mt-5 text-center'>
      <h2 className='text-4xl'> Personal Information </h2>
      <div>
        <label htmlFor="name" className='hidden'></label>
        <input
          className='border border-slate-700 p-3 mt-5 mb-5' 
          type="text"
          placeholder='Enter your First and Last Name'
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div> 

      <div>
        <label htmlFor="username" className='hidden'></label>
        <input 
          className='border border-slate-700 p-3 mt-5 mb-5'
          type="text"
          placeholder='Username'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email" className='hidden'></label>
        <input 
          className='border border-slate-700 p-3 mt-5 mb-5'
          type="email"
          placeholder='email'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="phone" className='hidden'></label>
        <input
          className='border border-slate-500 p-3 mt-5 mb-5'
          type="tel"
          placeholder='Phone Number'
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="website" className='hidden'></label>
        <input
          className='border border-slate-500 p-3 mt-5 mb-5'
          type="text"
          placeholder='Website'
          required
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
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
            required
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="suite" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='suite'
            required
            value={suite}
            onChange={(e) => setSuite(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="city" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='city'
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="zipcode" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='zipcode'
            required
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
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
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lng" className='hidden'></label>
            <input 
              className='border border-slate-500 p-3 mt-5 mb-5'
              type="text"
              placeholder='Longitude'
              value={lng}
              onChange={(e) => setLng(e.target.value)}
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
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="catchPhrase" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='Catch Phrase'
            value={catchPhrase}
            onChange={(e) => setCatchPhrase(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="bs" className='hidden'></label>
          <input 
            className='border border-slate-500 p-3 mt-5 mb-5'
            type="text"
            placeholder='bs'
            value={bs}
            onChange={(e) => setBs(e.target.value)}
          />
        </div>

        <div>
          <button type="submit" className='border border-blue-500 p-3 mt-5 mb-5 rounded'>
            Submit
          </button>
        </div>

      </div>

    </form>
  )
}

export default AddForm