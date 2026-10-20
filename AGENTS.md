# Linkly — Project Instructions for Codex

## Role and objective

Act as a senior UX/UI designer, design systems designer, and senior frontend engineer working on **Linkly**, an existing URL-shortening application.

Your task is to improve the app's visual presentation and user experience while preserving its existing implementation and behavior. This is a **UI/UX redesign of an existing project**, not a rebuild.

Before starting, read `UI_DESIGN_GUIDELINES.md` in this repository and follow it together with the protection rules below.

## Highest-priority rule: preserve functionality

**The existing project is the source of truth. Preserve its code and behavior. Visual quality must never take priority over working functionality.**

Linkly's core product journey is:
1. A visitor enters a long/original URL in the existing input.
2. They trigger the existing shorten/generate action.
3. The application creates or retrieves a unique short URL using its existing implementation.
4. The short URL redirects to the exact original destination according to the existing redirect behavior.

Do not break or redesign the underlying mechanics of this flow.

### Do not modify backend or business logic

Unless the user explicitly asks for a functional change in a later request, do not modify, replace, remove, or refactor:

- Backend/server code, controllers, server routes, middleware, or redirect handlers.
- URL shortening algorithms, unique-code generation, collision handling, or slug/code rules.
- Redirect behavior, destination resolution, URL persistence, or link lookup logic.
- Database schemas, migrations, models, queries, repositories, or persistence logic.
- API endpoint paths, HTTP methods, request/response contracts, payload structures, or API clients.
- Frontend route definitions, route names, route parameters, navigation guards, or URL patterns.
- Authentication, authorization, session behavior, permissions, or account handling.
- Existing validation rules, URL normalization rules, security checks, error handling, and business rules.
- State-management stores, composables, services, or data-fetching logic.
- Existing form submit handlers, asynchronous functions, event handlers, or clipboard logic.
- Existing analytics, click tracking, link expiration, custom alias, QR-code, history, or dashboard features, if present.
- Environment configuration, secrets, deployment setup, and infrastructure files.

Do not invent APIs or replace live data with mock data. Do not hardcode example short links as if they were real results. Do not add functionality merely to make a UI mockup appear complete.

### UI changes should remain presentation-focused

Prefer changes to:

- Existing Vue/React/frontend templates and presentation markup.
- CSS, scoped styles, design tokens, typography, spacing, colors, and layout.
- Visual states for components that are already connected to working logic.
- Reusable presentation components, only when they can be introduced safely.
- Responsive behavior, semantic markup, accessible names, focus states, and image/icon presentation.

Use the framework and styling approach already present in the repository. Do not assume a specific framework until you have inspected the project.

When editing a component, preserve its existing scripts, imports, props, emits, reactive state, computed values, watchers, functions, handlers, model bindings, API calls, directives, and form semantics. Rearrange markup only where needed, and keep each existing action connected to the same behavior.

Preserve existing `v-model`, `v-if`, `v-for`, `@click`, `@submit`, route links, React handlers, component props, emitted events, and analogous framework bindings as applicable.

Do not rename existing variables, methods, fields, props, events, or API response properties to fit the new design. Do not remove controls or fields just because the new composition makes them inconvenient; place and style them appropriately instead.

If a design detail appears to require changes to backend logic, API contracts, routing, or core behavior, **do not make those changes**. Use a safer presentation-only approach, or leave that detail unchanged and mention the limitation in the final report.

## Protect existing work

Before editing:
1. Inspect the repository structure and identify the frontend presentation layer and the code responsible for shortening and redirects.
2. Check `git status` and the current diff if Git is available.
3. Preserve all pre-existing uncommitted changes. Do not overwrite work that was already in progress.
4. Identify relevant existing pages, components, styles, icons, dependencies, routes, and integrations.

Never use destructive Git commands, reset the branch, discard user changes, or revert existing work as a convenience.

After editing:
1. Inspect the full diff.
2. Confirm that changes are limited to necessary presentation-layer files whenever possible.
3. Check that no backend code, redirect handler, URL generation logic, database, API contract, or route definition was unintentionally modified.
4. Run the existing build, lint, type-check, or tests if available and appropriate.
5. Report what was verified and what could not be verified. Never claim a behavior was tested if it was not.

Do not make unrelated refactors, dependency changes, or project-wide rewrites.

## Expected outcome

Deliver a distinctive and polished Linkly interface that looks purpose-built for URL shortening, feels trustworthy and fast, works responsively, and preserves the current application behavior.

At completion, summarize the visual changes, files changed, checks run, and any limitations. Explicitly state whether backend, routing, API, database, or URL-generation/redirect logic files were modified. The expected answer is **no** for a UI-only task.
