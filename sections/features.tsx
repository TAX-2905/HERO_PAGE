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
        <h2 className="mt-13 text-3xl font-medium md:pl-5 lg:text-4xl">
          VoyAIge — Core Features
        </h2>
        <div className="mt-5 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-5">
          {/* Reminders & Calendar Sync */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <Timer className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Reminders & Calendar Sync
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Confirm your itinerary and get eve-of activity reminders. Events
                are added to Google Calendar and stay up to date when plans
                change.
              </p>
            </div>
          </div>

          {/* Weather-Aware Alternatives */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <Zap className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Weather-Aware Alternatives
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                If tomorrow’s forecast looks rainy for a time slot, we suggest
                indoor or covered options. Accept changes and your plan and
                calendar update automatically.
              </p>
            </div>
          </div>

          {/* Hidden-Gem Itineraries */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <ZoomIn className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Hidden-Gem Itineraries
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Personalized, lesser-known places matched to your interests,
                budget, and accessibility needs—complete with travel times and
                opening hours.
              </p>
            </div>
          </div>

          {/* On-Site Mode & Nearby Restaurants */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <PersonStanding className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                On-Site Mode & Nearby Restaurants
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Opt in to share location on the day to get nearby restaurants
                and timely tips. Safety add-on for companions: proximity alerts
                at 500&nbsp;m (message) and 1&nbsp;km (phone call).
              </p>
            </div>
          </div>

          {/* Tourist-Ready Bookings & Value */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <DollarSign className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                Tourist-Ready Bookings & Value
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Visitors can book AI-suggested activities with local pricing
                guidance. We handle time zones and conflicts so your schedule
                just works.
              </p>
            </div>
          </div>

          {/* One Conversation + Accessibility */}
          <div className="flex gap-6 rounded-lg md:block md:p-5">
            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
              <MessagesSquare className="size-4 md:size-6" />
            </span>
            <div>
              <h3 className="font-medium md:mb-2 md:text-xl">
                One Conversation + Accessibility
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                All confirmations, reminders, updates, and daily feedback live
                in a single WhatsApp chat thread. “Read reply” speaks responses
                aloud, and voice input lets you ask hands-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature17 };
