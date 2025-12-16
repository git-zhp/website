import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <PageShell titleKey="page.about.title">
      <Card>
        <p className="text-sm text-neutral-600">
          Replace this area with your company introduction, mission, and team
          overview content.
        </p>
      </Card>
    </PageShell>
  );
}

