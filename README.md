# Strata Advanced Materials

Responsive React and Vite website for Strata Advanced Materials.

The Materials page is a quote-led storefront: visitors can search and filter material families, add selections to a persistent basket, enter requested amounts, and prepare a quote enquiry. Exact prices, grades, pack sizes, lead times, and stock are intentionally not invented; confirm those catalog details before launch. The site does not process payments.

## Product catalog

Catalog entries, featured materials, and homepage category descriptions are in `src/data/products.js`. Add confirmed product specifications as a `specifications` array of `[label, value]` pairs to replace the detail page placeholders.

## Run locally

1. Install Node.js if needed.
2. Run `npm install`.
3. Run `npm run dev` and open the local URL printed by Vite.

The site uses hash-based page navigation, so each section can be opened directly (for example `/#materials`).

## Enquiry form

The enquiry form is front-end only. To let it prepare an email, create a `.env` file and set `VITE_ENQUIRY_EMAIL` to the inbox that should receive enquiries. Submitting opens the visitor's email application with the enquiry details; the visitor sends the message from there. For automatic delivery, connect the form to a backend or form service.
