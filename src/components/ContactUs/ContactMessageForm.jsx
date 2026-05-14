import { FilloutStandardEmbed } from "@fillout/react";

/** signup.feelattune.com — jcLDEqP45Aus; inherit URL query params */
const FILLOUT_FORM_ID = "jcLDEqP45Aus";
const FILLOUT_DOMAIN = "signup.feelattune.com";

const trustBadges = ["Confidential", "Cancel anytime"];

/**
 * Inline form in the card (standard embed). Slider-only embed hid the form until
 * click — use FilloutSliderEmbed in addition only if you want a panel variant.
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

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {trustBadges.map((badge, i) => (
          <span key={badge} className="flex gap-1 items-center">
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
