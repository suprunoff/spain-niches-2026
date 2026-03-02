# EU Grants Automation: Technical Stack & Tools

**Date:** March 2, 2026
**Purpose:** Implementation guide for MVP and scaling

---

## Architecture Overview

```
┌─────────────────┐
│  BDNS Scraper   │  → Database (PostgreSQL)
│  (Python)       │
└─────────────────┘
        ↓
┌─────────────────────┐
│  AI Questionnaire   │  → Claude API
│  (FastAPI)          │
└─────────────────────┘
        ↓
┌──────────────────────┐
│  PDF Autofill Engine │  → pdfplumber + reportlab
│  (Python)            │
└──────────────────────┘
        ↓
┌───────────────────────┐
│  Next.js Frontend     │  → React + Tailwind
│  (Dashboard)          │
└───────────────────────┘
        ↓
┌────────────────────────┐
│  Email/WhatsApp Alerts │  → SendGrid + WhatsApp API
│  (Node.js cron)        │
└────────────────────────┘
```

---

## Backend Stack (Python/FastAPI)

### Core Framework
```python
# requirements.txt
fastapi==0.104.1
uvicorn==0.24.0
sqlalchemy==2.0.23
psycopg2-binary==2.9.9  # PostgreSQL driver
pydantic==2.5.0
python-dotenv==1.0.0
```

**Why FastAPI:**
- Fast (async/await native)
- Auto API docs (Swagger)
- Strong typing (Pydantic)
- Easy to deploy (Docker)

### Data Collection (Scraping)

```python
# requirements.txt (additions)
beautifulsoup4==4.12.2
selenium==4.15.2
requests==2.31.0
lxml==4.9.3
```

**BDNS Scraper logic:**
```python
from bs4 import BeautifulSoup
import requests

def scrape_bdns():
    """Fetch all grants from BDNS portal"""
    url = "https://www.pap.hacienda.gob.es/bdnstrans"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')

    # Extract table rows → parse fields
    grants = []
    for row in soup.find_all('tr')[1:]:  # Skip header
        cells = row.find_all('td')
        grants.append({
            'id': cells[0].text.strip(),
            'name': cells[1].text.strip(),
            'budget': parse_budget(cells[2].text),
            'deadline': parse_date(cells[3].text),
            'region': cells[4].text.strip(),
            'criteria': cells[5].text.strip(),
        })
    return grants
```

### AI Integration (Claude)

```python
# requirements.txt (additions)
anthropic==0.25.0

from anthropic import Anthropic

def match_grants_to_company(questionnaire_answers):
    """Use Claude to match company to relevant grants"""
    client = Anthropic()

    prompt = f"""
    You are an expert on Spanish and European grant programs.

    Company profile:
    - Employees: {questionnaire_answers['employees']}
    - Sector (CNAE): {questionnaire_answers['sector']}
    - Spending type: {questionnaire_answers['spending_type']}
    - Region: {questionnaire_answers['region']}
    - Budget needed: €{questionnaire_answers['budget']}

    Available grants in our database:
    {format_grants_for_prompt(get_all_grants())}

    Return TOP 10 matching grants as JSON array with:
    - grant_id
    - name
    - match_score (0-100)
    - reason (one sentence why it matches)

    Ensure matches are from actual database.
    """

    response = client.messages.create(
        model="claude-3-sonnet-20240229",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}]
    )

    return parse_json_response(response.content[0].text)
```

### PDF Processing

