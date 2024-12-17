import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"

const products = [
  {
    title: "Nutri-Management",
    description: "Real-time nutrient management",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nutri-Scout",
    description: "In-field scouting tool",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nutri-Log",
    description: "Intelligent logistics management",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nutri-Map",
    description: "Field-centric nutrient maps",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
]

const solutions = [
  {
    title: "Nutri-Management",
    description: "Real-time nutrient management",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nutri-Scout",
    description: "In-field scouting tool",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nutri-Log",
    description: "Intelligent logistics management",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
]

const engagements = [
  {
    title: "Nutri-Management",
    description: "Real-time nutrient management",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nutri-Scout",
    description: "In-field scouting tool",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Nutri-Log",
    description: "Intelligent logistics management",
    imagePath: "/placeholder.svg?height=300&width=400",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSection />
      
      <main className="container py-16 space-y-20">
        <section id="products">
          <h2 className="text-3xl font-bold mb-8">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <FeatureCard key={product.title} {...product} />
            ))}
          </div>
        </section>

        <section id="solutions">
          <h2 className="text-3xl font-bold mb-8">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution) => (
              <FeatureCard key={solution.title} {...solution} />
            ))}
          </div>
        </section>

        <section id="engagements">
          <h2 className="text-3xl font-bold mb-8">Our Engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engagements.map((engagement) => (
              <FeatureCard key={engagement.title} {...engagement} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}