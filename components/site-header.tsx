import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Nutritech Agro</span>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/fertilizers" className="transition-colors hover:text-foreground/80">
              Fertilizers
            </Link>
            <Link href="/soil-analysis" className="transition-colors hover:text-foreground/80">
              Soil Analysis
            </Link>
          </nav>
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <Link href="/request-demo">Request Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}