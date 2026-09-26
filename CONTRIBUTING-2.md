> 2026-2027
# Contributing to Buurtcampuskrant
This document describes how we work together on the Buurtcampuskrant project. We are continuing development on an existing project from previous FDND teams. The current 'dev' branch is our shared starting point. New work should build on the existing codebase and contribute to one shared product.
 ***

 ## Team goals & collaboration

<details> <summary>Personal learning goals:</summary>
  
Bronx:
-
-

Kurollos:
-
-

Nadira
-
-
</details>

***

## Team agreements

We use the following agreements throughout the project:

- We hold a daily standup
- Tasks and progress are tracked in the projectboard
- Every task had one clear main responsible team member
- Work starts from a github issue
- Blockers are communicated early
- We divide work so everyone contributes to different phases of the DLC
- We actively ask for and give feeedback
- We follow the FDND code conventions
- We review each others work before its merged
- We support each other in achieving personal learning goals
- We share useful research and knowledge within the team
- At the end of every week we briefly reflect on our collaboration

## Stand-ups & communication
Every day we hold a short stand-up. Each team member briefly ecplains:

```
- What am i working on?
- What have i completed?
- What is my next step?
- Am i blocked by anything?
- Do i need help or feedback?
```
> The goal of the stand-up is to create a shared overview of the sprint and identify blockers early.
> 
## Weekly team reflection

At the end of every week we briefly discuss our collaboration.

We use the following questions:

- What went well?
- What went less well?
- Were responsibilities clear?
- Did we discuss blockers on time?
- How did giving and receiving feedback go?
- What do we want to improve next week?

***

## Git workflow
We use a git workflow in which all development is integrated through dev

### Main
Main contains the stable production version of the project
- `Do NOT commit directly to main`
- `Code is only merged into main when it is ready for release`

### Dev
Dev is our shared development and integration branch
- `Do NOT commit directly to dev`
- `All feature branches start from the lates version of dev`
- `Completed work is merged back into dev through a pull request`
- `Team members review and test work before it is merged`

## Feature branches

- Every issue is developed on a separate branch
- Use clear branch names that describe the type and purpose of the work.

  `type/component-name`
  
  ```
  example:
  feature/article-component
  refactor/article-component
  ```

  ## Conventional commits
  We use conventional commits to keep the git history clear and consistent

  Use:
  `type: short description (#refrence issue number)`

  ### Commit types
 -  `build:` changes that affect the build system or dependencies
 -  `chore:` maintenance or supporting work
 -  `docs:` documentation changes
 -  `feat:` new functionality
 -  `fix:` fixing a bug, layout or behaviour
 -  `refactor:` restructuring code without changing functionality
 -  `style:` formatting or readability changes
 -  `test:` adding or improving tests

  ```
  Example:
  feat: add archive overview #12
  ```

***

## Working from issues
All project work starts from a github issue on the projectboard

An issue can be:
- [Epic] : a larger project goal
- [User story] : a user need within an epic
- [Task] : smaller implementation or supporting work
- [Feature] : New functionality
- [Bug] : Fixing an existing problem
- [Documentation] : project documentation or shared knowledge
- [Team] : collaboration implementations

We break larger work down as:
```
Epic
|
v
User story
|
v
Tasks
```

an issue should make clear:
- What needs to be done
- Why it is needed
- What the expected result is
- What the acceptance criteria are

## MosCow prioritisation
We use MoSCoW to help prioritise work
- `Must have` : essential for the current delivery
- `Should have` : important but not critical
- `Could have` : useful if time allows
- `Won't have` : deliberately outside the current scope

> Priorities can change based on feedback, project progress or new information

## Definition of Ready (DoR)
- The story has a clear title and description
- Includes a checklist with acceptance criteria
- All required information and files are available
- Poker planning has been completed
- Everyone in the team understands the story


## Definition of Done (DoD)
- Code runs without errors
- All acceptance criteria of the story are met
- Code has been reviewed by a team member
- Functionally tested
- Merged into the dev branch
- Deployed to the test environment

## Delivery checklist

Before delivery, make sure:

- README.md is complete.
- Projectboard is up-to-date with all issues (closed,prioritised).
- All code reviewed and tested (lighthouse-, accessibility-, browser/device-, usertests).
- No open pull requests remain.
- Code is clean: unused files/code removed, structure refactored.
