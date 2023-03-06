import React from 'react'

const PostTable = ({items}) => {
  return (
    <table className='border-2 border-solid border-black-500'>
        <tbody>
          {items.map(item => (
            <tr className='border-2 border-solid border-black-500' key={item.id}>
              <td>{item.userId}</td>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
      </tbody>
        
      </table>
  )
}

export default PostTable