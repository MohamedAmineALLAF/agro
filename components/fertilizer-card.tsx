import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface FertilizerCardProps {
  name: string
  composition: string
  imagePath: string
}

export function FertilizerCard({ name, composition, imagePath }: FertilizerCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="aspect-square relative mb-4">
          <Image
            src={imagePath}
            alt={name}
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-sm text-green-600">{composition}</p>
        </div>
      </CardContent>
    </Card>
  )
}