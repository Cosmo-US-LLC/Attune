import { FilloutStandardEmbed } from "@fillout/react";

/** Fillout form hosted on FeelAttune signup domain */
const FILLOUT_FORM_ID = "jcLDEqP45Aus";
const FILLOUT_DOMAIN = "signup.feelattune.com";

const trustBadges = ["Confidential", "No credit card", "Cancel anytime"];

/**
 * Replaces the static contact fields with the Fillout form (inline standard embed).
 * Your embed snippet used `slider`; for the same card layout without an extra click,
 * standard + dynamic resize matches the old form area. To use a sliding panel instead,
 * switch to `FilloutSliderEmbed` + a CTA button.
 */
function ContactMessageForm() {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      <div className="w-full min-w-0 [&_.fillout-standard-embed]:w-full">
        <FilloutStandardEmbed
          filloutId={FILLOUT_FORM_ID}
          domain={FILLOUT_DOMAIN}
          inheritParameters
          dynamicResize
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {trustBadges.map((badge, i) => (
          <span key={badge} className="flex items-center gap-1">
            {i > 0 && (
              <span
                className="text-[10px] text-[rgba(0,0,0,0.15)] mr-1"
                aria-hidden
              >
                ·
              </span>
            )}
            <span className="text-[#ff6f61] text-[11px] font-medium leading-none">
              ✓
            </span>
            <span className="text-[14px] font-medium text-[rgba(0,0,0,0.35)] whitespace-nowrap">
              {badge}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default ContactMessageForm;
