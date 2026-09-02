"use client";

import { useEffect, useState } from "react";

/**
 * Test scaffolding for the widget's "Custom Feature Triggers" feature.
 *
 * Every button below carries a distinct, sequential id — #guidy-trigger-01
 * through #guidy-trigger-15 — so a trigger row can be wired up in the Braoza
 * dashboard (Customize → Custom Feature Triggers) by pasting the id straight
 * into the Selector field. The feature each button applies is decided there,
 * not here.
 *
 * The click counter is local state only; it confirms the click reached the DOM
 * even when the configured feature does nothing visible.
 */

const TRIGGER_COUNT = 15;

const triggerIds = Array.from(
  { length: TRIGGER_COUNT },
  (_, i) => `guidy-trigger-${String(i + 1).padStart(2, "0")}`,
);

const buttonClass =
  "flex w-full items-center justify-between gap-3 rounded-md border border-stroke bg-white px-4 py-3 text-left text-sm font-medium text-black shadow-btn-light duration-200 hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-primary";

const countClass =
  "shrink-0 rounded-full bg-gray-light px-2 py-0.5 font-mono text-xs tabular-nums text-body-color dark:bg-white/10 dark:text-body-color-dark";

const TriggerTestPanel = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [showLateTrigger, setShowLateTrigger] = useState(false);

  // Appears three seconds after mount, so the widget's MutationObserver has to
  // pick it up rather than finding it on the initial pass.
  useEffect(() => {
    const timer = window.setTimeout(() => setShowLateTrigger(true), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  const bump = (id: string) =>
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));

  return (
    <section
      id="guidy-trigger-panel"
      aria-labelledby="guidy-trigger-panel-title"
      className="border-stroke mb-12 rounded-md border bg-gray-light px-6 py-8 dark:border-white/10 dark:bg-white/5 sm:px-8"
    >
      <h3
        id="guidy-trigger-panel-title"
        className="mb-2 text-xl font-bold text-black dark:text-white"
      >
        Feature trigger test buttons
      </h3>
      <p className="mb-7 max-w-2xl text-sm leading-relaxed text-body-color dark:text-body-color-dark">
        Paste any id below into the Selector field of a trigger row in Customize
        → Custom Feature Triggers, pick the feature and value, then save and
        reload this page. The counter on each button shows how many times it has
        been clicked.
      </p>

      <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {triggerIds.map((id, index) => (
          <button
            key={id}
            id={id}
            type="button"
            onClick={() => bump(id)}
            className={buttonClass}
          >
            <span className="font-mono text-xs">#{id}</span>
            <span className={countClass}>{counts[id] ?? 0}</span>
            <span className="sr-only">
              Feature trigger {index + 1} of {TRIGGER_COUNT}
            </span>
          </button>
        ))}
      </div>

      <h4 className="mb-3 mt-8 text-sm font-semibold uppercase tracking-wider text-body-color dark:text-body-color-dark">
        Selector variants
      </h4>
      <p className="mb-4 max-w-2xl text-sm leading-relaxed text-body-color dark:text-body-color-dark">
        The first two share a class, so{" "}
        <span className="font-mono text-xs">.guidy-trigger-pair</span> should
        drive both at once. The third only appears three seconds after the page
        loads, which tests whether triggers attach to elements added later.
      </p>

      <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 md:grid-cols-3">
        <button
          type="button"
          id="guidy-trigger-pair-a"
          onClick={() => bump("guidy-trigger-pair-a")}
          className={`${buttonClass} guidy-trigger-pair`}
        >
          <span className="font-mono text-xs">.guidy-trigger-pair (A)</span>
          <span className={countClass}>
            {counts["guidy-trigger-pair-a"] ?? 0}
          </span>
        </button>

        <button
          type="button"
          id="guidy-trigger-pair-b"
          onClick={() => bump("guidy-trigger-pair-b")}
          className={`${buttonClass} guidy-trigger-pair`}
        >
          <span className="font-mono text-xs">.guidy-trigger-pair (B)</span>
          <span className={countClass}>
            {counts["guidy-trigger-pair-b"] ?? 0}
          </span>
        </button>

        {showLateTrigger ? (
          <button
            type="button"
            id="guidy-trigger-late"
            onClick={() => bump("guidy-trigger-late")}
            className={buttonClass}
          >
            <span className="font-mono text-xs">#guidy-trigger-late</span>
            <span className={countClass}>
              {counts["guidy-trigger-late"] ?? 0}
            </span>
          </button>
        ) : (
          <p className="border-stroke flex items-center rounded-md border border-dashed px-4 py-3 text-xs text-body-color dark:border-white/10 dark:text-body-color-dark">
            #guidy-trigger-late appears in a moment…
          </p>
        )}
      </div>
    </section>
  );
};

export default TriggerTestPanel;
