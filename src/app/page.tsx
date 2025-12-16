import nextDynamic from "next/dynamic";
import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { AppImage } from "@/components/ui/AppImage";

const AnalyticsPanel = nextDynamic(
  () => import("@/components/metrics/AnalyticsPanel"),
  {
    ssr: false,
  },
);

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <PageShell titleKey="page.home.title">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-card to-secondary/50">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Modern enterprise-ready layout
                </h2>
                <p className="text-muted-foreground">
                  Use this starter as the foundation for marketing, product, or
                  documentation experiences with consistent design and behavior.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary">Primary action</Button>
                  <Button variant="secondary">Secondary action</Button>
                </div>
              </div>
              <div className="hidden w-full max-w-[200px] shrink-0 md:block">
                <AppImage
                  src="/window.svg"
                  alt="Layout illustration"
                  width={320}
                  height={200}
                  radius="lg"
                  priority
                  className="shadow-lg"
                />
              </div>
            </div>
          </Card>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card title="Responsive" description="Optimized for desktop and mobile.">
              <p className="text-sm text-muted-foreground">
                Layout primitives are built with Tailwind CSS and flexbox for
                predictable behavior across breakpoints.
              </p>
            </Card>
            <Card
              title="International"
              description="Ready for multilingual experiences."
            >
              <p className="text-sm text-muted-foreground">
                Switch language at the top-right to see how navigation and
                titles adapt.
              </p>
            </Card>
            <Card
              title="Theme-aware"
              description="Built-in light and dark modes."
            >
              <p className="text-sm text-muted-foreground">
                Use the theme toggle to preview color tokens and typography
                across the site.
              </p>
            </Card>
          </div>
        </div>
        <div className="space-y-6">
          <AnalyticsPanel />
        </div>
      </div>
    </PageShell>
  );
}
