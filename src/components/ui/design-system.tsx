import { Button } from "./button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card"
import { Badge } from "./badge"
import { Input } from "./input"
import { Textarea } from "./textarea"
import { Separator } from "./separator"

export function DesignSystemShowcase() {
  return (
    <div className="container-wide section-padding space-y-16">
      <div className="text-center">
        <h1 className="text-display-lg font-bold mb-4">
          Trucking Marketing Design System
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive design system built for trucking and logistics marketing websites, 
          featuring brand colors, typography, and components.
        </p>
      </div>

      {/* Colors */}
      <section>
        <h2 className="text-display-sm font-bold mb-8">Brand Colors</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Primary Blues */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Primary Blue (Trust & Reliability)</h3>
            <div className="space-y-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-8 rounded border bg-truck-blue-${shade}`}
                  />
                  <span className="font-mono text-sm">truck-blue-{shade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Success Green */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Success Green (Growth & Action)</h3>
            <div className="space-y-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-8 rounded border bg-truck-green-${shade}`}
                  />
                  <span className="font-mono text-sm">truck-green-{shade}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning Orange */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Warning Orange (Energy & Urgency)</h3>
            <div className="space-y-2">
              {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map((shade) => (
                <div key={shade} className="flex items-center gap-3">
                  <div 
                    className={`w-12 h-8 rounded border bg-truck-orange-${shade}`}
                  />
                  <span className="font-mono text-sm">truck-orange-{shade}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Typography */}
      <section>
        <h2 className="text-display-sm font-bold mb-8">Typography</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Display Sizes</h3>
            <div className="space-y-4">
              <div>
                <span className="text-display-xl font-bold">Display XL</span>
                <p className="text-sm text-muted-foreground">text-display-xl (4.5rem / 72px)</p>
              </div>
              <div>
                <span className="text-display-lg font-bold">Display Large</span>
                <p className="text-sm text-muted-foreground">text-display-lg (3.75rem / 60px)</p>
              </div>
              <div>
                <span className="text-display-md font-bold">Display Medium</span>
                <p className="text-sm text-muted-foreground">text-display-md (3rem / 48px)</p>
              </div>
              <div>
                <span className="text-display-sm font-bold">Display Small</span>
                <p className="text-sm text-muted-foreground">text-display-sm (2.25rem / 36px)</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Standard Sizes</h3>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Heading 1 (4xl)</h1>
              <h2 className="text-3xl font-bold">Heading 2 (3xl)</h2>
              <h3 className="text-2xl font-bold">Heading 3 (2xl)</h3>
              <h4 className="text-xl font-bold">Heading 4 (xl)</h4>
              <p className="text-lg">Large body text (lg)</p>
              <p className="text-base">Base body text (base)</p>
              <p className="text-sm">Small text (sm)</p>
              <p className="text-xs">Extra small text (xs)</p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Buttons */}
      <section>
        <h2 className="text-display-sm font-bold mb-8">Buttons</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Primary Variants</h3>
            <div className="space-y-3">
              <Button className="w-full">Default Primary</Button>
              <Button variant="secondary" className="w-full">Secondary</Button>
              <Button variant="outline" className="w-full">Outline</Button>
              <Button variant="ghost" className="w-full">Ghost</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Brand Colors</h3>
            <div className="space-y-3">
              <Button className="w-full btn-truck-green">Truck Green</Button>
              <Button className="w-full btn-truck-orange">Truck Orange</Button>
              <Button className="w-full bg-truck-blue-600 text-white hover:bg-truck-blue-700">Truck Blue</Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Sizes</h3>
            <div className="space-y-3">
              <Button size="sm" className="w-full">Small</Button>
              <Button className="w-full">Default</Button>
              <Button size="lg" className="w-full">Large</Button>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Cards */}
      <section>
        <h2 className="text-display-sm font-bold mb-8">Cards & Components</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-elevation-sm">
            <CardHeader>
              <Badge className="w-fit mb-2">Small Elevation</Badge>
              <CardTitle>Service Card</CardTitle>
              <CardDescription>
                Example service description with small shadow elevation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="card-elevation-md">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Medium Elevation</Badge>
              <CardTitle>Testimonial Card</CardTitle>
              <CardDescription>
                Example testimonial with medium shadow elevation and hover effects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="card-elevation-lg">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">Large Elevation</Badge>
              <CardTitle>CTA Card</CardTitle>
              <CardDescription>
                High-impact card with large shadow for important content.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full btn-truck-green">Take Action</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      {/* Forms */}
      <section>
        <h2 className="text-display-sm font-bold mb-8">Form Elements</h2>
        
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Contact Form Example</CardTitle>
            <CardDescription>
              Form styling with consistent spacing and brand colors
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="John Smith" className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@company.com" className="mt-1" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea placeholder="Tell us about your project..." className="mt-1" />
            </div>
            <Button className="w-full btn-truck-green">Send Message</Button>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Utility Classes */}
      <section>
        <h2 className="text-display-sm font-bold mb-8">Utility Classes</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Container Classes</h3>
            <div className="space-y-2 font-mono text-sm">
              <div>.container-narrow - max-w-4xl with responsive padding</div>
              <div>.container-wide - max-w-7xl with responsive padding</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Section Spacing</h3>
            <div className="space-y-2 font-mono text-sm">
              <div>.section-padding - py-16 sm:py-20 lg:py-24</div>
              <div>.section-padding-sm - py-12 sm:py-16</div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Gradients</h3>
            <div className="space-y-3">
              <div className="h-12 rounded gradient-hero flex items-center justify-center text-white font-medium">
                .gradient-hero
              </div>
              <div className="h-12 rounded gradient-cta flex items-center justify-center text-white font-medium">
                .gradient-cta
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Card Elevations</h3>
            <div className="space-y-3">
              <div className="h-12 rounded bg-white card-elevation-sm flex items-center justify-center">
                .card-elevation-sm
              </div>
              <div className="h-12 rounded bg-white card-elevation-md flex items-center justify-center">
                .card-elevation-md
              </div>
              <div className="h-12 rounded bg-white card-elevation-lg flex items-center justify-center">
                .card-elevation-lg
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}