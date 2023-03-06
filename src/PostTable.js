import React from 'react'

const PostTable = ({items}) => {
  return (
    <table className='p-3 border-2 border-solid border-black-500'>
        <tbody>
          {items.map(item => (
            <tr className='border-2 border-solid border-black-500' key={item.id}>
              <td className='p-3 border-2 border-solid border-black-500'>{item.userId}</td>
              <td className='p-3 border-2 border-solid border-black-500'>{item.id}</td>
              <td className='p-3 border-2 border-solid border-black-500'>{item.title}</td>
              <td className='p-3 border-2 border-solid border-black-500'>{item.body}</td>
            </tr>
          ))}
      </tbody>
        
      </table>
  )
}

export default PostTable