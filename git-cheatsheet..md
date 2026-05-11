# Git & GitHub Notes:

## 🔹 Basic Workflow

- `git init` – initialize a new repository
- `git add file-name` – stage a specific file
- `git add .` – stage all files
- `git status` – show the current status of the working directory
- `git restore --staged file-name` – unstage a file
- `git commit -m "message"` – create a new commit with a message
- `git log` – view full commit history
- `git log --oneline` – view commit history in short format
- `git checkout <commit-id>` – switch to a specific commit (detached HEAD)
- `git checkout main` – switch back to the main branch
- `git revert <commit-id>` – create a new commit that undoes changes from a previous commit
- `git revert --abort` – cancel the revert process and restore previous state
- `git switch branch-name` – switch to an existing branch
- `git switch -c branch-name` – create and switch to a new branch
- `git reset <commit-id>` – move HEAD to a previous commit (modifies history)
- `git reset --soft <commit-id>` – move HEAD but keep changes staged
- `git reset <commit-id>` – move HEAD and unstage changes (keep files)
- `git reset --hard <commit-id>` – move HEAD and delete all changes permanently
- `git branch` – list all branches
- `git branch branch-name` – create a new branch
- `git switch branch-name` – switch to an existing branch
- `git switch -c branch-name` – create and switch to a new branch
- `git checkout branch-name` – (older) switch to a branch
- `git branch -d branch-name` – delete a branch (safe delete)
- `git branch -D branch-name` – force delete a branch
- `git merge branch-name` – merge a branch into the current branch
- `git stash` – save current changes (tracked files) and clean working directory
- `git stash save "message"` – stash with a custom message (older syntax)
- `git stash push -m "message"` – stash changes with a message (recommended)
- `git stash apply` – apply last stash (keeps it in stash list)
- `git stash pop` – apply last stash and remove it from stash list
- `git stash list` – show all stashed changes
- `git stash drop` – delete last stash
- `git stash clear` – delete all stashes
- `git stash apply stash@{0}` – apply specific stash
- `git stash drop stash@{0}` – delete specific stash
- `git stash -u` – stash tracked + untracked files

## 🔹 Commit Types (Conventional Commits)

- `feat` – new feature
- `fix` – bug fix
- `docs` – documentation
- `style` – formatting (no logic changes)
- `refactor` – code improvement
- `chore` – maintenance

## 🔹 Terminal Commands

- `touch filename` – create a new empty file
- `mkdir folder-name` – create a new folder
- `cd folder-name` – navigate into folder

## 🚀 Notes

- Always write meaningful commit messages
- Keep commits small and focused
- Use `main` as the default branch