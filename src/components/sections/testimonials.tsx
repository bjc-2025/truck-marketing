import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

interface Testimonial {
  id: string
  content: string
  author: {
    name: string
    title: string
    company: string
    avatar?: string
    initials: string
  }
  rating: number
  result?: string
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
  layout?: "grid" | "carousel"
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "dawsons-haulage",
    content: "Truckmarketing understood our business at Dawsons Haulage, delivering tailored branding and a new website that significantly enhanced our market presence and customer engagement. Their creative, responsive team delivers top-quality results that exceeded our expectations.",
    author: {
      name: "Dawsons Haulage",
      title: "Client",
      company: "Dawsons Haulage",
      initials: "DH"
    },
    rating: 5,
    result: "Improved Engagement"
  },
  {
    id: "twincity-truck-centre",
    content: "Truckmarketing's marketing and creative strategy elevated our brand presence at Twincity Truck Centre remarkably. They understand our industry, delivering engaging content and measurable results that strengthened our customer connections in ways we never imagined.",
    author: {
      name: "Twincity Truck Centre",
      title: "Client",
      company: "Twincity Truck Centre",
      initials: "TTC"
    },
    rating: 5,
    result: "Elevated Brand Presence"
  },
  {
    id: "kearneys-transport",
    content: "Truckmarketing modernized our online presence at Kearneys Transport with a new website and stunning photography. They understood our needs perfectly, delivering an innovative, user-friendly site that showcases our fleet beautifully. Their efficient team listened to our vision and brought it to life.",
    author: {
      name: "Kearneys Transport",
      title: "Client",
      company: "Kearneys Transport",
      initials: "KT"
    },
    rating: 5,
    result: "Modernized Web Presence"
  }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export function Testimonials({
  title = "Trusted by Leading Haulage & Transport Companies",
  subtitle = "See how Truckmarketing helps businesses like yours achieve remarkable results",
  testimonials = defaultTestimonials,
}: TestimonialsProps) {
  // Note: layout parameter reserved for future implementation of carousel view
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-display-sm font-bold mb-6">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-elevation-md relative flex flex-col">
              <CardContent className="p-6 flex flex-col flex-grow">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={testimonial.rating} />
                  {testimonial.result && (
                    <Badge variant="secondary" className="bg-truck-orange-100 text-truck-orange-800">
                      {testimonial.result}
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed flex-grow">
                  &quot;{testimonial.content}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  <Avatar className="h-10 w-10">
                    {testimonial.author.avatar ? (
                      <AvatarImage src={testimonial.author.avatar} alt={testimonial.author.name} />
                    ) : null}
                    <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                      {testimonial.author.initials}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-semibold text-sm">
                      {testimonial.author.name}
                    </div>
                    {testimonial.author.title && (
                       <div className="text-xs text-muted-foreground">
                        {testimonial.author.title}
                       </div>
                    )}
                    <div className="text-xs text-muted-foreground font-medium">
                      {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar (Can be updated or kept generic) */}
        <div className="mt-16 bg-primary rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-200 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">2+ Years</div>
              <div className="text-blue-200 text-sm">Industry Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">Top-Tier</div>
              <div className="text-blue-200 text-sm">Creative Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}