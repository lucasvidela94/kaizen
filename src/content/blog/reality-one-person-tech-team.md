---
title: "Running projects solo"
seoTitle: "Running projects solo: tradeoffs and habits"
description: "Tradeoffs and practical habits"
excerpt: "When you work solo you cover product, engineering, delivery, and support. These are the tradeoffs and a few habits that keep the work sustainable."
publishedAt: 2025-01-25
updatedAt: 2026-10-22
status: published
category: "Solo Development"
tags: ["solo-developer", "tech-team", "automation", "tools"]
readTime: 10
featured: false
---

Working solo means you're responsible for product decisions, engineering, delivery, and support. It can be effective, but you need guardrails.

## The Good

- **Complete control**: You make all the decisions
- **Fast iteration**: No meetings, no approvals needed
- **Learning everything**: You become a full-stack developer by necessity
- **Direct impact**: Every line of code you write matters

## The Bad

- **Overwhelming responsibility**: Everything falls on you
- **Context switching**: You're constantly switching between roles
- **Limited expertise**: You can't be an expert in everything
- **Burnout risk**: Easy to work too much

## Strategies for Survival

### 1. Automate the routine

```bash
#!/bin/bash
# Example: automate deploy steps you repeat often
# (the exact commands depend on your stack)
```

### 2. Use Managed Services

- **Database**: Use managed PostgreSQL ([Supabase](https://supabase.com), [Railway](https://railway.com))
- **Hosting**: Use [Vercel](https://vercel.com), [Netlify](https://www.netlify.com), or Railway
- **Monitoring**: Use [Sentry](https://sentry.io) for error tracking

### What you stop operating

| Area       | Managed option             | What you no longer run yourself                |
| ---------- | -------------------------- | ---------------------------------------------- |
| Database   | Managed PostgreSQL         | Backups, upgrades and failover                 |
| Hosting    | Vercel, Netlify or Railway | Servers, TLS certificates and deploy pipelines |
| Monitoring | Sentry                     | Your own error aggregation and alerting        |

The tradeoff is cost and lock-in instead of operational time, which is usually the scarcer resource for one person.

## Conclusion

Solo work can be sustainable if you keep scope tight, automate the routine, and use managed services where it reduces operational risk.
