import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  imagePath: string
}

export function FeatureCard({ title, description, imagePath }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <Image
          src={imagePath}
          alt={title}
          width={400}
          height={300}
          className="w-full object-cover aspect-[4/3]"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-sm text-green-600">{description}</p>
      </CardHeader>
    </Card>
  )
}