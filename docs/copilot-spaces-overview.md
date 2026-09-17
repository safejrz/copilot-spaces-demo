# Copilot Spaces Overview

A GitHub Copilot Space is a context-rich environment where a coding agent can work from more than just a prompt.

## Core idea

Instead of asking an assistant to infer everything from a short message, a Space can include:
- the repository itself
- attached documentation
- instructions and goals
- relevant files and architecture
- task-specific context

This makes the assistant much more grounded and relevant.

## The main capabilities demonstrated here

### Repository grounding
The agent can work against the real project files and understand the actual code structure.

### Documentation awareness
Readme files, architecture notes, and design docs can inform decisions and reduce guesswork.

### Goal-oriented problem solving
The user can define a task while the agent remains anchored to the project context.

### Multi-file reasoning
Spaces help across more than one file, which matters when a change touches UI, docs, configuration, and logic together.

### Explainable workflow
Because the repo itself becomes part of the conversation, the output can be easier to validate, review, and trust.

## Why this matters

Traditional chat can become disconnected from a project when it lacks the relevant facts. Copilot Spaces reduce that gap by making the actual environment part of the conversation.

In practice, this means:
- fewer wrong assumptions
- more consistent code suggestions
- faster navigation through a codebase
- clearer alignment with project goals

## Example workflow

1. Open a Space for a project.
2. Include the repo files and docs needed for the task.
3. Define the goal or ask a specific question.
4. Let Copilot reason using the grounded context.
5. Review the output with the actual repo and project constraints in view.

## This demo repository

This demo intentionally keeps the project small so the value of the Spaces model is easy to observe:
- the app demonstrates a visible project surface
- the docs define the project narrative
- the instructions show how project-specific guidance can be embedded
- the repo acts as an example of a grounded environment

## Summary

Copilot Spaces are useful when work needs more than a generic prompt. They provide a structured, project-aware context that helps an agent work responsibly and effectively.
