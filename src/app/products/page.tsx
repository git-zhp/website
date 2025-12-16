import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";

export const dynamic = "force-static";

export default function ProductsPage() {
  return (
    <PageShell titleKey="page.products.title">
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Product or service A">
          <p className="text-sm text-neutral-600">
            Use this card for a key solution or product line.
          </p>
        </Card>
        <Card title="Product or service B">
          <p className="text-sm text-neutral-600">
            Add more cards as needed to represent your portfolio.
          </p>
        </Card>
        <Card title="Product or service C">
          <p className="text-sm text-neutral-600">
            Customize layout, actions, and links based on your needs.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}

