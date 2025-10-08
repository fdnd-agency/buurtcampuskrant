# Teamafspraken en teamcanvas
Hier is alles te vinden over onze doelen, afspraken en onze conventies en templates. 

## Persoonlijke doelen
### Rick: 
- Hoe kan ik beter buiten school om communiceren?
- Waar kan ik goede inspiratie opdoen voor orginele website?

### Akiko:
- Hoe kan ik beter overzicht creeëren?
- Hoe kan ik gestructureerder te werk gaan?
- Hoe kan ik goede view-transition animaties maken?

### Jules:
- Hoe kan ik goede keyframe animaties maken?
- Hoe kan ik goede view-transition animaties maken?
- Hoe kan ik minder snel in paniek raken als het niet lukt?


## Teamafspraken
- Maandag: planning maken voor de komende week.
- Woensdag: stand-up houden.
- Vrijdag: planning nalopen, evalueren.
- We houden veel contact via teams, meldingen ook op mobiel aan. 


## Teamcanvas
<img width="800" alt="teamcanvas buurtcampuskrant" src="https://github.com/user-attachments/assets/216f342c-001e-4494-88d0-b381291fda90" />


## Code conventions
Hiervoor gebruiken we de code conventions van [FDND](https://teams.microsoft.com/l/message/19:bd2dcf5fad144fafb5ff07bc8e2a0903@thread.v2/1758545106106?context=%7B%22contextType%22%3A%22chat%22%7D). Verder leggen we ingewikkelde code voor elkaar uit in comments. 

# Contributing Guidelines

## Quick Start
- Create a feature branch from `dev` (never commit directly to `main` or `dev`).
- Use clear branch names: `feature/...`, `fix/...`, `docs/...`.
- Write commits using [Conventional Commits](https://www.conventionalcommits.org).
- Open Pull Requests (PRs) into `dev`, not `main`.
- Link your work to an issue on the project board.
- Keep PRs small, reviewed, and approved before merging.

## Git Workflow

We follow a structured Git workflow to keep our codebase organized and collaborative:

- **`main`**  
  The stable production branch. Code only lands here after teacher approval.

- **`dev`**  
  The integration branch. All work is merged here first. Nobody commits directly to `dev`.

- **Feature branches**  
  Every team member works on their own branch that starts from `dev`. Once the work is finished, the branch is merged back into `dev` via a Pull Request.

## Branch Naming
Branches must clearly describe the purpose of the work. Use lowercase with a prefix like: "feature/component-name"

## Conventional Commits
"At FDND Agency, because of Semantic Versioning, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). Conventional commit is a specification, a set of rules that have to be followed when writing commit messages."

**Allowed Commit types:**
- `build: ...` Changes that affect the build system or external dependencies
- `chore: ...` Changes to the build process or auxiliary tools and libraries such as documentation generation
- `ci: ...` Changes to CI configuration files and scripts (GitHub Actions, netlify.toml)
- `docs: ...` Changes to documentation, eg: Readme.md, Handover.md or Figma files or design rationale in the Wiki
- `feat: ...` Implementing a new feature
- `fix: ...` Fix for a bug, style or layout issue
- `perf: ...` A code change that improves performance
- `refactor: ...` A code change that neither fixes a bug nor adds a feature but improves structure or readability
- `style: ...` Changes that affect readability but not the working of the code (source formatting, adding tabs or newline)
- `test: ...` Adding missing or correcting existing tests

## Reference issues in commits
Add the corresponding #issue-number to your commit messages for easy reference.

## Pull Requests
- Always open a PR into the `dev` branch.  
- Keep PRs small and focused.  
- Review your own code before requesting a review.  
- Provide context in the description (what and why).  
- Teammates must review and approve before merging.  

## Pull request template
- What does this change?
- How Has This Been Tested?
    - [ ] [User test]()
    - [ ] [Accessibility test]()
    - [ ] [Performance test]()
    - [ ] [Responsive Design test]()
    - [ ] [Device test]()
    - [ ] [Browser test]()
- Images
- How to review

## Issues & Project Board
We manage all work through GitHub issues connected to the project board.

**Types of issues:**
- **Feature** – new functionality or component  
- **Bug** – fix for an error  
- **Task** – supporting work (refactoring, styling, setup)  
- **Documentation** – README updates, handover, notes  

**Structure:**
- Large goals → broken down into **epics → user stories → tasks**  
- Each issue must be:
  - Clear and small enough to complete quickly  
  - Assigned to a team member  
  - Linked to the project board


