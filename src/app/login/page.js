"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export default function SignUpForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    try {
      // Here you would typically make an API call to register the user
      // For this example, we'll simulate a successful registration
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Simulate login after successful registration
      // In a real application, you'd make another API call here
      await new Promise(resolve => setTimeout(resolve, 500))

      // Redirect to the payment page
      router.push("/proceed-the-payment")
    } catch (err) {
      setError("An error occurred during sign up. Please try again.")
    }
  }

  const isFormValid =
    formData.email &&
    formData.password &&
    formData.password === formData.confirmPassword

  return (
    <div className="px-4 bg-[#1C1C1C] text-white pb-10 pt-5 flex flex-col items-center justify-center">
      {/* Logo Section */}
      <div className="mb-8 flex items-start w-full">
        <img
          src="/Group 16.png"
          alt="Logo"
          className="h-8"
        />
      </div>

      {/* Content Section */}
      <div className="w-full max-w-sm">
        <h1 className="text-[32px] text-center pb-10 tracking-[0.64px] leading-[32px] font-bold uppercase">
          Sign up to get <br />
          <span className="text-[48px] tracking-[0.64px] leading-[48px] font-bold">
            your result
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-white text-[#9CA3AF] border border-[#3758F9] font-sans text-[16px] leading-[24px] font-normal outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-white text-[#9CA3AF] border border-[#3758F9] font-sans text-[16px] leading-[24px] font-normal outline-none"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-lg bg-white text-[#9CA3AF] border border-[#3758F9] font-sans text-[16px] leading-[24px] font-normal outline-none"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={!isFormValid}
            className="w-full py-3 rounded-lg bg-[#DB4126] text-white font-semibold hover:bg-[#c13820] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Sign up
          </button>
        </form>

        <div className="mt-6 flex justify-center space-x-4">
          <Link href='/'>
            <Image src='/facebook.svg' alt="facebook" width={74} height={45} />
          </Link>
          <Link href='/'>
            <Image src='/twitter.svg' alt="twitter" width={86} height={45} />
          </Link>
          <Link href='/'>
            <Image src='/google.svg' alt="google" width={79} height={45} />
          </Link>

        </div>

        <div className="mt-6 text-center text-sm">
          <span className="text-[#8899A8] text-[16px] font-normal font-sans">Already an account? </span>
          <Link href="/login" className="text-[#0078E2] font-semibold font-sans text-[16px]">
            Log In
          </Link>
        </div>
      </div>
    </div>
  )
}

