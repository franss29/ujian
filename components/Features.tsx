import { CheckCircle, ListTodo, BarChart } from 'lucide-react'

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 w-full rounded-2xl" id="features">
      <div className="px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Manage tasks easily</h2>
          <p className="text-xl text-gray-600">
            Stay organized and efficient with our powerful task management features.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ListTodo className="w-6 h-6 text-emerald-500" />}
            title="Keep tasks in one place"
            description="Store all your tasks in one secure location, accessible from anywhere."
          />
          <FeatureCard
            icon={<BarChart className="w-6 h-6 text-emerald-500" />}
            title="Track your progress"
            description="Monitor your task completion and productivity trends over time."
          />
          <FeatureCard
            icon={<CheckCircle className="w-6 h-6 text-emerald-500" />}
            title="Prioritize your work"
            description="Easily organize and prioritize tasks based on importance and deadlines."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="relative p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-emerald-50 translate-x-1/3 -translate-y-1/3" />
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
