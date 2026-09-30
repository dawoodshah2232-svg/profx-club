# ProFX Club — Owner Operating Guide (no developer needed)

Admin CRM: `https://dawoodshah2232-svg.github.io/profx-club/admin/login.html`
Demo admin PIN: **246810** (production will use staff accounts with roles).

## Update events
1. CRM → **Events** → **+ New event**.
2. Fill title, date/time (Asia/Dubai), capacity, language, host, cost.
3. **Tick "Session confirmed by owner"** before setting status to **published**.
   Unconfirmed sessions must stay as **draft** — the spec forbids publishing them.
4. To edit capacity or details: **Manage → Edit**. To close bookings: set status **cancelled** or **completed**.
5. Per event: **Manage** shows bookings, waitlist, attendance marking (✓ Attended / No-show / Cancel).

Capacity is enforced: members get one place each; full events offer a waitlist;
cancelling a confirmed booking automatically promotes the first waitlisted member.

## Update learning resources
CRM → **Education**:
- **Beginner path lessons**: Edit → change title, outcomes, paste recording URL (only with permission).
- **Educators**: + Educator → name, biography, credentials, languages. Remove leavers.
- **Resources**: + Resource → title, kind, summary, access (members/public).

## Update community links (Telegram / WhatsApp)
CRM → **Community**:
1. Paste the official invite URL, set language, region, capacity status.
2. Tick **Active** only when the URL is the real, working invite.
3. Until then members see a clear **"Not available yet"** message — never a broken or invented link.

## Update homepage copy & FAQs
CRM → **Content**:
- Edit the hero headline, subheading, benefits title → **Save homepage copy**.
- **+ FAQ** to add; Edit/Remove existing.
- **Policy versions**: bump (e.g. v1.0) whenever the owner approves new terms/privacy texts.

## Handle assistance requests
CRM → **Assistance**: open a case → reply privately → add staff-only notes → move status
along `new → reviewing → awaiting member → referral offered → referred → resolved → closed`.
A referral is offered to the member; nothing is shared externally until the member
approves in writing in their dashboard (recorded as referral consent).

## Members & campaigns
- **Members**: search/filter by name, email, status, verification, consent, source.
  Open a record to see consent history, tags, and change status. Access is audit-logged.
- **Campaigns**: + New campaign → choose audience (**Promo email opt-in** / **Promo WhatsApp opt-in**).
  Only opted-in members are counted. Sending is simulated in the demo.
- **Reports**: verification rate, activation, attendance, retention, acquisition cost — definitions on the page.
- **Audit log**: every sensitive view and change, newest first.

## Honesty rules (always)
- All seed content is labelled **SAMPLE / DEMO** — replace with real confirmed content before launch.
- No fake counters, testimonials, unconfirmed sessions, or guaranteed-return language anywhere.
- Never invent team names, contact details, or community links.

## Resetting the demo
The demo stores data in the browser's localStorage. To start fresh: open DevTools →
Application → Local Storage → delete `profxclub_db_v1` (and `profxclub_session`), then reload.
