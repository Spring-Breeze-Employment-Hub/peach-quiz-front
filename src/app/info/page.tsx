'use client'
import InfoButton from '@/components/Button/InfoButton'
import InfoInput from '@/components/Input/InfoInput'
import React from 'react'

const InfoPage = () => {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <div className="rounded-md shadow-sm -space-y-px">
        <div className="my-3 flex flex-col items-center">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Photo
          </label>
          <div className="w-24 h-24 mt-2 mb-4 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <input
              className="flex rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full h-full opacity-0 cursor-pointer"
              id="photo"
              type="file"
              name="photo"
            />
          </div>
        </div>
        <div className="my-3">
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Nickname
          </label>
          <InfoInput placeholder="Nickname" name="nickname" />
        </div>
      </div>
      <div>
        <InfoButton buttonText="게임하러 가기!" />
      </div>
    </form>
  )
}

export default InfoPage
