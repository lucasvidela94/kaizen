import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Why I switched from employee to solo developer",
    slug: "why-i-switched-from-employee-to-solo-developer",
    description: "The reality behind leaving the corporate grind",
    excerpt: "After 5 years in corporate tech, I decided to take the leap into solo development. Here's what I learned about the transition, the challenges, and the unexpected benefits...",
    content: `
# Why I switched from employee to solo developer

After 5 years in corporate tech, I decided to take the leap into solo development. Here's what I learned about the transition, the challenges, and the unexpected benefits.

## The Decision

The decision wasn't made overnight. It was a gradual realization that I wanted more control over my work, my schedule, and the projects I worked on.

Working in a corporate environment taught me a lot, but I felt constrained by:

- **Limited project choice**: Working on what the company prioritized
- **Bureaucracy**: Endless meetings and approval processes
- **Salary ceiling**: Fixed compensation regardless of value delivered
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

The transition to solo development has been challenging but rewarding. It's not for everyone, but if you're considering it, start planning early and build your safety net.

**The best time to plant a tree was 20 years ago. The second best time is now.**
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
    title: "Building a CRM in Elixir (and why it's actually good)",
    slug: "building-crm-elixir-why-its-good",
    description: "Technical deep dive into Phoenix and OTP patterns",
    excerpt: "When most developers reach for Rails or Django for building a CRM, I chose Elixir and Phoenix. Here's why this was the right choice and how OTP patterns made the difference...",
    content: `
# Building a CRM in Elixir (and why it's actually good)

When most developers reach for Rails or Django for building a CRM, I chose Elixir and Phoenix. Here's why this was the right choice and how OTP patterns made the difference.

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

## Performance Results

The Elixir CRM significantly outperformed our expectations:

- **Average response time**: 50ms vs 200ms in Rails
- **Concurrent users**: 10,000+ vs 1,000 in Rails
- **Memory usage**: 50% less than equivalent Rails app

## Conclusion

Elixir and Phoenix proved to be excellent choices for building a CRM. The performance gains and reliability improvements made the learning curve worthwhile.
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
    title: "The reality of being a one-person tech team",
    slug: "reality-one-person-tech-team",
    description: "What they don't tell you about going solo",
    excerpt: "Being a one-person tech team means you're responsible for everything. From development to deployment, from design to customer support. Here's the unfiltered truth...",
    content: `
# The reality of being a one-person tech team

Being a one-person tech team means you're responsible for everything. From development to deployment, from design to customer support. Here's the unfiltered truth.

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

### 1. Automate Everything
\`\`\`bash
#!/bin/bash
git pull origin main
npm install
npm run build
pm2 restart app
\`\`\`

### 2. Use Managed Services
- **Database**: Use managed PostgreSQL (Supabase, Railway)
- **Hosting**: Use Vercel, Netlify, or Railway
- **Monitoring**: Use Sentry for error tracking

## Conclusion

Being a one-person tech team is challenging but rewarding. The key is to accept your limitations, automate what you can, and focus on what you do best.
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
    title: "Rethinking the bloat: A Chrome tab shouldn't consume 500MB of RAM",
    slug: "rethinking-web-bloat",
    description: "Why the web ecosystem is over-engineered and what we can do about it",
    excerpt: "Nobody thinks about the client anymore. We keep adding layers of complexity instead of using proven solutions like Rails. The web is full of bloat...",
    content: `
# Rethinking the bloat: A Chrome tab shouldn't consume 500MB of RAM

Nobody thinks about the client anymore. We keep adding layers of complexity instead of using proven solutions like Rails. The web is full of bloat, and it's getting worse.

## The Problem

A single Chrome tab shouldn't consume almost 500MB of RAM. But here we are, in 2025, where opening a "simple" website requires more resources than running a full operating system a decade ago.

### Why is this happening?

- **Over-engineering**: We're adding complexity where simplicity would work
- **Framework bloat**: Every new "modern" framework adds another layer
- **Developer convenience over user experience**: We optimize for development speed, not performance

## The Rails Example

Rails has been solving web development problems for 18 years. It's battle-tested, mature, and efficient. But instead of using proven solutions, we keep reinventing the wheel.

### What Rails gets right:
- **Convention over configuration**: Less decisions, more productivity
- **Mature ecosystem**: Problems are solved, not created
- **Performance**: Optimized over years of real-world usage
- **Developer happiness**: Actually enjoyable to work with

## The JavaScript Ecosystem Problem

The JS ecosystem is over-engineered, starting with Node.js itself. We've created a monster where:
- **Simple HTML needs 16GB of RAM** to develop
- **Every tool requires its own build system**
- **Dependencies on dependencies on dependencies**

### React's Absurd Backward Compatibility

React's policy of maintaining backward compatibility at all costs is preventing fundamental fixes. Instead of correcting core issues, we keep adding workarounds.

## AI and Framework Bias

Generative AIs have a clear preference for React, but they could benefit from alternatives like:
- **Preact**: Smaller, faster React alternative
- **Solid**: Truly reactive, no virtual DOM
- **Qwik**: Resumable applications, instant loading

But the AI training data is biased toward React, creating a self-reinforcing cycle.

## The Business Problem

Companies choose React because it's the "safe" choice, but the ecosystem gets more complex over time. Many misunderstand Laravel, which actually solves problems elegantly.

### The paradox:
- **React is "safe"** because everyone uses it
- **Everyone uses it** because it's "safe"
- **The ecosystem grows** more complex and bloated
- **Performance suffers** but we accept it as normal

## The Bun Revolution

Thankfully, Bun appeared and unified many things. It's a reminder that we can do better, that we don't need the complexity we've created.

## The Irony

This very site is built with React and Tailwind. But in the next update, it's moving to Solid.js. Because sometimes you have to practice what you preach.

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

The web doesn't need to be this complicated. We've created problems that don't exist, solved them with over-engineered solutions, and called it progress.

It's time to step back and ask: **What are we actually trying to solve?**

Because right now, we're solving developer problems at the expense of user experience. And that's not sustainable.
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
