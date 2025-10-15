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

## Testing

We conducted various quality and user tests to ensure the reliability and accessibility of this project.

### Functional Testing
- All features tested.
- Unit/integration tests performed where necessary.

### Performance
- Lighthouse performance score: 97/100.
- Notes: images are too large and could be optimized.

### Accessibility (A11y)
- Lighthouse accessibility score: 79/100.
- Tab navigation: quotes and articles in the filter are not reachable via tab.
- Contrast analyzer: issues found in the newsletter and menu.
- Alt texts: checked and adjusted.

### Responsiveness & Browser Tests
- Safari: images are not displayed correctly.
- Responsive checked

### Validation
- HTML validator checked: no errors found.

### User Testing / UX
- Content and context are not always clear to the user:
  - Short introductory text or visual guidance is missing.
  - Layout feels illogical: first articles, then newsletter, then other articles. The distinction and order are not clear.
 
## Retrospective
### Set the stage - Round of admiration (#76)
**Jules about Rick:** Admires the positive vibes from Rick. He stays chill and calms me a bit when I can freak out. 
**Rick about Akiko:** Admires from Akiko is in the lessons and created the component that was assigned to her. 
**Akiko about Jules:** Admires from Jules that she takes the lead en makes sure everything is in control and that she designed something. 

**Rick about Jules:** Admires that she is a go-getter. She is overall a good team lead. 
**Jules about Akiko:** Admires that she communicates when she isn't at school. 
**Akiko about Rick:** Admires that he is just a chill guy, that when she needs help he helps her. 


### Gather Data - The good the bad and the uglie (#121)
The following conclusions are a result off the 'gather data' round:
* Akiko & Rick will come up more to make a planning or have a stand up. They will also take more responsibillity for deadlines etc. so that Jules won't be the only one that takes responsibillity.
* Akiko maybe need to respond a bit faster in teams or communicate a little more.
* Check up the teamcanvas a bit more for the personal goals.
* Time to really get into the data!!
* Pay more attention to the details within the pull requests.

<img width="600" src="https://github.com/user-attachments/assets/4c459ec0-7c9c-4210-b480-6e6734a9863f">


### Generate insights - Wish grantedn (#50)
Everyones their wish was that the database would be filled in. That so we could move on with our code and that it will come nearer to the end result. 


### Decide what to do - Pitch (#73)
Verbally discussed.


### Close the retrospective - You and me (#102)
<img width="400" src="https://github.com/user-attachments/assets/e54d8b22-321d-4a3e-b690-d2a58655788f">
<img width="400" src="https://github.com/user-attachments/assets/311b48f1-bbb7-4613-894c-a2ee4ea3b06e">


## Definition of Ready
The Definition of Ready is the set of agreements made by the Scrum Team to determine which items are ready to be worked on by the developers during the sprint. This is important because the goal of the Scrum Team is to deliver the most valuable items as quickly as possible. By making clear agreements about the quality of user stories, the developers can pick them up and deliver them more efficiently.
Bron: [Wat is de Definition of Ready? | Agile Scrum Group](https://agilescrumgroup.nl/wat-is-definition-of-ready/)

* Figma if necessary
* Stories poker planned
* Moscow used
* format for user stories (as .. la la)


## Definition of Done
The Definition of Done is a checklist that indicates when a product or one of its components is considered complete. It prevents discussions about what “done” means and provides clarity within the Scrum Team. The checklist helps ensure quality and defines the minimum criteria that must be met for work to be considered delivered.
Bron: [Wat is Definition of Done? Uitleg + voorbeelden (IT & non-IT)](https://agilescrumgroup.nl/wat-is-definition-of-done/)

* Tested
* Task is finished
* Code convetions are implented
* Merged into dev branch
* Livelink with dev branch

