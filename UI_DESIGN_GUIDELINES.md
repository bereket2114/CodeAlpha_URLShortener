# Linkly — UI/UX Design Guidelines

## 1. Product vision

Linkly is a URL-shortening tool. A visitor pastes a long/original URL, selects the existing **Shorten link** or **Generate link** action, receives a short unique URL, and can use that short URL to reach the original destination.

Design the existing application so the purpose is immediately obvious: **turn a long link into a short, shareable link in seconds**.

The interface should feel like a real, dependable internet utility: fast, focused, modern, friendly, and trustworthy. Make URL shortening the central experience rather than burying it in a generic marketing page or an oversized dashboard.

This document defines the visual and interaction direction only. It does not authorize changes to URL generation, redirects, API contracts, persistence, or other underlying functionality. Read and follow `AGENTS.md` first.

## 2. Brand character

Use the name **Linkly** consistently where the existing application already exposes its brand. Create a memorable but restrained identity around links, connection, clarity, and speed.

Desired qualities:
- Clear and easy to understand at first glance.
- Modern and product-led, not a generic landing-page template.
- Light, quick, and approachable without feeling childish.
- Trustworthy when users submit and share URLs.
- Minimal enough that the core action stands out, with enough personality to be recognizable.

Do not imitate another URL-shortening service's exact design, layout, wording, or brand identity. Produce an original visual system that fits the actual project.

## 3. Color and visual system

Inspect existing branding and reusable tokens first. If the repository already has an intentional palette, refine and reuse it. If not, consider this starting palette:

- Deep ink/navy `#171A2B`: primary text and selected dark surfaces.
- Clear indigo `#5457E8`: primary action and key brand accent.
- Bright mint `#42D6AE`: small positive accents and success details, used with accessible contrast.
- Soft cool background `#F5F6FB`: app background or subtle page sections.
- White `#FFFFFF`: main input and content surfaces.
- Muted slate `#687086`: secondary text.
- Fine border `#E3E6F0`: input outlines and separators.
- Error red and success green only for genuine existing feedback states, not decoration.

Treat these as suggestions, not permission to overwrite an established brand. Use a small, consistent palette. Ensure readable contrast, including button text, placeholder text, helper text, and focus indicators. Avoid using gradients everywhere, neon overload, dark backgrounds on every section, or a different accent color for every component.

Establish reusable tokens for color, spacing, typography, borders, focus rings, radii, and shadows in the project's existing styling approach. Avoid introducing a new styling framework only for this redesign.

## 4. Typography and visual personality

Use clear, contemporary typography with excellent readability. A strong sans-serif family is appropriate; use existing fonts where they already fit. Only add a font dependency if it is justified and safe for the project.

Create an obvious hierarchy between:
- Linkly brand and page heading.
- One-sentence explanation of the tool.
- URL input and primary action.
- Generated short-link result.
- Helper text, validation, and secondary content.

Keep headings confident but not oversized. Use comfortable line height and sensible text widths. Avoid tiny labels, excessive uppercase text, long marketing paragraphs, and decorative type that makes URLs difficult to read.

URLs should be displayed in a legible, selectable format and should wrap or scroll safely on narrow screens without causing page-wide horizontal overflow.

## 5. Main shortening experience

The URL input and shortening action are the centerpiece of Linkly. Make this flow obvious immediately when the page loads.

### Page structure

Use a clean, balanced layout with a branded header, a concise hero/message, and a prominent URL-shortening workspace. Keep the form above the fold on common desktop sizes when practical, without cramming content or harming mobile layouts.

Suggested message direction (adapt to the existing product copy and localization):
- Headline: “Shorten links. Share with ease.”
- Supporting line: “Turn long URLs into clean, shareable links in seconds.”

These are examples, not mandatory exact copy. Keep language concise and honest. Do not invent claims about security, uptime, popularity, or usage statistics.

### URL input

Style the existing long-URL input as the most prominent field on the page.

- Use a clear visible label or accessible name that describes the expected original URL.
- Provide a helpful placeholder example, but do not use the placeholder as the only label.
- Make the field spacious, readable, and easy to focus.
- Use a clear border or focus ring, and sufficient spacing from the primary button.
- Preserve the existing input binding, validation, and submit handler.
- Retain the actual validation feedback and show it close to the input where possible.
- Do not silently transform the user's URL or change normalization/validation behavior as part of a visual redesign.

### Primary action

Style the existing **Shorten link**, **Generate link**, or equivalent button as the primary call to action. Use the actual existing button label and behavior where possible; do not create a duplicate submit action.

The button should have clear hover, focus, pressed, disabled, and loading states when supported by existing state. Keep the label and accessible name clear. Do not simulate processing or success independently of the existing application logic.

### Generated result state

When the existing application returns a short URL, present it in a visually distinct result area directly associated with the form.

Where existing functionality supports it, make the result easy to:
- Read and select.
- Copy using the existing copy action.
- Open or visit using the existing link/action.
- Understand as the newly generated short link.

Use clear success feedback only when the application confirms success. If clipboard functionality already exists, keep it intact and style its feedback. Do not invent or hardcode a short link. Do not add a fake result to make the initial page look populated.

### Loading, error, and empty states

