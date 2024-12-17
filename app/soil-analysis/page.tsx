'use client'

import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/text-area"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2 } from 'lucide-react'

export default function SoilAnalysisPage() {
  const [formData, setFormData] = useState({
    fieldName: '',
    cropType: '',
    fieldSize: '',
    issues: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFeedback(null)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulated response
    const success = Math.random() > 0.5

    setIsSubmitting(false)
    if (success) {
      setFeedback({ type: 'success', message: 'Analysis request submitted successfully!' })
    } else {
      setFeedback({ type: 'error', message: 'There was an error submitting your request. Please try again.' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      
      <main className="container py-8">
        <div className="max-w-md space-y-6 pl-4">
          <div>
            <h1 className="text-4xl font-bold">Soil Analysis</h1>
            <p className="text-green-600 mt-2">Get started by providing basic field information</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fieldName">Field Name</Label>
              <Input
                id="fieldName"
                name="fieldName"
                value={formData.fieldName}
                onChange={handleChange}
                className="bg-green-50/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cropType">Crop Type</Label>
              <Input
                id="cropType"
                name="cropType"
                value={formData.cropType}
                onChange={handleChange}
                className="bg-green-50/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fieldSize">Field Size (Acres)</Label>
              <Input
                id="fieldSize"
                name="fieldSize"
                type="number"
                value={formData.fieldSize}
                onChange={handleChange}
                className="bg-green-50/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issues">Issues</Label>
              <Textarea
                id="issues"
                name="issues"
                value={formData.issues}
                onChange={handleChange}
                className="bg-green-50/50 min-h-[150px]"
                placeholder="Describe any issues or concerns with your field..."
              />
            </div>

            <div className="flex justify-end">
              <Button 
                type="submit"
                className="bg-green-600 hover:bg-green-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Get Recommendations'
                )}
              </Button>
            </div>
          </form>

          <AnimatePresence>
            {feedback && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`p-4 rounded-md ${
                  feedback.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {feedback.message}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}

