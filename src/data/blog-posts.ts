import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "From employee to independent developer",
    slug: "why-i-switched-from-employee-to-solo-developer",
    description: "Notes on the transition",
    excerpt: "After a few years in corporate work, I moved into independent work. These are the practical tradeoffs, what changed, and what I would do differently.",
    content: `
# From employee to independent developer

After a few years in corporate work, I moved into independent work. This post is not a manifesto, just a practical summary of what changed and what I learned.

## The Decision

The decision wasn't made overnight. I wanted more control over priorities, delivery, and the type of problems I work on.

Working in a corporate environment taught me a lot, but it comes with tradeoffs:

- **Limited project choice**: Working on what the company prioritized
- **Bureaucracy**: Endless meetings and approval processes
- **Compensation structure**: Often tied to role bands rather than impact
- **Technical debt**: Maintaining legacy systems instead of building new ones

## The Benefits

Despite the challenges, there are incredible benefits that make the transition worthwhile:

### Freedom and Control

- **Project selection**: Choose clients and projects that align with your values
- **Technology choices**: Use the best tools for the job, not what the company mandates
- **Schedule flexibility**: Work when you're most productive
- **Location independence**: Work from anywhere with an internet connection

### Financial Upside

- **Unlimited earning potential**: Your income scales with the value you provide
- **Multiple revenue streams**: Combine client work, products, and passive income
- **Tax advantages**: Business expenses and deductions
- **Direct client relationships**: No middleman taking a cut

## Conclusion

The transition has been challenging but rewarding. It's not for everyone, but if you're considering it, plan early and build a safety net.
    `,
    author: "Lucas",
    publishedAt: "2025-01-15",
    status: "published",
    category: "Career",
    tags: ["freelancing", "career-change", "solo-developer"],
    readTime: 8,
    featured: true,
    coverImage: "/blog/solo-developer.jpg"
  },
  {
    id: '2',
    title: "Building a CRM in Elixir",
    slug: "building-crm-elixir-why-its-good",
    description: "Phoenix and OTP patterns in practice",
    excerpt: "I built a CRM in Elixir/Phoenix. This is a technical walk-through of the concurrency model, OTP patterns, and where it helped in production.",
    content: `
# Building a CRM in Elixir

I built a CRM in Elixir and Phoenix. This post covers why I chose it, where it helped, and how OTP patterns showed up in day-to-day engineering.

## Why Elixir for a CRM?

Building a CRM involves several challenges that Elixir handles exceptionally well:

### Concurrency Requirements
A CRM needs to handle:
- Multiple users accessing the same data simultaneously
- Background jobs for email campaigns and data processing
- Real-time notifications and updates
- Integration with external APIs

### The Elixir Advantage

**Concurrency**: Handle thousands of concurrent users without breaking a sweat
**Fault tolerance**: Built-in supervision trees mean one failing process doesn't crash the system
**Scalability**: Easy to scale horizontally across multiple servers
**Functional programming**: More predictable code with fewer side effects

## OTP Patterns in Action

OTP (Open Telecom Platform) provides powerful patterns that make building reliable systems easier:

### GenServer for State Management

\`\`\`elixir
defmodule CRM.Contacts.ContactServer do
  use GenServer

  def start_link(contact_id) do
    GenServer.start_link(__MODULE__, contact_id, name: via_tuple(contact_id))
  end

  def init(contact_id) do
    contact = CRM.Contacts.get_contact!(contact_id)
    {:ok, %{contact: contact, last_accessed: DateTime.utc_now()}}
  end
end
\`\`\`

## Performance notes

In my workload, the system handled concurrency comfortably and stayed stable under load. The main wins were predictability and operational resilience.

## Conclusion

Elixir and Phoenix were a good fit for this CRM. The learning curve is real, but the runtime model and OTP patterns made the system easier to operate.
    `,
    author: "Lucas",
    publishedAt: "2025-01-20",
    status: "published",
    category: "Technical",
    tags: ["elixir", "phoenix", "otp", "crm", "performance"],
    readTime: 12,
    featured: true,
    coverImage: "/blog/elixir-crm.jpg"
  },
  {
    id: '3',
    title: "Running projects solo",
    slug: "reality-one-person-tech-team",
    description: "Tradeoffs and practical habits",
    excerpt: "When you work solo you cover product, engineering, delivery, and support. These are the tradeoffs and a few habits that keep the work sustainable.",
    content: `
# Running projects solo

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
\`\`\`bash
#!/bin/bash
# Example: automate deploy steps you repeat often
# (the exact commands depend on your stack)
\`\`\`

### 2. Use Managed Services
- **Database**: Use managed PostgreSQL (Supabase, Railway)
- **Hosting**: Use Vercel, Netlify, or Railway
- **Monitoring**: Use Sentry for error tracking

## Conclusion

Solo work can be sustainable if you keep scope tight, automate the routine, and use managed services where it reduces operational risk.
    `,
    author: "Lucas",
    publishedAt: "2025-01-25",
    status: "published",
    category: "Solo Development",
    tags: ["solo-developer", "tech-team", "automation", "tools"],
    readTime: 10,
    featured: false,
    coverImage: "/blog/one-person-team.jpg"
  },
  {
    id: '4',
    title: "Web bloat and tradeoffs",
    slug: "rethinking-web-bloat",
    description: "Performance, tooling, and constraints",
    excerpt: "A practical look at how complexity accumulates in web stacks, and what tends to improve performance and maintainability.",
    content: `
# Web bloat and tradeoffs

Complexity accumulates quickly in web stacks. Some of it is justified; some of it is accidental. This post is about how to think about tradeoffs with performance, maintainability, and delivery speed.

## The Problem

It's common to see "simple" sites ship a lot of JavaScript, heavy dependencies, and expensive runtime behavior. The cost is paid by users and by teams maintaining the system.

### Why does it happen?

- **Over-engineering**: We're adding complexity where simplicity would work
- **Framework bloat**: Every new "modern" framework adds another layer
- **Incentives**: We often optimize for delivery speed and onboarding, sometimes at the expense of runtime performance

## A Rails example

Rails is one example of a mature framework with strong conventions. It is not the answer to everything, but it shows how far you can go with consistent patterns and a stable ecosystem.

### What Rails gets right:
- **Convention over configuration**: Less decisions, more productivity
- **Mature ecosystem**: Problems are solved, not created
- **Performance**: Optimized over years of real-world usage
- **Developer happiness**: Actually enjoyable to work with

## The JavaScript ecosystem

The JS ecosystem moves fast. That can be good, but it also encourages churn:
- **Simple HTML needs 16GB of RAM** to develop
- **Every tool requires its own build system**
- **Dependencies on dependencies on dependencies**

### Compatibility and constraints

Large ecosystems carry compatibility constraints. The cost shows up as long-lived APIs, migration work, and incremental solutions.

## The Business Problem

Teams often choose popular stacks because hiring and onboarding are easier. That can be a rational decision, but it can also increase complexity over time.

### The paradox:
- **React is "safe"** because everyone uses it
- **Everyone uses it** because it's "safe"
- **The ecosystem grows** more complex and bloated
- **Performance suffers** but we accept it as normal

## What We Can Do

### For Developers:
- **Question every dependency**: Do you really need it?
- **Consider alternatives**: Rails, Laravel, Astro for static sites
- **Think about the client**: They don't care about your tech stack
- **Code with responsibility**: Choose technology that serves the user

### For Businesses:
- **Don't default to React**: Consider the alternatives
- **Think long-term**: What will this choice cost in 2 years?
- **Prioritize performance**: Users care about speed, not your tech stack

## Conclusion

Most teams can improve performance and stability without a full rewrite: ship less JavaScript, measure what matters, and prefer boring solutions when they fit.
    `,
    author: "Lucas",
    publishedAt: "2025-01-30",
    status: "published",
    category: "Technical",
    tags: ["web-development", "performance", "rails", "react", "bloat", "javascript"],
    readTime: 12,
    featured: true,
    coverImage: "/blog/web-bloat.jpg"
  }
];

