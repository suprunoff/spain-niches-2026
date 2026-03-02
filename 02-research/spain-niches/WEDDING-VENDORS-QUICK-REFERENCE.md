# Wedding Vendors Marketplace Spain — Quick Reference

**Niche:** Wedding Vendors Marketplace (B2B2C Booking Platform)
**Score:** 8.45 / 10 (Tier 1 High Priority)
**Window:** 12-18 months before Knot integration kills gap

---

## One-Liner
Spanish wedding vendors (100K+) find clients via Instagram + word-of-mouth, not paid directories. Build commission-based marketplace (6% per booking, no monthly fee) vs. Bodas.net's expensive subscription model.

---

## The Opportunity in 5 Facts

1. **Market Size:** 180K weddings/year in Spain × €24,618 avg budget = €4.4B TAM
2. **Vendor Supply Gap:** 35K-45K active Spanish wedding vendors (photographers, DJs, florists, caterers) — but only ~15% use paid directories (Bodas, Zankyou)
3. **Discovery Reality:** 60-70% of vendors find clients via word-of-mouth; 35-45% via Instagram; 30-40% via Google Reviews. Only 10-15% use Bodas.net
4. **Subscriber Pain:** Current models (Bodas €100-500/yr, WeddingWire €125-1,500/mo) fail because vendors book 25-30 weddings/year — subscription = "paying €50-200 per booking"
5. **Zankyou Void:** The dominant player died post-acquisition (Feb 2023), hasn't been replaced. Bodas.net is *directory*, not *booking platform*

---

## Why It's a Winning Niche

✓ **Massive unit economics:** Average wedding = €3,000 vendor cost (photographer €2,500, florist €1,200, DJ €800) → 6% commission = €180-300 per booking (healthy margin)

✓ **High LTV:** If vendor books 25-30 weddings/year, lifetime value = €4,500-9,000 (vs. €115 CAC) = 40x+ payback

✓ **Network effects:** First 50 vendors = attractive to couples; couples attract more vendors (viral loop)

✓ **Real pain point:** "How do I find a photographer?" is problem #1 for couples; "How do I get reliable bookings?" is #1 for vendors

✓ **Expansion path:** After dominating Spain, scale to LATAM (Mexico 130M, Colombia 52M, Argentina 46M = 10x TAM)

✓ **Commission model psychology:** Vendors pay *only on success*, not on hope. Better conversion than subscription.

---

## Why It's Hard

✗ **Marketplace = 2-sided network chicken-egg problem** (need vendors to attract couples; need couples to attract vendors)

✗ **Low repeat frequency:** Couples book 1 wedding lifetime (though event extensions possible: corporate events, anniversaries, birthday parties)

✗ **The Knot consolidation risk:** By 2024-2025, Knot integrates Zankyou into Bodas → free 200K+ vendor directory kills pricing power

✗ **Instagram momentum:** Young couples discover vendors organically on Instagram (2024 data: 35-45% of discovery). Competing = hard.

✗ **Vendor skepticism:** "I tried Bodas/Zankyou, got 0 bookings" = trust debt to overcome

---

## Competitive Positioning

| Feature | Ours | Bodas.net | Zankyou (Dead) | WeddingWire | Winner |
|---------|------|-----------|---|---|---|
| **Booking Layer** | ✓ WhatsApp-native | ✗ Manual | ✓ (dead) | ✓ Stripe | Ours |
| **Pricing Model** | 6% commission | €100-500 subscription | €1,200-2,500 premium | €125-1,500 sub | Ours |
| **Vendor Community** | Slack/Discord | None | None | None | Ours |
| **WhatsApp Integration** | ✓ Core | ✗ | ✗ | ✗ | Ours |
| **Brand Scale** | 0 (startup) | 69K vendors, 20M visitors | Dead | Global | Bodas |
| **Vendor Reviews** | ✓ Prominent | ✓ Buried | ✓ (dead) | ✓ Standard | Ours (design) |

**Positioning:** "The Stripe of weddings" — transparent, frictionless, pay-per-value.

---

## Unit Economics (Y1 Conservative)

| Metric | Value | Calculation |
|--------|-------|------------|
| **Target Vendors** | 100-150 | Barcelona/Madrid focus M1-4 |
| **Bookings/Vendor/Year** | 25-30 | Industry average |
| **Total Bookings Y1** | 650-750 | 100-150 vendors × 25-30 bookings |
| **Avg Booking Value** | €3,000 | Mix of services (photo €2.5K, flowers €1.2K, DJ €800) |
| **Commission Rate** | 6% | Competitive; vendors accept over subscription |
| **Y1 Gross Revenue** | €155K | 700 bookings × €3K × 6% ≈ €126K (conservative) |
| **Operating Costs** | €70K | Stripe (2%), hosting (€5K/yr), ops, light marketing |
| **Y1 Net Profit** | €35K-85K | Depends on marketing spend (€30K assumed) |

