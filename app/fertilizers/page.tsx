import { SiteHeader } from "@/components/site-header"
import { FertilizerCard } from "@/components/fertilizer-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'

const categories = [
  { name: "All", count: "2,000+" },
  { name: "Granular", count: "1,000+" },
  { name: "Liquid", count: "1,000+" },
  { name: "Organic", count: "200+" },
  { name: "Synthetic", count: "400+" },
  { name: "Custom", count: "100+" },
]

const fertilizers = [
  {
    name: "Urea",
    composition: "46-0-0, 46% N",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Ammonium Nitrate",
    composition: "34-0-0, 34% N",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "DAP",
    composition: "18-46-0, 18% N, 46% P2O5",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "MAP",
    composition: "11-52-0, 11% N, 52% P2O5",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Potassium Chloride",
    composition: "0-0-60, 60% K2O",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Potassium Sulfate",
    composition: "0-0-50, 50% K2O",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Superphosphate",
    composition: "0-20-0, 20% P2O5",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Calcium Nitrate",
    composition: "15.5-0-0, 15.5% N",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Magnesium Sulfate",
    composition: "0-0-0, 10% Mg",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Micronutrient Mix",
    composition: "0-0-0, 8% Fe, 4% Mn, 2% Zn, 2% Cu, 1% B, 0.5% Mo",
    imagePath: "/placeholder.svg?height=400&width=400",
  },
]

export default function FertilizersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SiteHeader />
      
      <main className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Fertilizers</h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="secondary"
              className="bg-green-50 hover:bg-green-100"
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for product"
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {fertilizers.map((fertilizer) => (
            <FertilizerCard
              key={fertilizer.name}
              {...fertilizer}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