Style all states already supported by the application consistently:
- Initial/empty state: focused form and helpful, minimal instructions.
- Loading state: clear feedback during the existing request.
- Success state: short URL presented prominently, with existing available actions.
- Validation or server error: concise and accessible feedback explaining the problem without concealing the input.

Do not invent new business states or claim a URL has been created if the existing operation has not succeeded.

## 6. Page composition and supporting content

Make the page feel complete without distracting from the main task. Use restrained supporting elements only when they improve understanding or confidence.

Potential presentation elements, only if consistent with existing content and project scope:
- A small visual motif based on a long link becoming a compact link.
- A subtle connected-link illustration or simple iconography.
- A concise three-step explanation: paste a URL, shorten it, share it.
- A small explanatory section describing how to use the tool.
- Existing navigation, account access, or footer content.

Do not invent unsupported functionality or add nonfunctional controls. Do not add fake statistics, testimonials, customer logos, fabricated recent links, plan comparisons, analytics charts, QR-code controls, custom aliases, or link management dashboards unless those features already exist in the repository.

Do not add filter panels or unnecessary interface complexity. The product's main promise should remain the shortest path from input to useful result.

## 7. Header, branding, and navigation

Create a compact, polished header using the existing navigation and routes. If the brand mark already exists, refine rather than replace it. If no mark exists, a small link/chain-inspired icon may be appropriate if the current icon system already supports it.

Keep header content purposeful. Preserve all current destinations, visibility rules, and authentication behavior. Do not add links that lead nowhere or invent account capabilities.

## 8. Micro-interactions and details

Use small, intentional interactions to make the application feel refined:
- Clear hover and keyboard-focus states.
- Subtle button press feedback.
- Smooth but quick transitions where appropriate.
- Consistent input focus treatment.
- Clear spacing and alignment.
- Consistent border radii and subtle shadows.
- Useful existing copy-success, loading, validation, and error feedback.

Respect `prefers-reduced-motion`. Avoid distracting animations, constant movement, excessive blur, glassmorphism everywhere, or transitions that delay task completion.

Do not make an important action discoverable only on hover. Every existing interactive control must remain functional.

## 9. Responsive design

Design for desktop, tablet, and mobile, not simply a shrunken desktop page.

- Keep the input and primary action comfortable to use on touch screens.
- Stack input and button vertically when that gives mobile users a better experience.
- Make generated short links readable and copyable on narrow screens.
- Avoid horizontal page overflow from long URLs, code strings, or decorative elements.
- Maintain useful spacing and line lengths at every breakpoint.
- Make navigation responsive while preserving its existing destinations and behavior.
- Avoid layouts that require hover to access copy or open actions.

Use the repository's existing responsive approach and breakpoints where possible.

## 10. Accessibility and trust

A URL-shortening tool handles user-provided destinations, so clarity and feedback matter.

- Use semantic headings, labels, buttons, and links.
- Ensure keyboard operation and visible focus indicators.
- Keep color contrast sufficient for text and controls.
- Provide accessible names for icon-only buttons.
- Announce important success or error messages accessibly using the project's existing patterns, where feasible without changing business logic.
- Ensure copied/success/error feedback is not conveyed by color alone.
- Do not misrepresent the destination, shorten-link result, or processing status.
- Preserve existing URL validation and security behavior. This design document does not authorize loosening safety checks or changing redirect rules.

## 11. Implementation boundaries

Before editing, inspect the actual codebase and identify its framework, routing, styling method, UI components, API integration, and current shortening/redirect flows.

- Follow `AGENTS.md` strictly.
- Reuse existing components and conventions.
- Prioritize presentation markup and styles.
- Preserve all existing state, bindings, form actions, API calls, redirect routes, and response handling.
- Do not replace working logic with mocks or sample data.
- Do not add a new UI framework or unnecessary dependency.
- Do not rewrite the project from scratch.
- Keep unrelated files untouched.
- Check the diff after implementation.

If visual changes can only be achieved by modifying underlying URL generation, API behavior, redirect logic, routes, storage, or security rules, do not make that change. Choose a safer visual solution and report the limitation.

## 12. Acceptance criteria

The redesign is successful when:

- A first-time visitor understands what Linkly does within a few seconds.
- The URL input and main action are the clear visual focus.
- The overall product feels purposeful, contemporary, polished, and trustworthy.
- A successful shortening result is easy to recognize, read, copy, and open using existing functionality.
- Existing validation, loading, success, failure, and clipboard behaviors remain connected to real application state.
- Existing short-link generation and original-destination redirects remain unchanged.
- The visual identity is cohesive and original rather than a copy of another website.
- The UI adapts cleanly to desktop, tablet, and mobile.
- No fake functionality, sample result, invented metric, or unsupported feature has been introduced.
- Existing backend integrations, API contracts, route definitions, URL-generation behavior, and redirect logic remain intact.
- The project builds and passes available checks, or any verification limitation is clearly reported.

## Final design principle

Make Linkly feel like a product people can understand and trust immediately: one clear input, one obvious action, one satisfying result. Create a memorable visual identity, but keep the interface fast, simple, accessible, and focused. Preserve the actual application behavior while improving the UI only.
