"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type React from "react"
import { useState, type FormEvent } from "react"

interface FormData {
  name: string
  phone: string
  email: string
  message: string
}

interface ContactFormProps {
  formType?: "operator" | "feedback" | "driver"
}

export default function ContactForm({ formType = "operator" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('https://axpergroup.com/api/v1/contact-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          form_type: formType
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setSubmitted(true)
      setFormData({ name: "", phone: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
   <div className="flex items-start justify-center md:justify-start w-full">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3 sm:space-y-4 px-2 sm:px-0">
              <Input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white border-gray-300 h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              />
              <Input
                type="tel"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white border-gray-300 h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              />
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-white border-gray-300 h-10 sm:h-11 md:h-12 text-sm sm:text-base"
              />
              <Textarea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-white border-gray-300 min-h-[100px] sm:min-h-[110px] md:min-h-[120px] resize-none text-sm sm:text-base"
              />
              {submitted && (
                <div className="p-2 sm:p-3 bg-green-100 text-green-800 rounded text-sm sm:text-base">
                  ✓ Message sent successfully! We will contact you soon.
                </div>
              )}
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy-consent-form"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-[#2c3e50] border-gray-300 rounded focus:ring-[#2c3e50]"
                  required
                />
                <label htmlFor="privacy-consent-form" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  I acknowledge that I have read and understand the{" "}
                  <a 
                    href="/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#2c3e50] underline hover:text-[#1e2b3a]"
                  >
                    Privacy Policy & SMS Terms
                  </a>{" "}
                  of Axper, LLC, and I consent to receive SMS messages regarding my application. Reply STOP to opt out at any time.
                </label>
              </div>
              <Button
                type="submit"
                disabled={isLoading || !agreedToTerms}
                className="w-full bg-[#2c3e50] hover:bg-[#1e2b3a] text-white px-6 sm:px-8 h-10 sm:h-11 md:h-12 rounded-full disabled:opacity-50 text-sm sm:text-base font-medium"
              >
                {isLoading ? 'Sending...' : 'Submit'}
              </Button>
            </form>
          </div> 
  )
}
