import { Footer2 } from "@/components/footer2";
import { LogoBrandDownload } from "@/components/logo";
import { Feature17 } from "@/sections/features";
import { Hero1 } from "@/sections/hero";
import { Separator } from "@radix-ui/react-dropdown-menu";

export default function Home() {
  return (
    <div>
      <Hero1 />
      <Separator className="my-5" />
      <Feature17 />
      <Separator className="my-5" />
      <Footer2 />
    </div>
  );
}
