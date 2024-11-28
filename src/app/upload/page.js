"use client"

import Link from "next/link"
import React, { useState, useEffect } from "react"
import Image from 'next/image'
import { useEffect, useCallback } from 'react'

export default function Upload() {
  const [uploadedPhoto, setUploadedPhoto] = useState(null)
  const [showResults, setShowResults] = useState(false)
  const [selectedProfile, setSelectedProfile] = useState(null)

  useEffect(() => {
    const savedPhoto = localStorage.getItem('uploadedPhoto')
    if (savedPhoto) {
      setUploadedPhoto(savedPhoto)
    }
  }, [])

  const handlePhotoUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload a valid image file.')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64Image = reader.result
        setUploadedPhoto(base64Image)
        localStorage.setItem('uploadedPhoto', base64Image)
        setShowResults(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile)
  }

  const closeModal = () => {
    setSelectedProfile(null)
  }

  const handleOutsideClick = useCallback((e) => {
    if (selectedProfile && !e.target.closest('.modal-content')) {
      setSelectedProfile(null)
    }
  }, [selectedProfile])

  useEffect(() => {
    if (selectedProfile) {
      document.addEventListener('mousedown', handleOutsideClick)
    } else {
      document.removeEventListener('mousedown', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [selectedProfile, handleOutsideClick])

  if (showResults) {
    return (
      <div className="min-h-screen bg-[#1C1C1C] text-white">
        <div className="flex justify-between items-center p-4">
          <Image src="/Group 16.png" alt="Logo" width={99} height={38} />
          <button className="bg-[#DB4126] text-white px-6 py-2 rounded-full font-bold">
            Search
          </button>
        </div>

        <div className="px-4 py-8 max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-[36px] leading-[40px] font-bold mb-2">
              What we found for <br /> Denis
            </h1>
            <p className="text-white text-sm tracking-[0.64px]">
              <span className="underline"> WE HAVE NOT FOUND AN EXACT MATCH  </span><br /> BUT PLEASE REVIEW THE PROFILES WE FOUND SIMILAR
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2 md:gap-6">
            {Array(12).fill(null).map((_, index) => (
              <div
                key={index}
                className="aspect-square bg-[#393939] rounded md:rounded-[20px] relative overflow-hidden cursor-pointer"
                onClick={() => handleProfileClick({
                  name: "Steven",
                  age: 24,
                  image: uploadedPhoto || "/placeholder.svg?text=No+Image"
                })}
              >
                <Image
                  src={uploadedPhoto || "/placeholder.svg?text=No+Image"}
                  alt={`Profile ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="blur-sm"
                />
                <div className="absolute bottom-0 md:bottom-4 left-1 md:left-4">
                  <p className="text-white text-xs md:text-lg">
                    <span className="font-semibold text-black">Steven</span>
                    <span className="text-black">, 24</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProfile && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-5">
            <div className="modal-content bg-[#1C1C1C] rounded-lg max-w-[300px] w-full mx-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                <Image
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">{selectedProfile.name}, {selectedProfile.age}</h2>
                </div>

                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>Paris</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full bg-green-500"></div>
                    <span>Last online: yesterday</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span>Premium member</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>Joined: 12/18/2024</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="aspect-square relative overflow-hidden rounded-lg bg-gray-800">
                      <Image
                        src={selectedProfile.image}
                        alt={`Photo ${i}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  ))}
                </div>

                <button
                  onClick={closeModal}
                  className="mt-4 w-full bg-[#DB4126] text-white px-4 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen px-9 bg-[#1C1C1C] text-white flex flex-col items-center justify-center">
      <Image
        className="absolute top-5 left-5"
        src="/Group 16.png"
        alt="Logo"
        width={99}
        height={38}
      />

      <div className="text-center text-[#FFF6E8]">
        <h1 className="text-[32px] tracking-[0.64px] leading-[32px] font-bold">
          LET'S FIND <br />
          <span className="text-[48px] tracking-[0.64px] leading-[48px] font-bold">
            KEVIN
          </span>
        </h1>

        <div className="mt-8 bg-[#353535] rounded-lg p-6 space-y-3 w-[329px] pb-[100px]">
          <h3 className="block uppercase text-[20px] font-bold leading-[32px] tracking-[0.64px]">
            What do they look like?
          </h3>
          <p className="text-[12px] gotham-rounded font-medium leading-[14px] pb-6">
            Add a clear picture, with the face visible and no other person on
            the picture. Very IMPORTANT the picture quality should be good and
            the face visible.
          </p>

          <label className="mt-5 w-full flex items-center gap-5 justify-center py-3 bg-[#1C1C1C] rounded-lg uppercase font-medium text-[12px] gotham-rounded cursor-pointer hover:bg-[#252525] transition-colors">
            Upload a photo
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>

          {uploadedPhoto && (
            <div className="mt-4">
              <Image
                src={uploadedPhoto}
                alt="Uploaded photo"
                width={300}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="mt-12 fixed bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 flex w-full px-4 md:px-9 justify-between gap-6">
          <Link
            href="/location"
            className="bg-[#EDECFB] flex items-center pt-1.5 justify-center w-[90px] text-[24px] gap-1 text-[#3B42C4] rounded-lg tracking-[0.64px] font-bold"
          >
            <Image src="/previous.svg" width={24} height={24} alt="Previous" className="-mt-1.5" /> BACK
          </Link>

          <Link
            href="/upload"
            className={`bg-[#FFCCDE] flex items-center pt-1.5 justify-center gap-1 text-[#DB4126] w-[106px] rounded-lg tracking-[0.64px] text-[24px] font-bold ${!uploadedPhoto ? 'opacity-50' : 'hover:opacity-90'} transition duration-300`}
          >
            NEXT <Image src="/next.svg" width={24} height={24} alt="Next" className="-mt-1.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

