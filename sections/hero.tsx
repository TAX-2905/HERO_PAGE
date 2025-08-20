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
              ✨ VoyAIge — AI that gets you there !
              <ArrowUpRight className="ml-2 size-16" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Thoughtful Journeys, Effortlessly Yours
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">

Too often, we return to the same places simply because we don’t know what else is out there.  <br /><br />

Let VoyAIge quietly guide you there — with plans that feel personal, days that flow naturally, and little surprises that just make sense. Whether you like to wander, discover, or just enjoy the moment, we’ll be one step ahead — thoughtful, gentle, and built around you. <br /><br />

No stress. No noise. Just a smarter way to explore.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild className="w-full sm:w-auto">
                <a href="https://dodo-go.vercel.app/">Begin Your Journey</a>
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
