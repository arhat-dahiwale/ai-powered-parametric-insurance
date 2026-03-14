# AI-Powered Parametric Insurance for India’s Gig Economy

### Guidewire DEVTrails 2026

**Phase 1: Ideation & Foundation**

This document presents our strategy for building an **AI-enabled parametric insurance platform** designed to protect India’s gig delivery workforce from income loss caused by external disruptions.

Our solution focuses strictly on **loss of income protection**, excluding health, accident, or vehicle coverage as required by the challenge constraints. 

---

# 1. Problem Overview

India’s gig delivery workers power the digital economy through platforms such as:

* Swiggy
* Zomato
* Zepto
* Amazon

However, their earnings depend heavily on **continuous outdoor activity**.

External disruptions such as:

* heavy rainfall
* extreme heat
* pollution spikes
* traffic gridlocks

can significantly reduce their working hours, often resulting in **20–30% income loss per month**.

Traditional insurance models are not suited for this scenario because they require **manual claims and verification processes**.

Our solution introduces **parametric insurance**, where payouts are triggered automatically when predefined environmental conditions occur.

---

# 2. Solution: Parametric Income Protection

Our platform uses a **parametric insurance model** where claims are triggered automatically based on measurable external conditions.

### Core Principle

```
External disruption detected
        ↓
Worker cannot complete deliveries
        ↓
Lost income estimated
        ↓
Automatic claim generated
        ↓
Instant payout processed
```

Workers **do not need to file manual claims** under normal circumstances.

This approach provides:

* zero-touch claims
* fast payouts
* minimal fraud exposure
* transparent insurance coverage

---

# 3. Delivery Persona

We selected **Food Delivery Riders** as the primary persona.

Platforms include:

* Swiggy
* Zomato

### Example Scenario: Ravi

**Persona**

Ravi is a Swiggy delivery rider operating in **Indiranagar, Bengaluru**.

**Situation**

A heavy rainstorm begins during peak evening hours.

```
Rainfall: 72mm
Duration: 3 hours
```

During this time:

* deliveries drop dramatically
* Ravi cannot safely continue working

**Impact**

Ravi loses **3 hours of peak earnings**.

**Platform Response**

```
Weather API detects rainfall threshold
↓
Disruption engine confirms event
↓
Active policies in the zone are identified
↓
Income loss calculated
↓
Claim automatically triggered
↓
Payout credited instantly
```

This ensures Ravi’s earnings are protected **without manual intervention**.

---

# 4. Platform Choice: Web-First PWA

The platform will be implemented as a **web-based Progressive Web App (PWA)**.

Technology:

```
React / Next.js
```

### Reasons for Choosing Web

**Low Entry Barrier**

Gig workers often use low-storage devices. A web application removes the need for large app downloads.

**Instant Updates**

Compliance or system updates can be deployed immediately without waiting for app-store approvals.

**PWA Capabilities**

PWAs enable:

* push notifications
* offline support
* mobile-native user experience

---

# 5. Financial Model (Weekly Pricing)

Gig workers typically operate on **weekly earning cycles**, so insurance pricing must follow the same pattern.

Our platform therefore uses **weekly dynamic premiums**.

### Premium Formula

```
Weekly_Premium = Base_Price + (Risk_Score × Multiplier)
```

The **risk score** is calculated using AI models based on:

* zone risk level
* disruption probability
* historical environmental data

---

### Automated Payout Calculation

The payout strictly covers **lost income**.

```
Payout = Avg_Hourly_Income × Disruption_Duration
```

Example:

```
Average hourly income: ₹120
Disruption duration: 3 hours

Payout = ₹360
```

---

# 6. Parametric Disruption Triggers

The system continuously monitors external signals.

| Disruption Type  | Trigger Metric     | Severity |
| ---------------- | ------------------ | -------- |
| Heavy Rain       | Rainfall > 50mm    | High     |
| Extreme Heat     | Temperature > 42°C | Medium   |
| Pollution Spike  | AQI > 300          | High     |
| Traffic Gridlock | Congestion > 85%   | Medium   |

