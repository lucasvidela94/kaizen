---
title: "Models matter, engineering matters more"
seoTitle: "Models matter, but engineering matters more"
description: "Choosing a model, and not overpaying"
excerpt: "A ten dollar OpenCode Go subscription goes a long way. What decides the result is engineering and building the tools you need, not paying for more model."
publishedAt: 2026-10-22
status: published
category: "Engineering"
tags: ["ai", "models", "opencode", "tooling", "engineering"]
readTime: 6
featured: false
---

The model you pick matters. It matters less than the way you work with it, and a lot less than the price tag suggests. This post is about where I stopped chasing the most expensive option and what I put in its place.

## You do not need to pay absurd amounts

There is a constant pull toward the biggest model on the most expensive plan. It is easy to believe that spending more is the same as building better. In my experience it is not.

With a ten dollar [OpenCode](https://opencode.ai) Go subscription you can do wonders. Plenty of real work, from small tools to full products, fits comfortably inside that budget. The limit is rarely the model; it is how clearly you can describe the problem and how well you can check the answer.

## What actually moves the result

| Lever                   | Why it matters                                                        | What it costs            |
| ----------------------- | --------------------------------------------------------------------- | ------------------------ |
| A clear spec            | The model solves what you describe, so vague input gives vague output | Your time, once per task |
| Small, checkable steps  | You can verify each step before building on it                        | Discipline               |
| Tests and a typechecker | They tell you the truth when the model sounds sure                    | Setup, once per project  |
| A better model          | Helps on hard reasoning and long contexts                             | Money, every month       |

Only the last row scales with the invoice. The first three are engineering, and they work with any model.

## Build the tools you need

The habit that paid off most was building small tools whenever a need showed up repeatedly, instead of working around it:

- [hush](https://github.com/lucasvidela94/hush) exists because agents should use API keys without ever seeing them.
- [gecko](https://github.com/lucasvidela94/gecko) exists because removing dead code should be a required step of every change, not an afterthought.
- [TinyShell](https://github.com/lucasvidela94/tinyagent) exists because old, low-resource PCs deserve a terminal agent too, running a cheap remote model.

None of these needed a frontier model. They needed a clear problem, a small scope and a way to verify the result.

## Conclusion

Pick a model that is good enough, keep the bill sane, and spend your effort on the part that compounds: the engineering around it and the tools you build because you needed them.
