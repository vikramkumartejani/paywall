"use client"

import Link from "next/link"
import React, { useState, useEffect } from "react"
import Image from 'next/image'

export default function AgePage() {
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
          <div className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50 p-5" >
            <div className=" rounded-lg max-w-[300px] w-full mx-4" style={{ background: "linear-gradient(180.04deg, rgba(115, 115, 115, 0) 40.01%, #181818 64.88%)" }}>
              <div className="relative w-full overflow-hidden rounded-t-lg">
                <Image
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  objectFit="cover"
                  width={500}
                  height={300}
                  className="w-[300px] md:w-[500px] h-[200px]"
                />
                <div className="flex items-center justify-between absolute bottom-2 left-2">
                  <h2 className="text-2xl font-bold">{selectedProfile.name}, {selectedProfile.age}</h2>
                </div>
              </div>

              <div className="p-4 pb-10">
                <div className="flex items-start flex-col gap-4 text-white">
                    <h2 className="text-[15px] leading-[15px] tracking-[0.64px] font-bold">📍 Paris</h2>
                    <h2 className="text-[15px] leading-[15px] tracking-[0.64px] font-bold">🟢 Last online : yesterday</h2>
                    <h2 className="text-[15px] leading-[15px] tracking-[0.64px] font-bold">⭐️ is premium? yes</h2>
                    <h2 className="text-[15px] leading-[15px] tracking-[0.64px] font-bold">📝 When joined? 12/10/2024</h2>
                </div>
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

