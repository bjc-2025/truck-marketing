"use client"

import { useState, useCallback, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  Truck,
  Loader2,
} from "lucide-react"

// Constants moved outside component
const SERVICES = [
  "Trucking SEO",
  "Lead Generation", 
  "Website Development",
  "PPC Advertising",
  "Brand Strategy",
  "Performance Analytics",
  "Full Marketing Package"
] as const

const FLEET_SIZES = [
  "1-5 vehicles",
  "6-20 vehicles", 
  "21-50 vehicles",
  "50+ vehicles",
  "Freight broker",
  "Other logistics service"
] as const

// Type definitions
type SubmitStatus = "idle" | "success" | "error"
type Service = typeof SERVICES[number]
type FleetSize = typeof FLEET_SIZES[number]

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: Service | ""
  fleetSize: FleetSize | ""
  message: string
  newsletter: boolean
}

// FormErrors should be a partial of FormData for type safety
type FormErrors = Partial<Record<keyof FormData, string>>

interface ContactInfo {
  phone: string
  email: string
  responseTime: string
}

interface ContactFormProps {
  title?: string
  description?: string
  showContactInfo?: boolean
  variant?: "default" | "sidebar" | "inline"
  contactInfo?: ContactInfo
}

// Default contact information
const DEFAULT_CONTACT_INFO: ContactInfo = {
  phone: "0491 999 011",
  email: "hello@truckmarketing.com",
  responseTime: "Within 2 business hours"
}

// Validation function
const validateForm = (data: FormData): FormErrors => {
  const errors: FormErrors = {}
  
  if (!data.name.trim()) {
    errors.name = "Name is required"
  }
  
  if (!data.email.trim()) {
    errors.email = "Email is required"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address"
  }
  
  if (!data.company.trim()) {
    errors.company = "Company name is required"
  }
  
  if (data.phone && !/^[\d\s\-\(\)\+]+$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number"
  }
  
  return errors
}

// Contact Info Component
const ContactInfoSection: React.FC<{ contactInfo: ContactInfo }> = ({ contactInfo }) => (
  <div className="space-y-6">
    <div>
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Truck className="h-5 w-5 text-primary" />
        Let&apos;s Drive Results Together
      </h3>
      <p className="text-muted-foreground mb-6">
        Ready to accelerate your trucking business? Our marketing specialists are standing by to help.
      </p>
    </div>
    
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Phone className="h-4 w-4 text-primary" />
        </div>
        <div>
          <div className="font-medium">Call Us</div>
          <div className="text-sm text-muted-foreground">{contactInfo.phone}</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Mail className="h-4 w-4 text-primary" />
        </div>
        <div>
          <div className="font-medium">Email Us</div>
          <div className="text-sm text-muted-foreground">{contactInfo.email}</div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Clock className="h-4 w-4 text-primary" />
        </div>
        <div>
          <div className="font-medium">Response Time</div>
          <div className="text-sm text-muted-foreground">{contactInfo.responseTime}</div>
        </div>
      </div>
    </div>
    
    <div className="bg-truck-orange-50 border border-truck-orange-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <CheckCircle className="h-4 w-4 text-truck-orange-600" />
        <span className="font-medium text-truck-orange-800">Free Consultation Includes:</span>
      </div>
      <ul className="text-sm text-truck-orange-700 space-y-1">
        <li>• Marketing performance audit</li>
        <li>• Growth opportunity analysis</li>
        <li>• Custom strategy recommendations</li>
      </ul>
    </div>
  </div>
)

