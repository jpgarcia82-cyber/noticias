---
name: skill-router
description: Find and apply the right installed skill automatically when it's unclear which of the 100+ skills in this repo fits. Use when the user says things like "busca el skill que necesito y aplícalo", "qué skill uso para esto", "encuentra el skill adecuado", "aplica el skill correcto", or gives a task without naming a specific skill and wants Claude to pick one from the repo's library instead of answering from scratch.
---

# Skill Router

Dispatches a task to the best-matching skill already installed in `.claude/skills/` instead of answering ad hoc.

## Steps

1. **List installed skills.** Run:
   ```
   for f in .claude/skills/*/SKILL.md; do echo "== $(dirname "$f" | xargs basename) =="; sed -n '/^description:/,/^---$/p' "$f" | head -5; done
   ```
   (Skip `skill-router` itself.)

2. **Match against the user's request.** Compare the task's intent — not just keywords — to each skill's `description`. Several skills can look adjacent (e.g. `pricing` vs `paywalls`, `earnings-preview` vs `earnings-preview-beta`, `deal-tracker` vs `deal-sourcing`); pick the one whose description most specifically covers the request. If two are genuinely both relevant (e.g. a task needs `customer-research` findings fed into `copywriting`), say so and plan to run both, in order.

3. **State the match before acting.** One line: which skill(s) matched and why. Don't skip this — it's what lets the user catch a wrong pick before work starts.

4. **Invoke it.** Use the Skill tool with the matched skill name, passing the user's original request as context. Let that skill's own instructions take over from there.

5. **No confident match.** If nothing in the library covers the request (below ~50% confidence), say so plainly and proceed with a normal, unassisted answer — don't force a bad fit just to use a skill.

## Notes

- This router does not replace automatic triggering — most skills already fire on their own when a prompt matches their description. Use this explicitly when you want a guaranteed scan of the full library, when the request is ambiguous across several skills, or when a normal prompt didn't trigger anything.
- Prefer the most specific skill over a general one when both match (e.g. `cold-email` over `emails` for outbound prospecting).
