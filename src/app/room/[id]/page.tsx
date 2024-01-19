import React from 'react'

const RoomPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-500 text-white">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Quiz Challenge</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="User 1"
            className="rounded-full object-contain object-center"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: '100/100',
              objectFit: 'cover',
            }}
            width="100"
          />
          <h2 className="text-xl">Nickname 1</h2>
          <div className="bg-white text-black p-2 rounded-lg">
            <p>Speech bubble 1</p>
          </div>
          <div className="w-full max-w-md mt-6">
            <div className="flex items-center bg-white text-black rounded-lg shadow-md">
              <input
                className="w-full px-4 py-2 text-black rounded-l-lg focus:outline-none"
                placeholder="Type your message here..."
                type="text"
              />
              <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="User 2"
            className="rounded-full object-contain object-center"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: '100/100',
              objectFit: 'cover',
            }}
            width="100"
          />
          <h2 className="text-xl">Nickname 2</h2>
          <div className="bg-white text-black p-2 rounded-lg">
            <p>Speech bubble 2</p>
          </div>
          <div className="w-full max-w-md mt-6">
            <div className="flex items-center bg-white text-black rounded-lg shadow-md">
              <input
                className="w-full px-4 py-2 text-black rounded-l-lg focus:outline-none"
                placeholder="Type your message here..."
                type="text"
              />
              <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="User 3"
            className="rounded-full object-contain object-center"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: '100/100',
              objectFit: 'cover',
            }}
            width="100"
          />
          <h2 className="text-xl">Nickname 3</h2>
          <div className="bg-white text-black p-2 rounded-lg">
            <p>Speech bubble 3</p>
          </div>
          <div className="w-full max-w-md mt-6">
            <div className="flex items-center bg-white text-black rounded-lg shadow-md">
              <input
                className="w-full px-4 py-2 text-black rounded-l-lg focus:outline-none"
                placeholder="Type your message here..."
                type="text"
              />
              <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="User 4"
            className="rounded-full object-contain object-center"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: '100/100',
              objectFit: 'cover',
            }}
            width="100"
          />
          <h2 className="text-xl">Nickname 4</h2>
          <div className="bg-white text-black p-2 rounded-lg">
            <p>Speech bubble 4</p>
          </div>
          <div className="w-full max-w-md mt-6">
            <div className="flex items-center bg-white text-black rounded-lg shadow-md">
              <input
                className="w-full px-4 py-2 text-black rounded-l-lg focus:outline-none"
                placeholder="Type your message here..."
                type="text"
              />
              <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <img
            alt="User 5"
            className="rounded-full object-contain object-center"
            height="100"
            src="/placeholder.svg"
            style={{
              aspectRatio: '100/100',
              objectFit: 'cover',
            }}
            width="100"
          />
          <h2 className="text-xl">Nickname 5</h2>
          <div className="bg-white text-black p-2 rounded-lg">
            <p>Speech bubble 5</p>
          </div>
          <div className="w-full max-w-md mt-6">
            <div className="flex items-center bg-white text-black rounded-lg shadow-md">
              <input
                className="w-full px-4 py-2 text-black rounded-l-lg focus:outline-none"
                placeholder="Type your message here..."
                type="text"
              />
              <button className="px-4 py-2 bg-red-600 text-white font-bold rounded-r-lg hover:bg-red-700">
                Send
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default RoomPage
