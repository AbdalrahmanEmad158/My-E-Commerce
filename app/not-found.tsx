'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-green-50 px-4">
      <div className="text-center max-w-md w-full">
        
        {/* Card */}
        <div className="relative bg-white rounded-2xl shadow-lg p-8">
          
          {/* 404 badge */}
          <div className="absolute -top-6 right-6 bg-green-500 text-white text-lg font-bold px-4 py-2 rounded-full shadow">
            404
          </div>

          {/* Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto bg-green-100 rounded-xl flex items-center justify-center">
              🛒
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Oops! Nothing Here
          </h1>

          {/* Description */}
          <p className="text-gray-500 mb-6">
            Looks like this page went out of stock! Don't worry,
            there's plenty more fresh content to explore.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push('/')}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow transition"
            >
              Go to Homepage
            </button>

            <button
              onClick={() => router.back()}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-lg shadow transition"
            >
              Go Back
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}