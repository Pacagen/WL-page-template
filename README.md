## LKDH WL page template (clone this repo when starting a new project please)

# Steps
1. Clone the repo.
2. Find-and-replace the placeholders in Site name. Do the bracketed ones first (`[WEBSITEURL]`, `[WEBSITENAME]`, `[WEBSITESHORTHAND]`, the social URL tokens, `[CONVERGE_PIXEL_URL]`), then the bare `WEBSITESHORTHAND` in variable names. Replacing the bare token first also rewrites the bracketed one.
3. Swap the logo files. Paths can stay.
4. Rewrite the homepage and the boilerplate pages: `index.html`, `about.html`, `contact.html`, `corrections.html`, `using-our-articles.html`, `submit.html`, `terms.html`, `privacy-policy.html`, `methods/`, and `experts/`.
5. Replace the sample articles. A page is `articles/{category}/{year}/{month}/{slug}.html` plus a matching entry in `assets/js/articles.js`. Search, the homepage grid, and related links all read that file, so delete or add the HTML and the manifest entry together. Update `sitemap.xml` when the URL list changes.
6. Check the outbound click domains in `tracking.js`.
7. Deploy with GitHub Pages. Delete this README first. These instructions contain the placeholder tokens, so a global replace will edit this file too.

# Site name
- `[WEBSITENAME]` is a placeholder and needs to be updated before launch. Search the repo for `[WEBSITENAME]` and replace every occurrence with the real site name.
- `[WEBSITEURL]` is the domain placeholder, with no `https://`. Search and replace it with the real domain, for example `marketingorscience.com`. That covers canonicals, the footer, sitemap, and CNAME.
- `[WEBSITESHORTHAND]` is a placeholder as well, update with shorthand for website. Used in debugging logs and event names etc. use whatever case you want that's not kebab case (kebab case = marketing-or-science)
- `WEBSITESHORTHAND` is a placeholder in variable names. update with all caps shorthand for website. It has to stay a valid JavaScript identifier: letters, numbers, and underscores. Spaces or hyphens will break the website. Valid: `MARKETINGORSCIENCE`, `MOS`. Invalid: `MARKETING-OR-SCIENCE`, `M-O-S`
- Social links: `[INSTAGRAM_URL]`, `[YOUTUBE_URL]`, `[X_URL]`, `[SUBSTACK_URL]`. Replace each with the full profile URL and do not add a trailing slash on `[SUBSTACK_URL]`, because the subscribe link appends `/subscribe`.
- Logos: replace the files `assets/images/logo/logo-dark.svg`, `logo-light.svg`, and `favicon.svg`. The paths can stay.

# General site structure
- Keep images stored in the assets/images folder
- update articles.js to support site-search
- js/ has some .js files that init disclaimers, footers, cta blocks etc. this is a forked repo off of MOS. If you want to maintain functionality and have it look similar to MOS you can keep it, otherwise just delete. 
- There's an about.html page, contact.html, corrections.html, using-our-articles.html, submit.html, and terms.html that will likely need its copy changed based on the theme/angle of each WL website. Leaving MOS boilerplate in for now, but update as needed. 
- css on this repo is minimal

# Tracking
The following needs to be updated:
- `[CONVERGE_PIXEL_URL]` in head-components.js. Replace it with the full https script URL. Until that value starts with `https://`, the pixel does not load, so a fork will not send traffic to another site's account.
- Event names (in tracking.js, will be replaced when `[WEBSITENAME]` is globally searched and replaced)
- Outbound click domains in tracking.js (`getreyou.com`, `pacagen.com`, `drinkwildtype.com`). Edit that list if sending traffic to other domains that we have a cvg pixel on.
- Current tracking appends __cvg_uid and __cvg_sid for cross-domain stitching within converge. Important that it remains as such

# Deploying
- Generally, just deploy through github pages. it's free and easy to use
- Repo needs to be public and cannot have a currently live github pages deployment on its context
- Delete this readme before you publish the repo. VERY IMPORTANT!!!!!!!!!!
