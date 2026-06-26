# AI Ascension Score — NOVA Lead Magnet

Quiz tool that captures email to Brevo list 18, scores AI readiness, and shows income gap.

## Deploy to Vercel

1. Push this folder to a new GitHub repo
2. Import repo in Vercel
3. Add environment variable in Vercel dashboard:
   - `BREVO_API_KEY` = your Brevo API key

## Before going live

- Update the NOVA waitlist URL in `public/index.html` (search for `jadejanosi.com`)
- Replace with your actual NOVA waitlist or sales page URL

## How it works

1. User completes 8-question quiz
2. Email gate captures first name + email
3. Email is added to Brevo list 18 with AI score and tier as custom attributes
4. Results page shows score, tier, income gap analysis, breakdown, and NOVA CTA
5. Download button triggers browser print-to-PDF
6. Share button uses Web Share API on mobile, copies URL on desktop
