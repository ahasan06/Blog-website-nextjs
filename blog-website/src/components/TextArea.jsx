import React from 'react'

function TextArea({type,value,onChange,name,label,placeholder}) {
  return (
    <div className='space-y-1'>
      <label className="text-red-950 font-semibold">{label}</label>
      <textarea 
       name={name}
       type={type}
       value={value}
       onChange={onChange}
       placeholder={placeholder}
       className="w-full p-3 pr-7 rounded bg-white border-l-2 border-accent focus:outline-none max-h-40"
      />
    </div>
  )
}

export default TextArea
