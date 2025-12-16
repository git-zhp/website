"use client";

export default function AnalyticsPanel() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-700 shadow-inner">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-neutral-900">
          Performance overview
        </p>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-800">
          Optimized
        </span>
      </div>
      <p className="text-[11px] text-neutral-500">
        This panel is loaded lazily using dynamic import to keep the initial
        bundle small.
      </p>
      <div className="mt-2 grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-1 rounded-xl bg-white p-2 shadow">
          <span className="text-[11px] text-neutral-500">Lighthouse</span>
          <span className="text-base font-semibold text-neutral-900">98</span>
        </div>
        <div className="flex flex-col gap-1 rounded-xl bg-white p-2 shadow">
          <span className="text-[11px] text-neutral-500">TTFB</span>
          <span className="text-base font-semibold text-neutral-900">
            120ms
          </span>
        </div>
        <div className="flex flex-col gap-1 rounded-xl bg-white p-2 shadow">
          <span className="text-[11px] text-neutral-500">CLS</span>
          <span className="text-base font-semibold text-neutral-900">0.01</span>
        </div>
      </div>
    </div>
  );
}