```python
# requirements.txt (additions)
PyPDF2==3.0.1
pdfplumber==0.10.3
reportlab==4.0.7

def extract_pdf_fields(pdf_path):
    """Extract form fields from PDF"""
    import PyPDF2

    with open(pdf_path, 'rb') as file:
        reader = PyPDF2.PdfReader(file)
        fields = reader.get_fields()

    return {
        field_name: {
            'type': field_data.get('/FT', 'unknown'),
            'value': field_data.get('/V', '')
        }
        for field_name, field_data in fields.items()
    }

def autofill_pdf(template_pdf, data_dict, output_pdf):
    """Fill PDF form with data"""
    import pdfplumber
    import reportlab

    with pdfplumber.open(template_pdf) as pdf:
        # Map data to fields
        for page in pdf.pages:
            for field_name, value in data_dict.items():
                # Update field (reportlab handles PDF generation)

    # Generate new PDF
    # (Use PyPDF2 or reportlab for actual filling)
```

### API Endpoints

```python
# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI(title="GrantsAI API")

class QuestionnaireInput(BaseModel):
    employees: int
    sector: str  # CNAE code
    spending_type: str
    region: str
    budget: int

@app.post("/api/match-grants")
async def match_grants(input: QuestionnaireInput):
    """Match company to grants"""
    result = match_grants_to_company(input.dict())
    return {"grants": result}

@app.post("/api/autofill-pdf")
async def autofill_pdf_endpoint(grant_id: int, file: UploadFile):
    """Auto-fill PDF form"""
    data = get_grant_data(grant_id)
    filled_pdf = autofill_pdf(file.file, data)
    return {"pdf_url": upload_to_s3(filled_pdf)}

@app.get("/api/grants")
async def list_grants(region: str = None, sector: str = None):
    """List all grants with optional filters"""
    query = db.query(Grant)
    if region:
        query = query.filter(Grant.region == region)
    if sector:
        query = query.filter(Grant.sector == sector)
    return query.all()
```

### Database Schema (PostgreSQL)

```sql
-- Grants table
CREATE TABLE grants (
    id SERIAL PRIMARY KEY,
    bdns_id VARCHAR(100) UNIQUE,
    name VARCHAR(255),
    description TEXT,
    budget_min INT,
    budget_max INT,
    deadline DATE,
    region VARCHAR(100),
    sector VARCHAR(50),  -- CNAE code
    criteria TEXT,
    url VARCHAR(255),
    source VARCHAR(50),  -- 'BDNS', 'FANDIT', 'Regional', etc.
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Questionnaires table
CREATE TABLE questionnaires (
    id SERIAL PRIMARY KEY,
    user_id INT,
    employees INT,
    sector VARCHAR(50),
    spending_type VARCHAR(100),
    region VARCHAR(100),
    budget INT,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    name VARCHAR(255),
    company_name VARCHAR(255),
    role VARCHAR(50),  -- 'consultant', 'sme', 'admin'
    subscription_plan VARCHAR(50),  -- 'free', 'pro', 'enterprise'
    subscription_status VARCHAR(50),  -- 'active', 'trial', 'cancelled'
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Autofill log table
CREATE TABLE autofill_logs (
    id SERIAL PRIMARY KEY,
    user_id INT,
    grant_id INT,
    filled_pdf_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(grant_id) REFERENCES grants(id)
);
```

---

## Frontend Stack (Next.js/React)

### Project Setup

```bash
npx create-next-app@latest grants-ai --typescript --tailwind
cd grants-ai
npm install axios zustand
```

### Core Pages

```
app/
├── page.tsx              # Landing/home
├── dashboard/
│   └── page.tsx          # Main dashboard
├── questionnaire/
│   └── page.tsx          # 5-question form
├── grants/
│   └── [id]/
│       └── page.tsx      # Individual grant detail
├── auth/
│   ├── signup.tsx
│   └── login.tsx
└── settings/
    └── page.tsx          # User profile/billing
```

### Example: Dashboard Component

