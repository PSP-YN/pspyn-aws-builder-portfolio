# PSP-YN — Independent Engineering Portfolio

A portfolio for documenting selected software projects, engineering experiments, recognition and learning. This repository is separate from my existing portfolio at [pspyn.vercel.app](https://pspyn.vercel.app).

## Stack

- Next.js 16 App Router with static export
- React 19 + TypeScript
- Custom responsive CSS
- Lucide icons

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verify

```bash
npm run typecheck
npm run build
```

The production build writes a static site to `out/`.

## Cloudflare Pages deployment

The project is configured for **static export** and can be hosted on Cloudflare Pages without a server runtime.

1. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git**.
2. Connect the GitHub account and grant access to `PSP-YN/pspyn-aws-builder-portfolio`.
3. Select the `main` branch.
4. Set the build command to `npm run build`.
5. Set the build output directory to `out`.
6. Deploy and verify the generated `.pages.dev` URL.

The GitHub integration must be authorized in Cloudflare before the repository can be selected. A Cloudflare Pages project has **not** been confirmed as created yet; add the live URL here only after a successful deployment.

### Hosting scope

This repository currently builds as a static frontend. It does not require a database, API keys, paid add-ons, or server-side Next.js features. Static export does not support Next.js features that require a server runtime, such as API routes, Server Actions, ISR, or runtime middleware. Reassess the hosting architecture before adding those features.

**Hosting disclosure:** Cloudflare Pages is the intended host for this deployment. It is not AWS hosting, and this repository does not claim that AWS services were used.

## Portfolio interaction

- Interactive project constellation with a project inspector.
- Featured project cards and searchable, filterable project explorer.
- Recognition and milestone section distinguishing awards, event roles, internship completion and participation.
- Responsive navigation, keyboard focus visibility and reduced-motion support.

## Accuracy policy

- Public projects link to their public repositories.
- Private projects use brief public-safe descriptions and expose no source links.
- Prototypes, runnable local demos and deployed products are labelled separately.
- Participation is not presented as an award; event coordination is not presented as a competition result.
- No fabricated user counts, revenue, performance metrics or impact claims are used.

## Submission checklist

- [ ] Create and verify the Cloudflare Pages deployment.
- [ ] Test navigation, project interactions, keyboard access and mobile layout on the live site.
- [ ] Add the verified live URL and repository URL to the challenge portal.
- [ ] Confirm that the challenge accepts a Cloudflare-hosted portfolio; do not describe it as AWS-hosted.
- [ ] Capture genuine screenshots of the live site and deployment.
- [ ] Submit only after checking every required field and eligibility condition.
