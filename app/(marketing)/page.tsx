import Link from "next/link"
import { CheckIcon, HeartHandshake } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <HeartHandshake className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">CareSyncRx</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link
            href="/signup"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Seamless Medication Management for Your Loved Ones
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    CareSyncRx helps you manage medications for your family, ensuring they never miss a dose. Peace of
                    mind for you, better health for them.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#pricing"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Plans
                  </Link>
                </div>
              </div>
              <img
                src="/placeholder-v47pf.png"
                width="600"
                height="600"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Everything You Need for Peace of Mind
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From AI-powered voice assistance to real-time inventory tracking, CareSyncRx provides a comprehensive
                  solution for medication management.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none mt-12">
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 8V4H8" />
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M8 12h8" />
                    <path d="M16 12v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Voice Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  Verbal reminders, dose confirmations, and interaction warnings to ensure patient safety.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Inventory Management</h3>
                <p className="text-sm text-muted-foreground">
                  Visual tracking of medication boxes and low-supply alerts to prevent running out.
                </p>
              </div>
              <div className="grid gap-1 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 17H2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2Z" />
                    <path d="M18 17V7" />
                    <path d="M6 17V7" />
                    <path d="M12 17V7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Real-Time Sync</h3>
                <p className="text-sm text-muted-foreground">
                  Instant updates on dose confirmations and alerts across all connected devices.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Choose the Plan That's Right for You
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simple, transparent pricing. No hidden fees.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-sm gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4 mt-12">
              <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg justify-between border border-border">
                <div>
                  <h3 className="text-2xl font-bold text-center">Free Self-Care</h3>
                  <div className="mt-4 text-center text-muted-foreground">
                    <span className="text-4xl font-bold">$0</span>/ month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Self-medication tracking
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Unlimited personal reminders
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      30-day history
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="relative flex flex-col p-6 bg-background shadow-lg rounded-lg justify-between border-2 border-primary">
                <div className="absolute top-0 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 text-sm rounded-full">
                  Most Popular
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-center">Pro Caregiver</h3>
                  <div className="mt-4 text-center text-muted-foreground">
                    <span className="text-4xl font-bold">$12.99</span>/ month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Up to 2 patient platforms
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Real-time alerts
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      365-day history
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    prefetch={false}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg justify-between border border-border">
                <div>
                  <h3 className="text-2xl font-bold text-center">Family Multi-Caregiver</h3>
                  <div className="mt-4 text-center text-muted-foreground">
                    <span className="text-4xl font-bold">$24.99</span>/ month
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Up to 5 patient platforms
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Up to 10 caregivers
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      All Pro features
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Coordination tools
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    prefetch={false}
                  >
                    Choose Plan
                  </Link>
                </div>
              </div>
              <div className="flex flex-col p-6 bg-background shadow-lg rounded-lg justify-between border border-border">
                <div>
                  <h3 className="text-2xl font-bold text-center">Enterprise</h3>
                  <div className="mt-4 text-center text-muted-foreground">
                    <span className="text-4xl font-bold">Contact Us</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Unlimited platforms
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      API access & white-label
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      HIPAA compliance
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-primary mr-2" />
                      Dedicated support
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link
                    href="#"
                    className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    prefetch={false}
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2025 CareSyncRx. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