export const blogCategories = [
  {
    id: '1',
    name: 'Career',
    slug: 'career',
    description: 'Posts about career development and transitions',
    postCount: 1
  },
  {
    id: '2',
    name: 'Technical',
    slug: 'technical',
    description: 'Deep dives into technology and programming',
    postCount: 2
  },
  {
    id: '3',
    name: 'Solo Development',
    slug: 'solo-development',
    description: 'Building and running a one-person tech team',
    postCount: 1
  },
  {
    id: '4',
    name: 'Business',
    slug: 'business',
    description: 'Business strategies and revenue generation',
    postCount: 1
  }
];

export const blogTags = [
  { id: '1', name: 'freelancing', slug: 'freelancing', postCount: 2 },
  { id: '2', name: 'career-change', slug: 'career-change', postCount: 1 },
  { id: '3', name: 'solo-developer', slug: 'solo-developer', postCount: 2 },
  { id: '4', name: 'elixir', slug: 'elixir', postCount: 1 },
  { id: '5', name: 'phoenix', slug: 'phoenix', postCount: 1 },
  { id: '6', name: 'otp', slug: 'otp', postCount: 1 },
  { id: '7', name: 'crm', slug: 'crm', postCount: 1 },
  { id: '8', name: 'performance', slug: 'performance', postCount: 1 },
  { id: '9', name: 'tech-team', slug: 'tech-team', postCount: 1 },
  { id: '10', name: 'automation', slug: 'automation', postCount: 1 },
  { id: '11', name: 'tools', slug: 'tools', postCount: 2 },
  { id: '12', name: 'products', slug: 'products', postCount: 1 },
  { id: '13', name: 'consulting', slug: 'consulting', postCount: 1 },
  { id: '14', name: 'revenue', slug: 'revenue', postCount: 1 },
  { id: '15', name: 'business', slug: 'business', postCount: 1 },
  { id: '16', name: 'tech-stack', slug: 'tech-stack', postCount: 1 },
  { id: '17', name: 'nextjs', slug: 'nextjs', postCount: 1 },
  { id: '18', name: 'postgresql', slug: 'postgresql', postCount: 1 },
  { id: '19', name: 'typescript', slug: 'typescript', postCount: 1 }
];
