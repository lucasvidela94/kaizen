---
title: "The gardener role in the age of vibe coding"
seoTitle: "Gardening your code in the age of vibe coding"
description: "Engineering when AI writes the code"
excerpt: "AI will never care about the path it takes. That makes the human role closer to a gardener: pruning, shaping and steering the code as it grows."
publishedAt: 2026-10-22
status: published
category: "Software for devs"
tags: ["ai", "vibe-coding", "engineering", "agents", "maintenance"]
readTime: 6
featured: true
---

Vibe coding made it cheap to create software. It did not make it cheap to keep software healthy. In this era you can build and think about engineering in a different way, and the role that matters most is not the one that types the code.

## The AI does not care about the path

A model will take whatever route gets the task done. It does not mind that it duplicated a helper, left an unused module behind or took the long way around. Each answer is correct locally, and the sum of many correct answers can still be a mess.

That is not a flaw to complain about. It is the nature of the tool, and it tells you where your job moved.

## From author to gardener

A gardener does not place every leaf. They decide what grows, what gets pruned and where the paths go, and they come back every week because the garden never stops changing.

| Gardening              | In a codebase                                                |
| ---------------------- | ------------------------------------------------------------ |
| Pruning                | Deleting dead code, orphaned modules and unused dependencies |
| Shaping                | Keeping structure and naming consistent as new code lands    |
| Watering               | Tests, types and checks that run on every change             |
| Choosing what to plant | Deciding what is worth building at all                       |

The role of gardener matters more than ever. Things have to be tidied continuously, because the rate at which code appears is now far higher than the rate at which anyone reads it.

## Make pruning a required step

Good intentions do not scale, so I turned pruning into something a tool can enforce. [gecko](https://github.com/lucasvidela94/gecko) treats deletion as an output: before a change is done, every added line is justified or deleted, and modules that lost their last caller are removed.

The same idea runs through my [agent skills](https://github.com/lucasvidela94/skills): each one ships a mechanical auditor and a CI gate, so the rule is checked by a script instead of remembered by a person.

## Conclusion

Let the AI write fast, and keep your attention on the garden: the structure, the checks and the pruning. The path is not its concern, so it has to be yours.
