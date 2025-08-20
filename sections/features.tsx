import {
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
} from "lucide-react";

const Feature17 = () => {
  return (
    <section className="py-16">
      <div className="container max-w-7xl">
        <p className="mb-4 text-xs text-muted-foreground md:pl-5">Features</p>
        <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">
          VoyAIge — Core Features
        </h2>
        <div className="mt-5 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-5">
          {/* Fare-Drop & Reminders */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <Timer className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Fare-Drop Alerts & Trip Reminders
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Track saved routes for price drops and get event reminders 1 day
                before. Your itinerary auto-syncs to calendar so nothing slips
                by.
              </p>
            </div>
          </div>

          {/* AI Itineraries & Weather Reschedule */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <Zap className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                AI Itineraries & Weather-Smart Rescheduling
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Generate day-by-day plans in seconds. If the forecast turns bad,
                we propose alternatives and reschedule via WhatsApp—automatically.
              </p>
            </div>
          </div>

          {/* Personalized Destination Cards */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <ZoomIn className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                3 Destination Cards, Picked for You
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                See three tailored destinations with “why chosen” notes,
                seasonality tips, indicative budgets—plus inline flight & hotel
                options.
              </p>
            </div>
          </div>

          {/* On-Site GPS Mode */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <PersonStanding className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                On-Site Mode (GPS Opt-In)
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Enable location sharing to get nearby activities, food, and
                deals right in WhatsApp while you’re there.
              </p>
            </div>
          </div>

          {/* Value on Flights & Hotels */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <DollarSign className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Great Value: Flights & Hotels
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Compare across partners to surface the best options for your
                budget and comfort, with booking redirect links.
              </p>
            </div>
          </div>

          {/* WhatsApp-first */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <MessagesSquare className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                WhatsApp-First Experience
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Welcome message on signup (“Welcome to VoyAIge”), quick
                support, daily feedback check-ins, and travel updates—all in one
                chat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature17 };
