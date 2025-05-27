"use client"

import { useState } from "react"
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
} from "lucide-react"

interface ContactFormProps {
  title?: string
  description?: string
  showContactInfo?: boolean
  variant?: "default" | "sidebar" | "inline"
}

interface FormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  fleetSize: string
  message: string
  newsletter: boolean
}

const services = [
  "Trucking SEO",
  "Lead Generation", 
  "Website Development",
  "PPC Advertising",
  "Brand Strategy",
  "Performance Analytics",
  "Full Marketing Package"
]

const fleetSizes = [
  "1-5 vehicles",
  "6-20 vehicles", 
  "21-50 vehicles",
  "50+ vehicles",
  "Freight broker",
  "Other logistics service"
]

export function ContactForm({ 
  title = "Get Your Free Marketing Strategy Session",
  description = "Tell us about your trucking business and we'll show you how to accelerate your growth.",
  showContactInfo = true,
  variant = "default"
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
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setSubmitStatus("success")
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
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const ContactInfo = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Truck className="h-5 w-5 text-primary" />
          Lets Drive Results Together
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
            <div className="text-sm text-muted-foreground">(555) 123-4567</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Mail className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="font-medium">Email Us</div>
            <div className="text-sm text-muted-foreground">hello@truckmarketing.com</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Clock className="h-4 w-4 text-primary" />
          </div>
          <div>
            <div className="font-medium">Response Time</div>
            <div className="text-sm text-muted-foreground">Within 2 business hours</div>
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

  const FormContent = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success/Error Messages */}
      {submitStatus === "success" && (
        <div className="bg-truck-orange-50 border border-truck-orange-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-truck-orange-600" />
            <span className="font-medium text-truck-orange-800">
              Thank you! Well be in touch within 2 business hours.
            </span>
          </div>
        </div>
      )}
      
      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-600" />
            <span className="font-medium text-red-800">
              Something went wrong. Please try again or call us directly.
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
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="John Smith"
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="john@company.com"
            required
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="(555) 123-4567"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="company">Company Name *</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleInputChange("company", e.target.value)}
            placeholder="ABC Trucking Co."
            required
          />
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="service">Service Interest</Label>
          <Select onValueChange={(value) => handleInputChange("service", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="fleetSize">Fleet Size</Label>
          <Select onValueChange={(value) => handleInputChange("fleetSize", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select fleet size" />
            </SelectTrigger>
            <SelectContent>
              {fleetSizes.map((size) => (
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
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="What marketing challenges are you facing? What results are you looking to achieve?"
          rows={4}
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox
          id="newsletter"
          checked={formData.newsletter}
          onCheckedChange={(checked) => handleInputChange("newsletter", !!checked)}
        />
        <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
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
          "Sending..."
        ) : (
          <>
            Get My Free Strategy Session
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
      
      <p className="text-xs text-center text-muted-foreground">
        By submitting this form, you agree to our privacy policy. Well never spam you.
      </p>
    </form>
  )

  if (variant === "sidebar") {
    return (
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <ContactInfo />
        </div>
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <p className="text-muted-foreground">{description}</p>
            </CardHeader>
            <CardContent>
              <FormContent />
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
        <FormContent />
      </div>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-muted-foreground mb-8">{description}</p>
        {showContactInfo && <ContactInfo />}
      </div>
      
      <Card className="card-elevation-lg">
        <CardContent className="p-8">
          <FormContent />
        </CardContent>
      </Card>
    </div>
  )
}