**Profitability:** Break-even M8-10 if GTM works; profitable by M12.

---

## GTM Playbook (Weeks 1-16)

### Phase 1: Beta Launch (M1-2, Barcelona)
- **Channel:** Direct vendor outreach via Instagram DM ("No monthly fee, 6% commission. First 3 bookings = 0% commission.")
- **Target:** 50-100 photographers/florists with 1K-10K followers
- **Partnership:** 3-5 wedding planners (free listing in exchange for vendor referrals)
- **Goal:** 20-30 vendors by M2
- **Incentive:** "First 50 vendors: zero commission for first 3 bookings"

### Phase 2: Expansion (M3, Madrid)
- **Repeat Barcelona playbook in Madrid**
- **Partner with 5-10 wedding planners**
- **Launch vendor referral program** (€50 Amazon card per referred vendor)
- **Goal:** 50-80 vendors by M3

### Phase 3: Viral Loop (M4, Across Spain)
- **Couple referral:** Each bride/groom refers 2-3 other vendors
- **Vendor referral:** Photographer refers videographer
- **Wedding planner network effect:** Planners tell colleagues
- **PR push:** Spanish wedding blogs, LinkedIn
- **Goal:** 100-150 vendors by M4

---

## Validation Before Code

**Must-Have Vendor Interviews:**
1. Talk to 30 Spanish photographers: "Would you pay 6% commission per booking instead of €49/mo?"
   - Target: 80%+ say yes
2. Talk to 10 wedding couples: "Would you use a platform with verified vendors + WhatsApp messaging?"
   - Target: 70%+ say yes
3. Analyze 50 Bodas vendor profiles: Average reviews? Response time? Proof of activity?
   - Expected: 80% have <10 reviews
4. Get actual booking rates from 10 vendors: "How many weddings do you book per month?"
   - Expected: 2-4/month (validates €3K booking value)

---

## MVP Feature Set (8 Weeks)

**Week 1-2:** Tech (Next.js + Stripe + Firebase)
**Week 3-4:** Vendor profiles + WhatsApp button
**Week 5-6:** Couple search + filtered results + messaging
**Week 7:** Review system + ratings
**Week 8:** Mobile + analytics + onboarding

**Launch:** 20-30 beta vendors + 5 wedding planners as launch partners

---

## Key Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| **The Knot integrates Zankyou by 2024-2025** | High | Speed to market (12-mo window); build vendor loyalty via community |
| **Instagram/Google improve booking discovery** | Medium | Curation advantage (verified reviews) + comparison tool (5 vendors side-by-side) |
| **Low vendor repeat frequency** | Medium | Expand to corporate events/anniversaries (10x booking frequency) |
| **Vendor skepticism from Bodas/Zankyou failure** | Medium | Commission = proof of concept (only pay on success); social proof from first 20 vendors |

---

## Financial Targets

| Year | Vendors | Bookings | GMV | Revenue (6%) | Profit | Notes |
|------|---------|----------|-----|--------------|--------|-------|
| Y1 | 100-150 | 650-750 | €2-2.25M | €120-135K | €35-50K | Barcelona + Madrid |
| Y2 | 300-400 | 2,000-2,500 | €6-7.5M | €360-450K | €150-200K | + Bilbao, Valencia, LATAM |
| Y3 | 600-800 | 4,500-6,000 | €13.5-18M | €810-1,080K | €400-600K | LATAM becomes 40% of GMV |

**LATAM Expansion (Y2+):** Mexico (130M) + Colombia (52M) = 5x Spain TAM → €5M+ Y3 ARR potential

---

## Sources

- [The Knot Worldwide Zankyou Acquisition (2023)](https://www.nasdaq.com/press-release/the-knot-worldwide-acquires-spain-based-zankyou-ventures-2023-02-03)
- [INE Spain Marriage Statistics](https://www.ine.es/)
- [Bodas.net Wedding Cost Report (2024)](https://masdesantllei.com/)
- [Spain Catering Industry (IBISWorld)](https://www.ibisworld.com/spain/industry/caterers/)
- [Marketplace Revenue Models (Sharetribe)](https://www.sharetribe.com/academy/how-top-100-marketplaces-monetize/)
- [Spain National Context: WhatsApp, subscription resistance](./02-research/spain-national/)

---

**Ready for:** MVP validation interviews + tech build-out
**Timeline:** Code start M1 (March 2026), beta launch M2-3, expand M4+
**Profitability:** M12 (conservative), M8-10 (optimistic)

