

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"

export function Omkar() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="font-bold text-lg" variant="link">@omkarbhosale</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="/omkar.jpg" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <Link href="https://instagram.com/techomkar">
            <h4 className="text-sm font-semibold">Omkar Bhosale</h4>
            </Link>
            <p className="text-sm">
              Full Stack developer building many things!
            </p>
            <div className="flex items-center pt-2">
                <Link target="_blank" href="https://omkarbhosale.vercel.app">
              <span className="text-xs text-muted-foreground">
                Ceckout my portfolio
              </span>
                </Link>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
