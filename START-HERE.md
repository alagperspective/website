# Alag Perspective website – start here

This folder is your whole website. Nothing else is needed.

| File | What it is |
|---|---|
| `index.html` | The website: design, layout and all interactive parts |
| `content.js` | Your projects and the "Plan your project" timelines. Easy to edit. |
| `images/` | Your photos. See `images/PHOTO-NAMES.txt` for the exact names to use. |
| `BOLT-FIRST-MESSAGE.md` | Paste this into Bolt before asking for any change |
| `READY-PROMPTS.md` | Copy-paste requests for common changes |

The plan: **GitHub** keeps the site safe → **Bolt** edits it → **Cloudflare Pages** puts it online free → **GoDaddy** points your domain to it.

---

## Step 1 · Put the site on GitHub (10 min)

1. Go to **github.com** and create a free account.
2. Click **+** (top right) → **New repository**.
   - Name: `alag-website`
   - Choose **Private** (Bolt and Cloudflare can still use it)
   - Click **Create repository**
3. On the new page, click **uploading an existing file**.
4. Unzip this package on your computer. Open the `alag-perspective-website` folder, select everything inside it (including the `images` folder) and drag it into the browser window.
5. Click **Commit changes**.

Your website is now stored safely. Every future change is saved as a version you can go back to.

## Step 2 · Connect Bolt to GitHub (5 min)

1. Go to **bolt.new** and sign in.
2. Below the chat box, click **GitHub** and log in. Authorise **StackBlitz** (Bolt's parent company).
3. Click **Install the GitHub App**, choose **Only select repositories**, pick `alag-website`, then **Install & Authorize**.
4. Back on the Bolt homepage, click **GitHub** again, select `alag-website` from the list and click **Choose this repository**.
5. Bolt opens your site. Paste the text from `BOLT-FIRST-MESSAGE.md` as your first message.

From now on, **every change you make in Bolt is saved to GitHub automatically.** There is no separate "push" or "upload" step.

## Step 3 · Host it free on Cloudflare Pages (10 min)

1. Go to **dash.cloudflare.com** and create a free account.
2. Open **Workers & Pages** → **Create** → choose the **Pages** tab → **Connect to Git**.
3. Connect your GitHub account and pick `alag-website`.
4. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/`
5. Click **Save and Deploy**.

In a minute you get a free test address like `alag-website.pages.dev`. Open it on your phone and check everything.

From now on: **change in Bolt → saved to GitHub → Cloudflare updates the live site by itself**, usually within a minute.

> If Bolt ever converts the site into a "Vite" or "React" project (a `package.json` file appears), change the build settings to command `npm run build` and output `dist`. The first message to Bolt asks it not to do this.

## Step 4 · Connect your GoDaddy domain (15 min, plus waiting)

Do this only when you are happy with the site on the test address. Your current Google Sites site stays live until this step.

**4a · Add the domain to Cloudflare**
1. In Cloudflare, click **Add a domain**, enter `alagperspectivearchitect.in` and choose the **Free** plan.
2. Cloudflare copies your existing DNS records. **Check that any MX records (email) are in the list.** If you use email on this domain, they must be there.
3. Cloudflare shows you **two nameservers** (for example `xxx.ns.cloudflare.com`). Keep this page open.

**4b · Point GoDaddy to Cloudflare**
1. In GoDaddy, go to **My Products** → `alagperspectivearchitect.in` → **DNS** → **Nameservers** → **Change Nameservers**.
2. Choose **I'll use my own nameservers** and paste the two Cloudflare nameservers.
3. Save. This can take from a few minutes up to 24 hours. Cloudflare emails you when it's active.

Your domain stays registered and renewed at GoDaddy as before. Only the "address book" moves to Cloudflare.

**4c · Attach the domain to your site**
1. In Cloudflare, go to **Workers & Pages** → `alag-website` → **Custom domains** → **Set up a custom domain**.
2. Add `alagperspectivearchitect.in`, then add `www.alagperspectivearchitect.in` too.
3. If Cloudflare says a record already exists (the old one pointing to Google), delete that old record under **DNS** and try again.
4. HTTPS (the padlock) is added automatically.

**4d · Retire the old Google Sites address**
In Google Sites, open your site → **Settings** (gear icon) → **Custom domains** → remove `alagperspectivearchitect.in`.

---

## Adding your photos

1. Rename each photo to the exact name in `images/PHOTO-NAMES.txt`, for example `bliss-1.jpg`.
2. Compress them first so each is about 300–500 KB. Free tool: **squoosh.app**. Use a width of about 1600 px.
3. On github.com, open `alag-website` → the `images` folder → **Add file** → **Upload files** → drag the photos in → **Commit changes**.

The site shows a photo automatically as soon as a file with the right name exists. You don't need to change any code.

## If something breaks

Every change is a saved version on GitHub.
- **In Cloudflare:** Workers & Pages → `alag-website` → **Deployments** → find the last good one → **⋯** → **Rollback**. The live site is fixed in seconds.
- **In GitHub:** open the repository → **Commits** to see every past version.
