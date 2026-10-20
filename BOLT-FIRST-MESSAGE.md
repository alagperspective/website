# Paste this as your first message in Bolt

Copy everything between the lines.

---

This is the website for Alag Perspective Architects, an architecture and interior design studio in Nagpur. Please read these rules and follow them for every change in this project:

1. **Keep it a plain HTML, CSS and JavaScript site.** Do NOT convert it to React, Vite, Next.js or any framework, and do not add a package.json or build step. It is hosted on Cloudflare Pages as static files.
2. **File structure:**
   - `index.html` holds the design (CSS inside `<style>`), the page sections and the interactive JavaScript.
   - `content.js` holds the project data (`const P`, in display order) and the consultation planner data (`const PLAN`). Project text changes go there.
   - `videos/` holds short muted looping walk-through videos (900×900 mp4 with a .jpg cover of the same name).
   - `images/` holds photos. Photos are matched by name: `images/<project-slug>-1.jpg`, `-2.jpg`, `-3.jpg`, The big top photo and the About photo currently reuse `images/architects-home-1.jpg` and `images/architects-home-3.jpg`. If a file is missing, a placeholder shows instead.
3. **All colours and fonts are in the `:root` block (headings, menu, labels and buttons use Archivo via `--display`; body text uses Jost via `--body`) at the top of the `<style>` in index.html.** When I ask for colour or font changes, change those variables, not individual elements.
4. **Do not break these interactive features:**
   - the mobile menu (button `#burger`, panel `#drawer`) and the phone bottom bar (`.bar`, WhatsApp + Call)
   - the project cards and the project case-study pop-up (`<dialog id="dlg">`). Cards only appear when `images/<slug>-1.jpg` exists; keep that rule.
   - the single consultation form in `#contact`: three questions, the "what your project will involve" box, name and phone, and the "Book a free consultation" button that opens WhatsApp to +91 95455 77311 with the answers filled in
   - the "Inside the Architect's Home" video row (`#inside`) and its "See the full project" button
   - every main button says "Book a free consultation" and links to `#contact`; keep it that way
5. **Keep the site working on phones** (around 390 px wide) with no sideways scrolling.
6. Keep the phone number +91 95455 77311, the email alagperspective@gmail.com and the studio address exactly as they are unless I ask.
7. Make only the change I ask for, then tell me in one or two lines what you changed.

Please confirm you understand. Don't change anything yet.

---
