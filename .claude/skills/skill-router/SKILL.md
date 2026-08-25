---
name: skill-router
description: Find and apply the right installed skill automatically when it's unclear which of the 130+ skills in this repo fits. Use on short trigger phrases — "route", "ruta", "/route <tarea>", "usa el router", "busca el skill", "qué skill uso para esto", "encuentra el skill adecuado", "aplica el skill correcto" — or whenever the user gives a task without naming a specific skill and wants Claude to pick one from the repo's library instead of answering from scratch.
---

# Skill Router

Dispatches a task to the best-matching skill already installed in `.claude/skills/` instead of answering ad hoc.

## Quick invocation

Any of these run it — no need for a full sentence:
- `route: <tarea>` or `ruta: <tarea>`
- `usa el router: <tarea>`
- `busca el skill para <tarea>`
- Or just describe the task and add "encuentra el skill correcto" anywhere in it.

## Steps

1. **Match first, don't re-scan the filesystem.** The full list of installed skills — name + trigger description — is already given to you every turn in the "available skills" system reminder. Use that list directly; it's faster and always current. Only fall back to `ls .claude/skills/` or reading `SKILL.md` files by hand if that list seems incomplete or you need a skill's full body, not just its description.

2. **Match against the user's request.** Compare the task's intent — not just keywords — to each skill's description. Several skills can look adjacent (e.g. `pricing` vs `paywalls`, `earnings-preview` vs `earnings-preview-beta`, `deal-tracker` vs `deal-sourcing`); pick the one whose description most specifically covers the request. If two are genuinely both relevant (e.g. a task needs `customer-research` findings fed into `copywriting`), say so and plan to run both, in order.

3. **State the match before acting.** One line: which skill(s) matched and why. Don't skip this — it's what lets the user catch a wrong pick before work starts.

4. **Invoke it.** Use the Skill tool with the matched skill name, passing the user's original request as context. Let that skill's own instructions take over from there.

5. **No confident match.** If nothing in the library covers the request (below ~50% confidence), say so plainly and proceed with a normal, unassisted answer — don't force a bad fit just to use a skill.

## Notes

- This router does not replace automatic triggering — most skills already fire on their own when a prompt matches their description. Use this explicitly when you want a guaranteed scan of the full library, when the request is ambiguous across several skills, or when a normal prompt didn't trigger anything.
- Prefer the most specific skill over a general one when both match (e.g. `cold-email` over `emails` for outbound prospecting).
