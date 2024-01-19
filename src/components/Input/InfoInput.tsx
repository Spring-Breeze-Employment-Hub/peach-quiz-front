import { useInput } from '@/hooks/useInput'
import React from 'react'

const InfoInput = ({
  placeholder,
  name,
}: {
  placeholder: string
  name: string
}) => {
  const { inputValue, onChangeEvent } = useInput()
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
      name={name}
      onChange={(e) => {
        onChangeEvent(e)
      }}
    />
  )
}

export default InfoInput
