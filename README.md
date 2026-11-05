# PSP-YN — AWS Student Builder Challenge Portfolio

A new, independent portfolio website built for the AWS Student Builder Challenge. This repository is separate from my existing portfolio and does not replace it.

## Stack
- Next.js 16 App Router
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

## Deploy with AWS Amplify Hosting
1. Open the AWS Amplify console.
2. Choose **New app → Host web app** and connect GitHub.
3. Select `PSP-YN/pspyn-aws-builder-portfolio`, branch `main`.
4. Use the Next.js framework preset and the detected build settings.
5. Save and deploy. The repository contains no required API keys or paid-service dependencies.

Amplify should detect the Next.js app automatically. Review the generated build settings before deployment and verify the resulting URL after the build completes.

## Portfolio interaction
The hero includes an interactive project constellation. Selecting a node updates the project inspector. The page also includes featured work, searchable/filterable project listings, a responsive navigation menu, and reduced-motion support.

## Project presentation
- Six public projects are featured.
- Additional selected projects appear in the project explorer.
- Private projects have short public-safe descriptions and no source links.
- Project descriptions distinguish prototypes from deployed or runnable work.

## AWS challenge submission checklist
- [ ] Connect this repository to AWS Amplify Hosting.
- [ ] Confirm the production build succeeds.
- [ ] Test the deployed website on desktop and mobile.
- [ ] Capture screenshots of the portfolio and Amplify deployment.
- [ ] Add the live URL and repository URL to Builder Center.
- [ ] Describe the interactive Build Map, AWS services used, learnings and challenges.
