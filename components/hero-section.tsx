import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 container text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fertilizer Management Software
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          The world's most advanced fertilizer management software, designed for precision agriculture
        </p>
        <Button size="lg" className="bg-green-600 hover:bg-green-700">
          Request Demo
        </Button>
      </div>
    </section>
  )
}