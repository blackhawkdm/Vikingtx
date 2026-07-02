"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { sendGTMEvent } from "@next/third-parties/google";

/**
 * Fires a `route_change` dataLayer event on first load and every client-side
 * navigation. GTM's built-in Page View / Window Loaded triggers only fire on the
 * initial load in an App Router SPA, so wire the GA4 page_view tag to this event.
 */
export default function RouteChangeEvents() {
  const pathname = usePathname();

  useEffect(() => {
    sendGTMEvent({
      event: "route_change",
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
