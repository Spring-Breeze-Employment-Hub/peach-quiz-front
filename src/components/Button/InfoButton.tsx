import { useNicknameStore } from '@/store/userInfoStore'
import Link from 'next/link'
import React from 'react'

const InfoButton = ({ buttonText }: { buttonText: string }) => {
  const { nickname, image } = useNicknameStore()
  const isEnabled = nickname.length > 0 && image.length > 0
  return (
    <button
      className={`items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${isEnabled ? 'bg-indigo-500' : 'bg-indigo-600'} hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white`}
      type="submit"
      disabled={!isEnabled}
    >
      <Link href={'/info'}>{buttonText}</Link>
    </button>
  )
}

export default InfoButton
