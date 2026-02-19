# realtom.bot deploy steps

## 1) Deploy static site to Vercel
From this directory:

```bash
cd ~/.openclaw/workspace-tombot-cto/realtom-bot-site
npx vercel --prod
```

## 2) Bind domain in Vercel
Project → Settings → Domains → add:
- `realtom.bot`
- `www.realtom.bot` (optional)

## 3) DNS at Namecheap
Set records:
- `A` host `@` → `76.76.21.21`
- `CNAME` host `www` → `cname.vercel-dns.com`

## 4) Upload RTB logo
Place logo file at site root as:
- `rtb-logo.png`

Then verify:
- `https://realtom.bot/rtb-logo.png`

This URL is used in RTB token metadata.
