# Paste this as your first message in Bolt

Copy everything between the lines.

---

This is the website for Alag Perspective Architects, an architecture and interior design studio in Nagpur. Please read these rules and follow them for every change in this project:

1. **Keep it a plain HTML, CSS and JavaScript site.** Do NOT convert it to React, Vite, Next.js or any framework, and do not add a package.json or build step. It is hosted on Cloudflare Pages as static files.
2. **File structure:**
   - `style.css` holds the design for every page.
   - `index.html` is the home page: its sections and interactive JavaScript.
   - `project.html` is ONE template for all project pages. It reads `?p=<slug>` from the address (e.g. `project.html?p=office-interiors`) and fills itself from content.js. Do not create separate HTML files per project.
   - `content.js` holds the projects (`const P`, in display order, six of them), the `SHOW_EMPTY` switch, the planner data (`const PLAN`) and the reviews. Project text changes go there.
   - `videos/` holds short muted looping walk-through videos (900×900 mp4 with a .jpg cover of the same name).
   - `images/` holds photos. Photos are matched by name: `images/<project-slug>-1.jpg` (card + top photo), then `-2.jpg`, `-3.jpg`... (one per caption in `photos`). Sites in Progress uses `sites-in-progress-site-N.jpg` per site; Competitions & Awards uses `competitions-awards-item-N.jpg`. The big home photo and the About photo reuse `images/architects-residence-1.jpg` and `-3.jpg`. If a file is missing, a placeholder shows instead.
3. **All colours and fonts are in the `:root` block (headings, menu, labels and buttons use Archivo via `--display`; body text uses Jost via `--body`).** When I ask for colour or font changes, change those variables, not individual elements.
4. **Do not break these interactive features:**
   - the mobile menu (button `#burger`, panel `#drawer`) and the phone bottom bar (`.bar`, WhatsApp + Call)
   - the bento project grid on the home page (first project large; covers cross-fade through `<slug>-1.jpg`, `-2.jpg`... on hover, and on phones while on screen), whose cards link to `project.html?p=<slug>`, and the project page template, in this order: full-screen hero (`heroVideo` if set, else photo -1) with the title, key facts, the best 3 photos, walk-through videos, the story, "More from the project", site/award list, "Next project". With `SHOW_EMPTY=false` a project only appears once `images/<slug>-1.jpg` exists; keep that rule.
   - the single consultation form in `#contact`: three questions, the "what your project will involve" box, name and phone, and the "Book a free consultation" button that opens WhatsApp to +91 95455 77311 with the answers filled in
   - the "Inside the Architect's Home" video row (`#inside`) and its "See the full project" button
   - every main button says "Book a free consultation" and links to `#contact`; keep it that way
5. **Keep the site working on phones** (around 390 px wide) with no sideways scrolling.
6. Keep the phone number +91 95455 77311, the email alagperspective@gmail.com and the studio address exactly as they are unless I ask.
7. Make only the change I ask for, then tell me in one or two lines what you changed.

Please confirm you understand. Don't change anything yet.

---
