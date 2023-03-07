import React from 'react'

const TableList = ({items}) => {
  return (
    <table className='p-3 border-2 border-solid border-black-500'>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            {Object.entries(item).map(([key, value]) => {
              return(
                <td className='p-3 border-2 border-solid border-black-500'>{JSON.stringify(value)}</td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TableList