import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";

export const dynamic = "force-static";

export default function NewsPage() {
  return (
    <PageShell titleKey="page.news.title">
      <Card>
        <p className="text-sm text-neutral-600">
          Connect this section to your CMS or API to display company news,
          press releases, and blog posts.
        </p>
      </Card>
    </PageShell>
  );
}

