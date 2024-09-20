/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Todo = () => {
  return (
    <>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="px-6 py-4">Egusi Soup</td>
              <td className="px-6 py-4">Egusi seed, Bitter Leaf, Nziza Seed, Salt, Maggi, Fish, Black pepper</td>
              <td className="px-6 py-4">Pending</td>
              <td className="px-6 py-4 flex items-center justify-center gap-1">
                <button className='py-2 px-4 bg-red-500 text-white rounded-md'>Delete</button>
                <button className='py-2 px-4 bg-green-500 text-white rounded-md'>Done</button>
              </td>
            </tr>
    </>
  )
}

export default Todo