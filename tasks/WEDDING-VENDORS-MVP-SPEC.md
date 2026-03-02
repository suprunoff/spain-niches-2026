# Wedding Vendors Marketplace — MVP Technical Specification

**Project:** Wedding Vendors Booking Platform (Spain)
**Timeline:** 8 weeks to beta launch
**Goal:** 20-30 beta vendors + 5 wedding planners (Barcelona/Madrid)
**Status:** Ready for development

---

## Technology Stack

### Backend
- **Framework:** Next.js 14+ (API routes + pages)
- **Database:** PostgreSQL (Firebase alternative: Supabase)
- **Authentication:** NextAuth.js (Google + email)
- **Payment:** Stripe (commission processing + payout)
- **Search:** Algolia or Elasticsearch (for fast vendor filtering)
- **Messaging:** Twilio API (WhatsApp integration) OR Firebase Cloud Messaging

### Frontend
- **Framework:** React 18+ (Next.js)
- **Styling:** Tailwind CSS
- **State:** TanStack Query (data fetching)
- **Mobile:** Responsive design (mobile-first)
- **Maps:** Mapbox API (for vendor location discovery)

### Infrastructure
- **Hosting:** Vercel (Next.js optimized)
- **Storage:** AWS S3 (vendor photos)
- **CDN:** Cloudflare (media delivery)
- **Monitoring:** Sentry (error tracking)

---

## Core Features (MVP)

### 1. Vendor Portal (40% of effort)

**Vendor Registration:**
- Email/phone signup
- Profile setup (name, location, category, bio, pricing)
- Photo gallery upload (5-20 images)
- Service description + pricing transparency
- Availability/booking calendar (Google Calendar API integration)
- WhatsApp business number linkage

**Vendor Dashboard:**
- Inquiries received (list view)
- Conversion metrics ("15 inquiries, 3 bookings, 20% conversion rate")
- Monthly earnings (commissions deducted)
- Reviews + ratings
- Commission schedule (6% per booking)

**Features:**
- Search visibility (category + location)
- Verified badge (automatic after 5+ reviews > 4.0 rating)
- Response time tracking (auto-calculated)

---

### 2. Couple Portal (30% of effort)

**Discovery:**
- Search by category (Photographer, Florist, DJ, Caterer, Videographer, Hair/Makeup, Planner, Venue)
- Filter by location (Madrid, Barcelona, bilingual search)
- Map view (find vendors in specific area)
- Sort by rating, price, response time, newest

**Vendor Profile View:**
- Photos (gallery slideshow)
- Reviews (with photos from real weddings)
- Rating (4.5/5 display prominently)
- Pricing (€2,500-6,000 for photographers, etc.)
- Response time ("Replies in <2h")
- Location + service area

**Booking Flow:**
- Click "Inquire" button
- Pre-fill form (couple name, date, guest count, message)
- WhatsApp auto-redirect or in-app message option
- Booking confirmation email sent to couple + vendor

---

### 3. Messaging & Coordination (20% of effort)

**WhatsApp Integration (Primary):**
- Couple clicks "Contact via WhatsApp"
- Vendor WhatsApp business number auto-populated
- Message pre-fill: "Hi [Vendor], I found you on [Platform]. I'm interested in booking for [Date]. Available? Reply here."
- Vendor replies directly in WhatsApp (no platform tracking, but shows "replied" status)

**In-App Messaging (Optional):**
- Couples can message vendors in-app (tracked)
- Vendors see message history
- Vendor incentive: "Use in-app messaging for 5% rating boost"
- Fallback if vendor doesn't have WhatsApp setup

**Calendar Integration:**
- Vendor connects Google Calendar (read-only view)
- Couples see "Available dates" in next 90 days
- Booking confirmation auto-creates calendar event

---

### 4. Review System (10% of effort)

**Post-Event Reviews:**
- Email sent 7-14 days post-wedding: "Rate your [Vendor Name]"
- 1-5 star rating
- Text review (optional, 50-500 chars)
- Photo upload (couples submit wedding photos with vendor)
- Would-recommend toggle

**Verification:**
- Only couples who completed bookings can review
- Photos moderated (no inappropriate content)
- Verified badge on reviews (shows booking date)

**Display:**
- Prominent on vendor profile
- "Top 5 reviews" section (sorted by helpfulness)
- Overall rating + review count (4.8/5 • 42 reviews)
- Photos gallery (real weddings)

