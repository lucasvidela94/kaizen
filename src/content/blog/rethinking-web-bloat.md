---
title: "Web bloat and tradeoffs"
seoTitle: "Web bloat and tradeoffs in modern stacks"
description: "Performance, tooling, and constraints"
excerpt: "A practical look at how complexity accumulates in web stacks, with Rails and JavaScript examples, and what tends to improve performance and maintainability."
publishedAt: 2025-01-30
status: published
category: "Technical"
tags: ["web-development", "performance", "rails", "react", "bloat", "javascript"]
readTime: 12
featured: true
---

Complexity accumulates quickly in web stacks. Some of it is justified; some of it is accidental. This post is about how to think about tradeoffs with performance, maintainability, and delivery speed.

## The Problem

It's common to see "simple" sites ship a lot of JavaScript, heavy dependencies, and expensive runtime behavior. The cost is paid by users and by teams maintaining the system.

### Why does it happen?

- **Over-engineering**: We're adding complexity where simplicity would work
- **Framework bloat**: Every new "modern" framework adds another layer
- **Incentives**: We often optimize for delivery speed and onboarding, sometimes at the expense of runtime performance

### Where the cost shows up

| Source of bloat                  | Who pays                           | Question to ask                                        |
| -------------------------------- | ---------------------------------- | ------------------------------------------------------ |
| Heavy client-side JavaScript     | Users on slow devices and networks | Does this page need to run code in the browser at all? |
| Layers of dependencies           | The team maintaining the system    | Can the platform or a small helper do this instead?    |
| Build tooling per project        | Every developer, every day         | Does the tool earn its setup and upgrade cost?         |
| Popular-by-default stack choices | The business, over the years       | What will this choice cost in two years?               |

Speed on the user's side is measurable: [Core Web Vitals](https://web.dev/articles/vitals) describe loading, interactivity and visual stability, and give a shared way to check whether a stack is paying off.

## A Rails example

Rails is one example of a mature framework with strong conventions, summarized in [The Rails Doctrine](https://rubyonrails.org/doctrine). It is not the answer to everything, but it shows how far you can go with consistent patterns and a stable ecosystem.

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
