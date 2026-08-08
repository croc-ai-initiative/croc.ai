/**
 * ═══════════════════════════════════════════════════════════════════
 * HOW TO POST A NEW EVENT
 * ═══════════════════════════════════════════════════════════════════
 * This site has no backend/CMS — it's static, so "posting" content
 * means editing this file and pushing to GitHub. That's it, no server,
 * no database.
 *
 * TO ADD AN EVENT WITH A PICTURE:
 *   1. Drop your image into /public/events/ (e.g. hackathon-2026.jpg).
 *      Keep it under ~500KB — resize/compress first if it's a phone photo.
 *   2. Add an entry to UPCOMING_EVENTS below, setting `image` to
 *      "/events/hackathon-2026.jpg" (matches the file you just added).
 *   3. Commit and push to `main` — GitHub Actions rebuilds and
 *      deploys automatically within a couple of minutes.
 *
 * TO ADD A GOOGLE FORM (or any external) REGISTRATION LINK:
 *   Just set `registrationUrl` to the full Google Form URL, e.g.
 *   "https://forms.gle/xxxxxxxx" or the full docs.google.com/forms/...
 *   link. It'll automatically open in a new tab — no extra config
 *   needed. Leave it unset to link to an internal page instead (set
 *   `internalHref` in that case).
 *
 * TO MOVE AN EVENT TO THE PAST-EVENTS ARCHIVE (after it happens):
 *   Cut its entry from UPCOMING_EVENTS and paste it into PAST_EVENTS
 *   below, adding a `gallery` array of image paths (same /public/events/
 *   pattern) and a `recap` paragraph.
 * ═══════════════════════════════════════════════════════════════════
 */

export type UpcomingEvent = {
  category: "Workshops" | "Conferences" | "Hackathons" | "Webinars" | "Meetups" | "AI Fridays" | "Launch";
  title: string;
  date: string;
  venue: string;
  status: string;
  /** Path under /public, e.g. "/events/my-photo.jpg" — optional. */
  image?: string;
  /** Full external URL (Google Form, Luma, Eventbrite, etc.) — opens in a new tab automatically. */
  registrationUrl?: string;
  /** Internal site route to link to instead, if there's no external form yet. */
  internalHref?: string;
  /** Speaker names, optional. */
  speakers?: string[];
  /** Set false for placeholder entries so the UI marks them clearly as "TBD". */
  confirmed: boolean;
};

export type PastEvent = {
  category: UpcomingEvent["category"];
  title: string;
  date: string;
  venue: string;
  recap: string;
  /** A single banner/hero image for the event, shown above the recap — path under /public, e.g. "/events/my-banner.jpg". Optional. */
  coverImage?: string;
  /** Paths under /public, e.g. ["/events/gallery/1.jpg", ...] — a grid of additional photos. Optional. */
  gallery: string[];
  speakers?: string[];
};

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    category: "Workshops",
    title: "CROC AI Workshop Series: Build Your Own AI Chatbot",
    date: "August 27–29, 2026",
    venue: "Kaduna State University, Kaduna",
    status: "Registration open",
    internalHref: "/ai-academy",
    confirmed: true,
    // Example of how you'd add a Google Form instead:
    // registrationUrl: "https://forms.gle/your-form-id",
  },
  {
    category: "AI Fridays",
    title: "AI Fridays — weekly community session",
    date: "Schedule to be announced",
    venue: "Kaduna (venue TBA) / Online",
    status: "Coming soon",
    internalHref: "/contact",
    confirmed: false,
  },
  {
    category: "Hackathons",
    title: "First CROC AI Hackathon",
    date: "Date to be announced",
    venue: "Kaduna, Nigeria",
    status: "In planning",
    internalHref: "/contact",
    confirmed: false,
  },
];

export const PAST_EVENTS: PastEvent[] = [
  {
    category: "Launch",
    title: "The Launch of CROC AI Initiative",
    // NOTE: placeholder date, aligned with "Est. August 2026" and the
    // annual Cyber Hygiene Day (Aug 6) already used elsewhere on the
    // site — confirm and replace with the exact launch date.
    date: "August 6, 2026",
    // NOTE: placeholder venue — confirm and replace with the exact
    // location the launch was held.
    venue: "Kaduna, Nigeria",
    recap:
      "CROC AI Initiative officially launched in Kaduna, marking the start of a single mission: advancing and inspiring AI innovation across Nigeria and Africa. The launch introduced our leadership team, research direction, and flagship programmes to the community for the first time.",
    coverImage: "/events/croc_ai_banner.png",
    gallery: [],
    speakers: ["Nasiru Iliya"],
  },
  // Once the first workshop wraps, add its entry here too, e.g.:
  // {
  //   category: "Workshops",
  //   title: "CROC AI Workshop Series: Build Your Own AI Chatbot",
  //   date: "August 27–29, 2026",
  //   venue: "Kaduna State University, Kaduna",
  //   recap: "Over three days, 40 participants went from AI users to AI builders...",
  //   gallery: ["/events/gallery/workshop-1.jpg", "/events/gallery/workshop-2.jpg"],
  //   speakers: ["Nasiru Iliya", "Prof. Muhammad Aminu Ahmad"],
  // },
];
