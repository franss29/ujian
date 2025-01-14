import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-emerald-50 text-emerald-600 ring-1 ring-emerald-500/10">
                Free Trial
              </span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight">
              Easily organize <br />
              your tasks.
            </h1>
            <p className="text-xl text-gray-600">
              Real-time task management and powerful customization to get everyone on the same page.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">Sign up</Button>
            <Button size="lg" variant="outline">Discover</Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute -z-10 w-96 h-96 rounded-full bg-emerald-50" />
          <Image
            src="/Logo.png"
            alt="Task Management Interface"
            width={600}
            height={400}
            className="relative z-10"
          />
        </div>
      </div>
    </section>
  )
}

