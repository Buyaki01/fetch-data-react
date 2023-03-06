import React from 'react'

const UserTable = ({items}) => {
  return (
    <table className='p-3 border-2 border-solid border-black-500'>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className='p-3 border-2 border-solid border-black-500'>{item.id}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.name}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.username}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.email}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.address?.street}, {item.address?.suite}, {item.address?.city}, {item.address?.zipcode}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.phone}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.website}</td>
            <td className='p-3 border-2 border-solid border-black-500'>{item.company?.name}</td>
          </tr>
        ))}
      </tbody> 
    </table>
  )
}

export default UserTable