import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium font-body transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: 
          "text-foreground border-border",
        // Mansion Variants
        gold:
          "border-gold/30 bg-gold/10 text-gold",
        pink:
          "border-primary/30 bg-primary/10 text-primary",
        status:
          "border-green-500/30 bg-green-500/10 text-green-700",
        closed:
          "border-red-500/30 bg-red-500/10 text-red-700",
        vegan:
          "border-green-600/30 bg-green-600/10 text-green-700",
        glutenFree:
          "border-amber-500/30 bg-amber-500/10 text-amber-700",
        lactoseFree:
          "border-blue-500/30 bg-blue-500/10 text-blue-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
