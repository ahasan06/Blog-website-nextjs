import React from 'react'

function Select({label,name,options,onChange}) {
  return (
    <div className='space-y-1'>
      <label className="text-red-950 font-semibold">{label}</label>
       <select
        name={name}
        onChange={onChange}
        className='block md:w-full w-3/4 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-opacity-50'
       >
        <option value="" className='font-bold text-gray-700'>{label}</option>
        {
             options.map((option)=>(
                <option key={option} value={option} className='bg-red-50 font-semibold text-red-900 '>
                 {option.toUpperCase()}
                </option>
             ))
        }
      </select>
    </div>
  )
}

export default Select
