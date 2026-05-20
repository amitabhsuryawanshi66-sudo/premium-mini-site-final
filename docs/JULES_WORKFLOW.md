# Jules Workflow

The standard workflow for Jules in this repository:

1. **Identify the Task**: Clarify requirements and constraints.
2. **Deep Planning**: Create a numbered plan before execution.
3. **Skill Alignment**: Match the task to relevant `agent-skills/`.
4. **Root-Only File Execution**: Create all project files at the repository root.
5. **No Terminal Build**: Do not run `npm install` or `npm run build`. Let Vercel handle the deployment.
6. **Pre-Commit Verification**: Manually inspect files (via `cat`/`ls`) before submitting.
7. **Detailed Reporting**: Provide a final report confirming all core file presence and validity.