```typescript
// app/dashboard/page.tsx
'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch grants for current user
    axios.get('/api/grants')
      .then(res => setGrants(res.data.grants))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Your Matching Grants</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {grants.map(grant => (
            <div key={grant.id} className="border p-4 rounded">
              <h2 className="font-bold">{grant.name}</h2>
              <p className="text-sm text-gray-600">Budget: €{grant.budget_min}–{grant.budget_max}</p>
              <p className="text-sm text-red-600">Deadline: {grant.deadline}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                Autofill & Download
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Example: Questionnaire Component

```typescript
// app/questionnaire/page.tsx
'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Questionnaire() {
  const [answers, setAnswers] = useState({
    employees: 0,
    sector: '',
    spending_type: '',
    region: '',
    budget: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/match-grants', answers);
    // Redirect to results page with grants
    window.location.href = `/results?grants=${JSON.stringify(res.data.grants)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Find Your Grants</h1>

      <label className="block">
        <span className="text-sm">How many employees?</span>
        <input
          type="number"
          value={answers.employees}
          onChange={(e) => setAnswers({...answers, employees: +e.target.value})}
          className="w-full border px-3 py-2 rounded"
        />
      </label>

      <label className="block">
        <span className="text-sm">What's your CNAE sector?</span>
        <select
          value={answers.sector}
          onChange={(e) => setAnswers({...answers, sector: e.target.value})}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="">Select...</option>
          <option value="4213">Software development</option>
          <option value="7490">Other professional services</option>
          {/* Add more CNAE codes */}
        </select>
      </label>

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Find Matching Grants
      </button>
    </form>
  );
}
```

### Styling (Tailwind CSS)

```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
  }
  .card {
    @apply border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition;
  }
}
```

---

## External APIs & Services

### Email (SendGrid)

```python
# Backend: Send alerts
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

def send_grant_alert(user_email, grant):
    message = Mail(
        from_email='alerts@grantsai.es',
        to_emails=user_email,
        subject=f'New grant: {grant["name"]}',
        html_content=f'''
        <h2>{grant['name']}</h2>
        <p>Budget: €{grant['budget_min']}-{grant['budget_max']}</p>
        <p>Deadline: {grant['deadline']}</p>
        <a href="https://grantsai.es/grants/{grant['id']}">View & Autofill</a>
        '''
    )
    sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
    sg.send(message)
```

**Setup:**
1. Create SendGrid account (free tier: 100 emails/day)
2. Add API key to `.env`: `SENDGRID_API_KEY=...`
3. Verify sender domain (takes 24h)

### WhatsApp (Cloud API)

```python
# Backend: Send WhatsApp alerts
import requests

def send_whatsapp_alert(phone_number, grant):
    url = "https://graph.instagram.com/v18.0/YOUR_PHONE_ID/messages"
    headers = {
        "Authorization": f"Bearer {os.environ.get('WHATSAPP_TOKEN')}",
        "Content-Type": "application/json",
    }

    message = f"Nuevo subsidio: {grant['name']}\n€{grant['budget_max']}\nVto: {grant['deadline']}"

    payload = {
        "messaging_product": "whatsapp",
        "to": phone_number,
        "type": "text",
        "text": {"body": message}
    }

    response = requests.post(url, json=payload, headers=headers)
    return response.json()
```

**Setup:**
1. Register WhatsApp Business account
2. Create cloud API app
3. Get phone ID and access token
4. Verify phone numbers for testing

### Authentication (Firebase)

```typescript
// Frontend: Firebase Auth
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export async function signUp(email: string, password: string) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}
```

**Setup:**
1. Create Firebase project
2. Enable email/password auth
3. Add Firebase config to `.env.local`

---

## Deployment

### Docker (FastAPI)

```dockerfile
# Dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**Build & run:**
```bash
docker build -t grants-ai-backend .
docker run -p 8000:8000 grants-ai-backend
```

### Deployment Platforms

**Option 1: Vercel (Frontend) + Heroku (Backend)**
- Frontend: `vercel deploy`
- Backend: `git push heroku main`
- Database: Heroku Postgres or Supabase

**Option 2: Docker + Fly.io (All-in-one)**
- `fly launch` → creates fly.toml
- `fly deploy` → deploys container
- Includes Postgres support

**Option 3: AWS (ECS + RDS)**
- ECS for backend container
- RDS for PostgreSQL
- CloudFront for static assets
- (More complex, better for scale)

---

## Environment Variables (.env template)

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/grants_ai

# APIs
SENDGRID_API_KEY=SG.xxxxx
WHATSAPP_TOKEN=EAAx...
ANTHROPIC_API_KEY=sk-ant-...
FIREBASE_CONFIG={"projectId":"..."}

# Auth
JWT_SECRET=your-secret-key-here
NEXTAUTH_SECRET=your-next-auth-secret

# Deployment
ENVIRONMENT=development  # or production
LOG_LEVEL=info
```

---

## Testing

### Backend (pytest)

```python
# tests/test_api.py
import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_match_grants():
    response = client.post(
        "/api/match-grants",
        json={
            "employees": 10,
            "sector": "6201",
            "spending_type": "R&D",
            "region": "Madrid",
            "budget": 50000
        }
    )
    assert response.status_code == 200
    assert "grants" in response.json()
```

### Frontend (Jest)

```typescript
// __tests__/dashboard.test.tsx
import { render, screen } from '@testing-library/react';
import Dashboard from '@/app/dashboard/page';

describe('Dashboard', () => {
  it('renders grant list', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Your Matching Grants/i)).toBeInTheDocument();
  });
});
```

---

## Monitoring & Logging

### Sentry (Error tracking)

```python
import sentry_sdk

sentry_sdk.init(
    dsn=os.environ.get("SENTRY_DSN"),
    traces_sample_rate=1.0,
    environment="production"
)
```

### Datadog (Metrics)

```python
from datadog import initialize, api

options = {
    'api_key': os.environ.get('DATADOG_API_KEY'),
    'app_key': os.environ.get('DATADOG_APP_KEY')
}
initialize(**options)

# Track custom metric
api.Metric.send(
    metric='grants.matched',
    points=10,
    tags=['service:grants_api']
)
```

---

## Cost Estimate (Monthly)

| Service | Cost | Notes |
|---------|------|-------|
| **Vercel** (Frontend) | Free–$20 | Free tier for <100K functions |
| **Heroku** (Backend) | $7–$50 | Eco dyno + Postgres |
| **Supabase** (DB) | Free–$25 | Free tier: 500MB storage |
| **SendGrid** (Email) | Free–$10 | Free: 100 emails/day |
| **WhatsApp API** | $0.0008/msg | Per message cost |
| **Claude API** | $5–$50 | Depends on usage (pay-as-you-go) |
| **Sentry** (Monitoring) | Free–$20 | Free for small projects |
| **Total** | ~$30–$175 | Scales with growth |

---

## Getting Started (Quick Start)

### Day 1: Local setup

```bash
# Clone repo (create if doesn't exist)
mkdir grants-ai && cd grants-ai

# Backend
python -m venv venv
source venv/bin/activate  # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
python main.py

# Frontend (new terminal)
npx create-next-app@latest frontend --typescript
cd frontend
npm run dev
```

### Day 2: First features

- [ ] BDNS scraper pulls data
- [ ] Database populates 5K grants
- [ ] API endpoint `/api/grants` works
- [ ] Frontend dashboard displays grants

### Day 3–4: AI + autofill

- [ ] Claude API integration
- [ ] PDF form detection
- [ ] Autofill MVP working

### Day 5: Deployment

- [ ] Deploy backend to Heroku
- [ ] Deploy frontend to Vercel
- [ ] Test e2e flow

---

## References

- FastAPI docs: https://fastapi.tiangolo.com/
- Next.js docs: https://nextjs.org/docs
- Claude API: https://docs.anthropic.com/
- PDF processing: https://github.com/py-pdf/PyPDF2
- SendGrid Python: https://github.com/sendgrid/sendgrid-python

---

**Last updated:** March 2, 2026
**Maintainer:** Tech Lead
