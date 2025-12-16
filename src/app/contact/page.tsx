import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <PageShell titleKey="page.contact.title">
      <Card>
        <form className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-neutral-700">
              Name
            </label>
            <Input placeholder="Your name" />
          </div>
          <div className="md:col-span-1">
            <label className="mb-1 block text-xs font-medium text-neutral-700">
              Email
            </label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1 block text-xs font-medium text-neutral-700">
              Message
            </label>
            <textarea
              className="block w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 shadow-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/40"
              rows={4}
              placeholder="How can we help?"
            />
          </div>
          <div className="md:col-span-2">
            <Button variant="primary">Send message</Button>
          </div>
        </form>
      </Card>
    </PageShell>
  );
}