// Form Component
const FormContent: React.FC<{
  formData: FormData
  formErrors: FormErrors
  isSubmitting: boolean
  submitStatus: SubmitStatus
  errorMessage: string
  onSubmit: (e: React.FormEvent) => void
  onInputChange: (field: keyof FormData, value: string | boolean) => void
  onBlur: (field: keyof FormData) => void
}> = ({ 
  formData, 
  formErrors,
  isSubmitting, 
  submitStatus, 
  errorMessage,
  onSubmit, 
  onInputChange,
  onBlur
}) => (
  <form onSubmit={onSubmit} className="space-y-6" noValidate>
    {/* Success Message */}
    {submitStatus === "success" && (
      <div className="bg-truck-orange-50 border border-truck-orange-200 rounded-lg p-4" role="alert">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-truck-orange-600" />
          <span className="font-medium text-truck-orange-800">
            Thank you! We&apos;ll be in touch within 2 business hours.
          </span>
        </div>
      </div>
    )}
    
    {/* Error Message */}
    {submitStatus === "error" && (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4" role="alert">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <span className="font-medium text-red-800">
            {errorMessage || "Something went wrong. Please try again or call us directly."}
          </span>
        </div>
      </div>
    )}
    
    {/* Form Fields */}
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => onInputChange("name", e.target.value)}
          onBlur={() => onBlur("name")}
          placeholder="John Smith"
          required
          aria-invalid={!!formErrors.name}
          aria-describedby={formErrors.name ? "name-error" : undefined}
          disabled={isSubmitting}
        />
        {formErrors.name && (
          <p id="name-error" className="text-sm text-red-600">{formErrors.name}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => onInputChange("email", e.target.value)}
          onBlur={() => onBlur("email")}
          placeholder="john@company.com"
          required
          aria-invalid={!!formErrors.email}
          aria-describedby={formErrors.email ? "email-error" : undefined}
          disabled={isSubmitting}
        />
        {formErrors.email && (
          <p id="email-error" className="text-sm text-red-600">{formErrors.email}</p>
        )}
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => onInputChange("phone", e.target.value)}
          onBlur={() => onBlur("phone")}
          placeholder="(555) 123-4567"
          aria-invalid={!!formErrors.phone}
          aria-describedby={formErrors.phone ? "phone-error" : undefined}
          disabled={isSubmitting}
        />
        {formErrors.phone && (
          <p id="phone-error" className="text-sm text-red-600">{formErrors.phone}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="company">Company Name *</Label>
        <Input
          id="company"
          value={formData.company}
          onChange={(e) => onInputChange("company", e.target.value)}
          onBlur={() => onBlur("company")}
          placeholder="ABC Trucking Co."
          required
          aria-invalid={!!formErrors.company}
          aria-describedby={formErrors.company ? "company-error" : undefined}
          disabled={isSubmitting}
        />
        {formErrors.company && (
          <p id="company-error" className="text-sm text-red-600">{formErrors.company}</p>
        )}
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="service">Service Interest</Label>
        <Select 
          onValueChange={(value) => onInputChange("service", value)}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="fleetSize">Fleet Size</Label>
        <Select 
          onValueChange={(value) => onInputChange("fleetSize", value)}
          disabled={isSubmitting}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select fleet size" />
          </SelectTrigger>
          <SelectContent>
            {FLEET_SIZES.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="message">Tell us about your marketing goals</Label>
      <Textarea
        id="message"
        value={formData.message}
        onChange={(e) => onInputChange("message", e.target.value)}
        placeholder="What marketing challenges are you facing? What results are you looking to achieve?"
        rows={4}
        disabled={isSubmitting}
      />
    </div>
    
    <div className="flex items-center space-x-2">
      <Checkbox
        id="newsletter"
        checked={formData.newsletter}
        onCheckedChange={(checked) => onInputChange("newsletter", !!checked)}
        disabled={isSubmitting}
      />
      <Label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
        Subscribe to trucking marketing insights and industry updates
      </Label>
    </div>
    
    <Button 
      type="submit" 
      size="lg" 
      className="w-full btn-truck-orange text-lg py-6 h-auto"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Get My Free Strategy Session
          <Send className="ml-2 h-5 w-5" />
        </>
      )}
    </Button>
    
    <p className="text-xs text-center text-muted-foreground">
      By submitting this form, you agree to our privacy policy. We&apos;ll never spam you.
    </p>
  </form>
)

// Main Component
export function ContactForm({ 
  title = "Get Your Free Marketing Strategy Session",
  description = "Tell us about your trucking business and we'll show you how to accelerate your growth.",
  showContactInfo = true,
  variant = "default",
  contactInfo = DEFAULT_CONTACT_INFO
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    fleetSize: "",
    message: "",
    newsletter: false
  })
  
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [touchedFields, setTouchedFields] = useState<Set<keyof FormData>>(new Set())
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Validate single field
  const validateField = useCallback((field: keyof FormData) => {
    const errors = validateForm(formData)
    setFormErrors(prev => ({
      ...prev,
      [field]: errors[field] || undefined
    }))
  }, [formData])

  // Handle field blur
  const handleBlur = useCallback((field: keyof FormData) => {
    setTouchedFields(prev => new Set(prev).add(field))
    validateField(field)
  }, [validateField])

  // Handle input change
  const handleInputChange = useCallback((field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error for this field if it was touched
    if (touchedFields.has(field) && formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }))
    }
    
    // Reset submit status on change
    if (submitStatus !== "idle") {
      setSubmitStatus("idle")
    }
  }, [touchedFields, submitStatus, formErrors])

  // Handle form submission
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      // Mark all fields as touched
      setTouchedFields(new Set(Object.keys(formData) as (keyof FormData)[]))
      
      // Focus first error field
      const firstErrorField = Object.keys(errors)[0] as keyof FormData
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField)
        element?.focus()
      }
      
      return
    }
    
    setIsSubmitting(true)
    setErrorMessage("")
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          // Add timestamp for Resend
          timestamp: new Date().toISOString(),
          source: variant
        })
      })
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.message || `Error: ${response.status}`)
      }
      
      setSubmitStatus("success")
      
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        fleetSize: "",
        message: "",
        newsletter: false
      })
      setFormErrors({})
      setTouchedFields(new Set())
      
      // Focus success message for screen readers
      setTimeout(() => {
        const successAlert = document.querySelector('[role="alert"]')
        if (successAlert instanceof HTMLElement) {
          successAlert.focus()
        }
      }, 100)
      
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : "Unable to submit form. Please try again or contact us directly."
      )
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, variant])

  // Memoize form props to prevent unnecessary re-renders
  const formProps = useMemo(() => ({
    formData,
    formErrors,
    isSubmitting,
    submitStatus,
    errorMessage,
    onSubmit: handleSubmit,
    onInputChange: handleInputChange,
    onBlur: handleBlur
  }), [formData, formErrors, isSubmitting, submitStatus, errorMessage, handleSubmit, handleInputChange, handleBlur])

  // Render based on variant
  if (variant === "sidebar") {
    return (
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <ContactInfoSection contactInfo={contactInfo} />
        </div>
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <p className="text-muted-foreground">{description}</p>
            </CardHeader>
            <CardContent>
              <FormContent {...formProps} />
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        <FormContent {...formProps} />
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-muted-foreground mb-8">{description}</p>
        {showContactInfo && <ContactInfoSection contactInfo={contactInfo} />}
      </div>
      
      <Card className="card-elevation-lg">
        <CardContent className="p-8">
          <FormContent {...formProps} />
        </CardContent>
      </Card>
    </div>
  )
}