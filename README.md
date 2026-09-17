# Copilot Spaces Demo

This repository is a practical example of how GitHub Copilot Spaces can turn a coding session into a grounded, context-aware workflow.

The goal is to help a user understand how Spaces combine:
- repository context
- attached instructions and docs
- task-specific goals
- architecture awareness
- multi-file code understanding
- focused, project-specific assistance

## Why this repo exists

Instead of asking Copilot to work from a blank prompt, a Copilot Space can be grounded in the files, docs, and project context that matter to the task.

This repo demonstrates that idea by pairing:
- a small front-end demo app
- a project README that explains the scenario
- repo instructions for Copilot
- a guide describing the core Copilot Spaces capabilities

## What this example shows

### 1. Grounded project context
The app and docs make it easy to reference the repo story, project goals, and implementation details together.

### 2. Multi-file understanding
Features are described across the repository instead of in a single prompt. This mirrors how Spaces help an agent reason using the real codebase.

### 3. Task-specific guidance
The repo includes explicit instructions for how work should be approached, which is the kind of focused grounding a Space provides.

### 4. Architecture and flow awareness
The sample UI is structured to show how code, docs, and workflow details can stay aligned while a task is being developed.

## Repository layout

- `README.md` — landing guide for the example
- `.github/copilot-instructions.md` — instructions for coding agents working in this repo
- `docs/copilot-spaces-overview.md` — detailed explanation of the capability set
- `app/index.html` — demo front-end
- `app/styles.css` — styling for the demo
- `app/script.js` — interactive examples and capability cards

## Quick start

Open `app/index.html` in a browser, or serve the folder locally:

```bash
cd app
python3 -m http.server 8000
```

Then visit http://localhost:8000

## Suggested learning flow

1. Read `README.md` and `docs/copilot-spaces-overview.md`.
2. Open the demo app in the browser.
3. Review `.github/copilot-instructions.md` to see how repo-specific guidance is encoded.
4. Reflect on how a Copilot Space can keep all of these pieces in view when building features.

## Example usage scenario

Imagine a user asks:

> "Help me add a feature for tracking project health across the app. Use the project docs, code structure, and existing conventions."

With a Copilot Space, the agent can ground the response in:
- repo docs
- app structure
- task instructions
- relevant files
- project constraints

That is the core idea this demo tries to demonstrate.

## Summary

This repository is meant to act as a reusable example of a well-grounded project context for GitHub Copilot Spaces.

It is intentionally small, but it mirrors the way real-world spaces combine understanding, instructions, and code artifacts into one coherent workflow.
