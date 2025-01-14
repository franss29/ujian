import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get Best Price for Our Product</h2>
          <p className="text-gray-600">Choose the perfect plan for your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PriceCard
            title="Basic"
            price="$9"
            features={[
              "Up to 5 projects",
              "Basic task management",
              "2GB storage",
              "Email support"
            ]}
          />
          <PriceCard
            title="Standard"
            price="$19"
            features={[
              "Unlimited projects",
              "Advanced task management",
              "10GB storage",
              "Priority support",
              "Team collaboration"
            ]}
            popular
          />
          <PriceCard
            title="Premium"
            price="$39"
            features={[
              "Unlimited everything",
              "Custom workflows",
              "100GB storage",
              "24/7 phone support",
              "Advanced analytics"
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function PriceCard({ title, price, features, popular }: { 
  title: string
  price: string
  features: string[]
  popular?: boolean 
}) {
  return (
    <div className={`p-6 rounded-xl ${popular ? 'ring-2 ring-emerald-500 shadow-lg' : 'border'}`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-600">/month</span>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="h-5 w-5 text-emerald-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${popular ? 'bg-emerald-500 hover:bg-emerald-600' : ''}`}>
        Get Started
      </Button>
    </div>
  )
}