---

## User Journey

### Vendor Onboarding (< 10 minutes)
1. Click "Vendor Signup"
2. Email/phone verification
3. Category selection (1 category MVP)
4. Location (Barcelona/Madrid/bilingual)
5. Upload 5-10 portfolio photos
6. Add pricing + bio
7. Add WhatsApp business number (optional)
8. Payment method (Stripe account for payouts)
9. Review dashboard — **LIVE**

### Couple Discovery & Booking (< 15 minutes)
1. Open homepage
2. Search: "Photographer Barcelona"
3. View results (map + list)
4. Click vendor profile
5. Review photos + reviews
6. Click "Inquire"
7. Pre-fill form
8. Choose: WhatsApp OR in-app message
9. **Vendor receives inquiry** (in-app notification + email)
10. Vendor replies via WhatsApp
11. **Couple books vendor** → Booking marked as "Confirmed" (manual)
12. Platform takes 6% commission at payout time

---

## Database Schema (Simplified)

```sql
-- Vendors
CREATE TABLE vendors (
    id UUID PRIMARY KEY,
    email VARCHAR UNIQUE,
    phone VARCHAR,
    name VARCHAR,
    category VARCHAR, -- photographer, florist, dj, caterer, etc.
    location VARCHAR, -- barcelona, madrid, bilingual
    bio TEXT,
    pricing_usd DECIMAL, -- avg price (e.g., 2500 for photo)
    whatsapp_number VARCHAR,
    stripe_account_id VARCHAR, -- for payouts
    avg_rating DECIMAL(2,1),
    review_count INT,
    response_time_hours INT, -- auto-calculated
    verified BOOL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Photos
CREATE TABLE photos (
    id UUID PRIMARY KEY,
    vendor_id UUID REFERENCES vendors(id),
    url VARCHAR, -- AWS S3
    caption VARCHAR,
    order INT,
    is_profile_pic BOOL
);

-- Inquiries
CREATE TABLE inquiries (
    id UUID PRIMARY KEY,
    couple_name VARCHAR,
    couple_email VARCHAR,
    couple_phone VARCHAR,
    vendor_id UUID REFERENCES vendors(id),
    wedding_date DATE,
    guest_count INT,
    message TEXT,
    channel VARCHAR, -- whatsapp, in-app
    status VARCHAR, -- pending, replied, booked, declined
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Bookings (post-confirmation)
CREATE TABLE bookings (
    id UUID PRIMARY KEY,
    inquiry_id UUID REFERENCES inquiries(id),
    vendor_id UUID REFERENCES vendors(id),
    booking_value DECIMAL, -- €3,000 avg
    commission_rate DECIMAL(3,2), -- 0.06 = 6%
    commission_amount DECIMAL,
    status VARCHAR, -- pending, completed, paid_out
    created_at TIMESTAMP,
    completed_at TIMESTAMP,
    payout_at TIMESTAMP
);

-- Reviews
CREATE TABLE reviews (
    id UUID PRIMARY KEY,
    booking_id UUID REFERENCES bookings(id),
    rating INT, -- 1-5
    comment TEXT,
    photo_url VARCHAR,
    helpful_count INT,
    created_at TIMESTAMP
);
```

---

## Development Phases

### Phase 1: Core Infrastructure (Week 1-2)
- [ ] Next.js project setup + Tailwind
- [ ] PostgreSQL database + Supabase
- [ ] NextAuth.js (Google OAuth)
- [ ] Stripe integration (test mode)
- [ ] AWS S3 bucket + SDK integration

### Phase 2: Vendor Portal (Week 3-4)
- [ ] Vendor signup flow
- [ ] Profile editing (category, photos, bio, pricing)
- [ ] Dashboard (inquiries, earnings, reviews)
- [ ] Vendor search visibility

### Phase 3: Couple Portal (Week 5-6)
- [ ] Homepage + search bar
- [ ] Vendor filtering (category, location, rating)
- [ ] Vendor profile view (photos, reviews, pricing)
- [ ] Inquiry form + WhatsApp redirect

### Phase 4: Messaging & Reviews (Week 7)
- [ ] WhatsApp integration (Twilio API)
- [ ] In-app messaging (real-time with Firebase)
- [ ] Post-event review email flow
- [ ] Review display on vendor profile