When a threshold persists beyond a minimum duration, a **disruption event** is created.

---

# 7. System Architecture

Our platform follows a **modular event-driven architecture**.

```
                Frontend
           (React / Next.js)
                    │
                    ▼
        Backend API (NestJS + Fastify)
                    │
                    ▼
           Event Pipeline
             (Redis Streams)
                    │
         ┌──────────┴──────────┐
         ▼                     ▼
   ML Service              Database
 (Python FastAPI)         PostgreSQL
```

---

### Backend Responsibilities

The backend acts as the **orchestration layer**.

Responsibilities include:

* worker authentication
* policy management
* disruption monitoring
* claim automation
* fraud detection coordination
* payment processing

The backend is implemented using:

```
NestJS with Fastify adapter
```

for improved performance and scalability.

---

# 8. Parametric Claim Automation

The system processes claims through an **event-driven pipeline**.

```
Weather / Traffic APIs
        ↓
Disruption Detection Engine
        ↓
EVENT: DISRUPTION_DETECTED
        ↓
Claim Automation Engine
        ↓
EVENT: CLAIM_CREATED
        ↓
Fraud Detection
        ↓
EVENT: CLAIM_APPROVED
        ↓
Payment Service
        ↓
Worker receives payout
```

This architecture enables **fully automated claims**.

---

# 9. AI / ML Integration

Machine learning is used across several parts of the system.

### Risk Prediction

Predicts disruption likelihood in specific zones using historical weather data.

Output:

```
zone_risk_score
```

---

### Worker Risk Scoring

Evaluates worker exposure based on:

* operating zone
* work patterns
* historical claim data

Output:

```
worker_risk_score
```

---

### Dynamic Premium Pricing

Combines worker and zone risk scores to determine weekly premiums.

---

### Fraud Detection

Anomaly detection models identify suspicious behavior such as:

* GPS spoofing
* duplicate accounts
* abnormal claim frequency
* payout manipulation attempts

Models such as **Isolation Forest** can be used for anomaly detection.

---

# 10. Technical Stack

| Layer       | Technology       |
| ----------- | ---------------- |
| Frontend    | React / Next.js  |
| Backend     | NestJS + Fastify |
| ML Service  | Python FastAPI   |
| Event Layer | Redis Streams    |
| Database    | PostgreSQL       |

External integrations include:

* Weather APIs
* Traffic APIs
* Mock delivery platform APIs
* Mock payment gateway

---

# 11. Development Roadmap

The project will be implemented across the **6-week DEVTrails timeline**.

### Phase 1 (Weeks 1-2)

Focus:

* problem research
* system architecture
* AI integration planning
* parametric model design

Deliverables:

* Idea Document
* architecture design
* strategy video

---

### Phase 2 (Weeks 3-4)

Focus:

* worker registration system
* policy management
* disruption detection engine
* dynamic premium calculation
* automated claim creation

---

### Phase 3 (Weeks 5-6)

Focus:

* fraud detection models
* instant payout simulation
* worker dashboard
* insurer analytics dashboard

---

# 12. Startup Strategy (DEVTrails Economy)

Our startup begins with **DC 100,000 seed capital**.

Expected operational burn:

```
Seed Phase:  DC 5,000 / week
Scale Phase: DC 12,000 / week
Soar Phase:  DC 36,000 / week
Total Burn:  DC 75,000
```

Our strategy focuses on:

* consistent **4–5★ funding round ratings**
* avoiding late submission penalties
* maximizing technical deliverables early

This ensures strong financial sustainability during the competition.

---

# Conclusion

Our platform demonstrates how **AI-powered parametric insurance** can protect gig workers from income instability caused by external disruptions.

By combining:

* real-time disruption detection
* AI-driven risk pricing
* automated claim processing
* instant payouts

we provide a scalable safety net tailored to the needs of India’s rapidly growing gig economy.
