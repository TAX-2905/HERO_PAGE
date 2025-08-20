import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero1 = () => {
  return (
    <section>
      <div className="container mt-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              ✨ VoyAIge — AI that gets you there
              <ArrowUpRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Plan Smarter Trips with VoyAIge
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              Sign up, set your preferences, then chat with our AI to get 3
              tailored destinations with flights & hotels, a ready-to-go
              itinerary, WhatsApp updates, fare-drop alerts, weather-smart
              rescheduling, on-site GPS tips, and calendar sync.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href="/signup">Start planning</a>
              </Button>
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href="https://wa.me/message/XXXXXXXXXXXXXXX">
                  Chat on WhatsApp
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
{/* replace the <Badge>…</Badge> block with: */}
<Image
  src="/ocpr.svg"
  alt="VoyAIge logo"
  width={400}
  height={400}
  className="h+10 w-auto"
/>


        </div>
      </div>
    </section>
  );
};

export { Hero1 };
