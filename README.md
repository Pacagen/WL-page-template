## LKDH WL page template (clone this repo when starting a new project please)

# Site name
- `[WEBSITENAME]` is a placeholder and needs to be updated before launch. Search the repo for `[WEBSITENAME]` and replace every occurrence with the real site name.
- `[WEBSITESHORTHAND]` is a placeholder as well, update with shorthand for website. Used in debugging logs and event names etc. use whatever case you want that's not kebab case (kebab case = marketing-or-science)
- `WEBSITESHORTHAND` is a placeholder in variable names. update with all caps shorthand for website

# General site structure
- Keep images stored in the assets/images folder
- update articles.js to support site-search

# Tracking
The following needs to be updated:
- Converge pixel (in head-components.js)
- Event names (in tracking.js, will be replaced when `[WEBSITENAME]` is globally searched and replaced)
- Current tracking appends __cvg_uid and __cvg_sid for cross-domain stitching within converge. Important that it remains as such

# Deploying
- Generally, just deploy through github pages. it's free and easy to use
- Repo needs to be public and cannot have a currently live github pages deployment on it
- Delete this readme before you publish the repo. VERY IMPORTANT!!!!!!!!!!
