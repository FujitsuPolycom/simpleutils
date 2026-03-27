# SimpleUtils Launch Checklist

## Pre-Launch: Infrastructure

### Domain & DNS
- [ ] Register domain: `simpleutils.org` (or alternative)
- [ ] Configure DNS A record pointing to hosting server
- [ ] Set up www subdomain (CNAME or redirect)
- [ ] Configure SSL certificate (Let's Encrypt recommended)
- [ ] Test DNS propagation

### Hosting Setup
- [ ] Choose hosting (Netlify, Vercel, Cloudflare Pages, or VPS)
- [ ] Deploy static files to hosting
- [ ] Configure nginx/web server (if VPS):
  ```nginx
  server {
      listen 80;
      server_name simpleutils.org www.simpleutils.org;
      root /var/www/simpleutils.org;
      index index.html;
      
      location / {
          try_files $uri $uri/ =404;
      }
      
      # Cache static assets
      location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2|ttf|eot)$ {
          expires 1y;
          add_header Cache-Control "public, immutable";
      }
      
      # Security headers
      add_header X-Frame-Options "SAMEORIGIN" always;
      add_header X-Content-Type-Options "nosniff" always;
      add_header Referrer-Policy "no-referrer-when-downgrade" always;
  }
  ```
- [ ] Enable HTTP/2
- [ ] Configure compression (gzip/brotli)
- [ ] Test site loads correctly

### Performance
- [ ] Run Lighthouse audit (target 90+ on all metrics)
- [ ] Optimize images (already using emojis, but check any future images)
- [ ] Test mobile performance
- [ ] Set up CDN if needed (Cloudflare free tier works great)
- [ ] Verify Tailwind CSS CDN loads quickly

---

## Launch Week: SEO & Discovery

### Google Search Console
- [ ] Create Google Search Console account
- [ ] Add property for simpleutils.org
- [ ] Verify ownership (HTML file or DNS TXT record)
- [ ] Submit sitemap.xml
- [ ] Request indexing for homepage
- [ ] Monitor crawl errors for first week

### SEO Fundamentals
- [ ] Verify all meta tags are in place
- [ ] Test Open Graph preview with https://www.opengraph.xyz/
- [ ] Test Twitter Card preview
- [ ] Create Google Business Profile (optional)
- [ ] Add schema.org markup (✓ already in index.html)

### Analytics
- [ ] Set up Google Analytics 4 (or Plausible for privacy-focused alternative)
- [ ] Add tracking code to index.html
- [ ] Set up goals/events for tool clicks
- [ ] Configure search tracking

### AdSense Application
- [ ] Apply for Google AdSense account
- [ ] Wait for approval (usually 1-2 weeks)
- [ ] Replace `<!-- ADSENSE_HEADER -->` and `<!-- ADSENSE_SIDEBAR -->` comments with actual ad units
- [ ] Test ad placement doesn't hurt UX
- [ ] Monitor earnings and optimize placement

---

## Launch Day: Community & Social

### Product Hunt
- [ ] Create Product Hunt account
- [ ] Prepare launch post:
  - **Tagline:** "25 fast, free browser tools. No signup, no BS."
  - **Description:** Focus on privacy, speed, no data collection
  - **Screenshots:** Homepage + 2-3 popular tools
  - **First comment:** Explain your motivation, ask for feedback
- [ ] Schedule launch for Tuesday-Thursday (best engagement)
- [ ] Ask friends to upvote in first hour
- [ ] Respond to every comment promptly
- [ ] Share PH link on Twitter/X

### Reddit Launch Posts
**Target Subreddits:**
- [ ] r/SideProject (perfect fit)
- [ ] r/webdev (developers will appreciate it)
- [ ] r/InternetIsBeautiful (if tools are impressive)
- [ ] r/selfhosted (privacy angle)
- [ ] r/privacy (emphasize no tracking)
- [ ] r/opensource (if you open-source it later)
- [ ] r/startups (growth/business angle)

**Reddit Post Template:**
```
Title: I built SimpleUtils – 25 free browser tools that don't track you

I got tired of online tools that require signup, track everything, or are slow AF.

So I built SimpleUtils – a collection of 25 browser-based tools that:
- Run 100% client-side (your data never leaves your browser)
- No signup, no BS
- Fast and mobile-friendly

Tools include: image resizer, QR generator, JSON formatter, password generator, and 20 more.

Link: https://simpleutils.org

All feedback welcome! What other tools should I add?
```

- [ ] Space out Reddit posts (1-2 per day max)
- [ ] Engage with comments, don't just drop links

### Social Media

**Twitter/X:**
- [ ] Create @SimpleUtils account (or use personal account)
- [ ] Launch thread:
  1. Hook: "I built 25 privacy-focused web tools. No signup. No tracking. No BS."
  2. Problem: "Every online tool wants your email, tracks you, or costs $9.99/mo"
  3. Solution: "SimpleUtils runs 100% in your browser. Zero data collection."
  4. Screenshots of 3-4 best tools
  5. Link + call-to-action
- [ ] Use hashtags: #buildinpublic #webdev #privacy #indiedev
- [ ] Tag relevant accounts (@ProductHunt, @github if open source)
- [ ] Post individual tool highlights over next 2 weeks

**Hacker News:**
- [ ] Submit to Show HN: https://news.ycombinator.com/submit
- [ ] Title: "Show HN: SimpleUtils – 25 browser tools with no tracking"
- [ ] Best day: Tuesday-Thursday morning PST
- [ ] Respond to all comments quickly
- [ ] Be humble, technical, and focus on privacy/performance

**LinkedIn** (optional):
- [ ] Post about the launch
- [ ] Focus on business angle (meeting cost calculator, invoice generator)
- [ ] Tag relevant hashtags: #productivity #webtools

---

## Post-Launch: Directory Submissions

### Tool/SaaS Directories
- [ ] AlternativeTo - https://alternativeto.net/
- [ ] Product Hunt (already listed above)
- [ ] SaaSHub - https://www.saashub.com/
- [ ] Capterra - https://www.capterra.com/
- [ ] G2 - https://www.g2.com/
- [ ] Slant - https://www.slant.co/
- [ ] StackShare - https://stackshare.io/
- [ ] BetaList (if still building) - https://betalist.com/
- [ ] IndieHackers - https://www.indiehackers.com/

### Developer/Tech Directories
- [ ] Tiny Tools - https://tiny-tools.io/
- [ ] Uneed - https://www.uneed.best/
- [ ] ToolFinder - https://toolfinder.co/
- [ ] DevHunt - https://devhunt.org/
- [ ] Free For Dev - https://free-for.dev/

### Privacy/Open Source
- [ ] PrivacyTools - https://www.privacytools.io/ (if open-sourced)
- [ ] AlternativeTo (mark as privacy-focused)

---

## Week 2-4: Growth & Iteration

### Content Marketing
- [ ] Write blog post: "Why I built SimpleUtils"
- [ ] Write technical post: "Building 25 browser tools with vanilla JS"
- [ ] Submit to dev.to, Medium, Hashnode
- [ ] Create comparison posts (e.g., "SimpleUtils vs TinyPNG")

### Community Building
- [ ] Set up feedback mechanism (simple form or email)
- [ ] Monitor social mentions
- [ ] Respond to all user questions
- [ ] Consider Discord/Slack for power users

### SEO Content
- [ ] Add FAQ section to homepage
- [ ] Write individual blog posts for top 5 tools
- [ ] Build backlinks via guest posts, forums
- [ ] Monitor Google Search Console for search queries

### Monetization Optimization
- [ ] A/B test ad placements
- [ ] Monitor which tools get most traffic
- [ ] Consider premium features or "Buy me a coffee"
- [ ] Add affiliate links where relevant (e.g., hosting for image tools)

---

## Ongoing: Maintenance

- [ ] Monitor uptime (UptimeRobot free tier)
- [ ] Check Google Search Console weekly
- [ ] Review analytics monthly
- [ ] Respond to user feedback
- [ ] Add 1-2 new tools per month
- [ ] Keep dependencies updated (Tailwind CDN version)
- [ ] Backup site files regularly

---

## Optional: Advanced

- [ ] Open source on GitHub (builds credibility)
- [ ] Create API for developers
- [ ] Build browser extension
- [ ] Add dark/light mode toggle
- [ ] Internationalization (i18n) for global reach
- [ ] Add tool ratings/favorites
- [ ] Build email list for updates
- [ ] Create YouTube demos of top tools
- [ ] Sponsor relevant newsletters/podcasts

---

**Good luck with the launch! 🚀**

Remember: Ship fast, iterate based on real user feedback, and don't over-optimize before launch.