### Phase 5: Polish & Testing (Week 8)
- [ ] Mobile responsiveness
- [ ] Error handling + edge cases
- [ ] Analytics setup (Mixpanel or Segment)
- [ ] Performance optimization
- [ ] Security audit (OWASP)

---

## Third-Party Integrations

| Service | Purpose | Cost | Priority |
|---------|---------|------|----------|
| **Stripe** | Payment processing (6% commission) | 2.9% + 30¢/transaction | Critical |
| **Twilio** | WhatsApp messaging API | $0.0075/msg sent, $0.05/msg received | High |
| **AWS S3** | Photo storage | $0.023/GB stored, $0.09/GB transferred | High |
| **Mapbox** | Vendor location maps | $0.50/1K map loads | Medium |
| **Google Calendar API** | Vendor availability sync | Free (with OAuth) | Medium |
| **Sendgrid / Mailgun** | Transactional emails | $0.10-0.50/msg | High |
| **Sentry** | Error tracking | $29/month (free tier available) | Low |
| **Algolia** | Vendor search/filtering | $0.50/1K records/month | Medium |

**MVP Budget (Year 1):**
- Server/hosting: €5K
- Third-party services: €3K
- Domain/SSL: €200
- **Total infrastructure:** ~€8K

---

## Success Metrics (MVP)

**Vendor Metrics:**
- 20-30 vendors registered by M2
- Avg 4.5/5 rating within 30 days
- 50%+ uploading 10+ portfolio photos
- Response time < 4 hours (avg)

**Couple Metrics:**
- 500+ couple sign-ups by M3
- 5-10 bookings per week by M4
- 80%+ using WhatsApp channel (vs. in-app)
- 4.5/5 average satisfaction

**Platform Metrics:**
- €500+ GMV per week by M4 (€2K/mo)
- <100ms search response time
- 99.9% uptime
- Mobile: 50%+ traffic

---

## Go/No-Go Criteria (M2 Beta Launch)

**GREEN LIGHT IF:**
- 20+ vendors onboarded with 5+ photos each
- 3+ wedding planner partnerships confirmed
- 5+ test bookings completed successfully
- Stripe payouts working for test transactions
- Mobile experience is solid (Lighthouse > 80)

**RED LIGHT IF:**
- <15 vendors registered
- 0 wedding planner partnerships
- WhatsApp integration failing
- Payment processing errors
- >500ms search latency

---

## Post-MVP (M3-4)

**Quick Wins:**
- Vendor analytics dashboard (traffic, inquiries, conversion %)
- Email drip campaign for vendors ("Your inquiry response rate is 20%. Top vendors hit 40%")
- Couple wishlist (save vendors)
- Referral rewards (€50 for referring vendor + couple)
- Spanish UI (currently bilingual, optimize for ES)

**Medium-term (M6+):**
- Pricing comparison tool (show 5 photographers side-by-side)
- Group discounts (couple gets 5% off when booking 3+ vendors)
- Content marketplace (blog articles, planning guides)
- Video profiles (vendor intro video)
- Booking calendar sharing (vendor sends availability link to couple)

---

## Deployment Checklist

- [ ] Environment variables (.env) set up (Stripe keys, Twilio, etc.)
- [ ] Database migrations run
- [ ] Stripe webhooks configured
- [ ] Email templates tested
- [ ] Analytics event tracking verified
- [ ] SSL certificate installed
- [ ] Robots.txt + sitemap.xml
- [ ] Legal pages (T&C, privacy policy)
- [ ] Support email configured
- [ ] Monitoring + alerts set up (Sentry, Uptime Robot)

---

## Estimation & Budget

**Development (MVP):**
- 1 full-stack dev (8 weeks @ €80/hr) = €25.6K
- Design (UI/UX, 2 weeks contract) = €3K
- **Total dev cost:** €28.6K

**Infrastructure + Services (Year 1):**
- Hosting/infrastructure: €8K
- Third-party APIs: €3K
- Marketing (Barcelona/Madrid outreach): €5K
- **Total ops:** €16K

**Grand Total (MVP + Year 1 ops):** ~€44.6K

**Break-even:** €35-50K profit Y1 → ROI ~1x (conservative)

---

**Next Step:** Validate with 30 Spanish vendors + 10 couples before starting code
**Contact:** Research team (@Claude Code)
**Last Updated:** March 2, 2026
