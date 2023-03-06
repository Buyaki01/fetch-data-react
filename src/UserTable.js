import React from 'react'

const UserTable = ({items}) => {
  return (
    <table className='border-2 border-solid border-black-500'>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.company.name}</td>
          </tr>
        ))}
      </tbody> 
    </table>
  )
}

export default UserTable