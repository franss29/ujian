import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "This platform is one of the best task management tools I have ever used. Simple, intuitive, and powerful.",
    author: "Sarah Johnson",
    role: "Product Manager",
    avatar: "/Profil1.jpg"
  },
  {
    quote: "TaskFlow has transformed how our team manages daily tasks. Highly recommended!",
    author: "Michael Chen",
    role: "Team Lead",
    avatar: "/Profil1.jpg",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50 w-full rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-12 text-center">What people say?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, role, avatar }: { quote: string; author: string; role: string; avatar: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <p className="text-gray-600 mb-4">{quote}</p>
      <div className="flex items-center gap-3">
        <Image
          src={avatar}
          alt={`Avatar of ${author}`}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}
