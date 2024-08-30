---
theme: default
background: https://cover.sli.dev
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## GitHub on the CLI
  Presentation slides for Command Line Enthusiasts.

  Learn more at [cli.github.com](https://cli.github.com)
download: true
drawings:
  persist: false
transition: slide-left
title: Welcome to GitHub on the CLI
hideInToc: true
---

# Welcome to GitHub on the CLI

Presentation slides for Command Line Enthusiasts.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/mrolli/slides-github-on-the-cli" target="_blank" alt="Repo at GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
hideInToc: true
---

# What is Github CLI (gh)?

<v-click>

gh brings GitHub to your terminal. Free and open source.

gh has come to stay as first-class building block in the GitHub universe
(130 releases in 3.5y!)


gh is written in Go and therefore available on any platform.

</v-click>

<v-click>

<br />

## Ok, but why should I use GitHub CLI?

</v-click>

<v-click>

> Goodbye, context switching between your terminal and your browser
for a seamless and mouse-less efficient developer experience.

* **Entire GitHub workflow:** Work with issues, pull request, checks, release and more on the CLI
* **Script, automate and customize** almost any action with builtin commands
* **GitHub API:** eventually also everything else available via the GitHub API
* **Enterprise-ready:** works with GitHub.com and GitHub Enterprise Server

<style>
blockquote {
  font-size: larger;
  margin: 2em 0em;
}
</style>

</v-click>

---
hideInToc: true
---

# Where can I get help on GitHub CLI?

gh has an excellent built-in help that follow common usage:

```bash
gh --help
gh COMMAND [SUBCOMMAND] --help
```

These built-in help texts are also available as a manual at https://cli.github.com/manual.

The official micro-website on Github CLI is at https://cli.github.com with a
short visual introduction to the tool and links to the **manual** and the **release
notes**. The latter are well maintained and a good read after every upgrade.

gh is open source. Find the repo at https://github.com/cli/cli

---
hideInToc: true
---

# Agenda

<Toc></Toc>

---
layout: section
---

# Getting Started

Installing and Configuring

---

# Installing the GitHub CLI binary

Follow the installation instructions at https://github.com/cli/cli#installation
for your platform.

For me on macOS using Homebrew:

```bash
brew install gh
```

<br />

<v-click>

**On macOS:**  
gh is available via Homebrew, MacPorts, Conda, Spack

**On Windows:**  
gh is available via WinGet, scoop, Chocolatey, Conda, and as downloadable MSI.

**On Linux:**  
gh is available either via official repos or as package downloads - see
[Installing gh on Linux and BSD](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)

</v-click>

---
hideInToc: true
---

# Authenticating to GH and GHES

#### Login to github.com or our GHES

```bash
gh auth login
```

![Auth to GHES illustrated](/images/gh_auth_login.png)

---
hideInToc: true
---

# Authentication (cont.)

#### Show current authentication status

```bash
gh auth status
```

![Auth status](/images/gh_auth_status.png)

---

# Manage Permission Scopes

As an example, we are going to add the read:project permission scope to the
GHES token:

```bash
gh auth refresh --scopes read:project --hostname github.unibe.ch
```

For more information on managing permission scopes, see gh auth refresh --help

<br />

# Setup the gh Credential Helper

Configure git to use GitHub CLI as the credential helper for all authenticated hosts

```bash
gh auth setup-git
```

This edits your git configuration file.

---
layout: section
---

# Working with Repositories

Creating, cloning, forking and all the rest

---
hideInToc: true
---

# Overview of Repo Commands

```
Work with GitHub repositories.

USAGE
  gh repo <command> [flags]

GENERAL COMMANDS
  create:      Create a new repository
  list:        List repositories owned by user or organization

TARGETED COMMANDS
  archive:     Archive a repository
  clone:       Clone a repository locally
  delete:      Delete a repository
  deploy-key:  Manage deploy keys in a repository
  edit:        Edit repository settings
  fork:        Create a fork of a repository
  rename:      Rename a repository
  set-default: Configure default repository for this directory
  sync:        Sync a repository
  unarchive:   Unarchive a repository
  view:        View a repository
```

---
hideInToc: true
---

# Listing Repositories

* Show all repos my Repositories on github.com
```bash
gh repo list
```

* Show all repos of IDSYS on github.com
```bash
gh repo list idsys-unibe-ch
```

* List all repos of IDSYS on our GHES
```bash
GH_HOST=github.unibe.ch gh repo list idsys-unibe-ch
```

Having a hard-coded environment variable is not an ideal solution when you are
using both GitHub platforms, therefore an elegant alias might come in handy:

```bash
# Add this to your .bashrc or .zshrc
alias lgh="GH_HOST=github.unibe.ch gh"
```

---
hideInToc: true
---

# Forking and Cloning Repositories

* Clone an existing repo of mine

```bash
gh repo clone mrolli/testy
```

<br />

* Fork a repository of another user/organisation

```bash
gh repo fork idsys-unibe-ch/forkme4edu
```

This creates a fork in your user profile interactively. After forking you work
on feature branches in your fork and then you create a pull request against the
main branch of the upstream repository.

> This is the preferred way to contribute to repos where you don't have any
> permissions. The target repo only needs to be public.

---
hideInToc: true
---

# Creating new repositories

* Create a new repo on github.com interactively

```bash
gh repo create
```

<br />

* Create a new repo using flags and clone it locally

```bash
  gh repo create my-project --public --clone
```

<br />

* Create a new repo on github.com from an existing local repo:

```bash
git init
git add .
git commit -m "Initial commit"
gh repo create myorg/myrepo --public --source=.
git push -u origin main
```



---
layout: section
---

# Working with Issues

Creating, commenting, properties, templates, ...

---
hideInToc: true
---

# Overview of Issue Commands

```
Work with GitHub issues.

USAGE
  gh issue <command> [flags]

GENERAL COMMANDS
  create:      Create a new issue
  list:        List issues in a repository
  status:      Show status of relevant issues

TARGETED COMMANDS
  close:       Close issue
  comment:     Add a comment to an issue
  delete:      Delete issue
  develop:     Manage linked branches for an issue
  edit:        Edit issues
  lock:        Lock issue conversation
  pin:         Pin a issue
  reopen:      Reopen issue
  transfer:    Transfer issue to another repository
  unlock:      Unlock issue conversation
  unpin:       Unpin a issue
  view:        View an issues
```

---
hideInToc: true
---

# Examples for working with issues 

* List closed issues:
  ```bash
    gh issue list -s closed
  ```
* List all open issue that are relevant for me:
  ```bash
    gh issue status
  ```
* List all issue in organisation that are relevant for me:
  ```bash
    gh status -o idsys-unibe-ch
  ```
* View specific issue in terminal...
  ```bash
    gh issue view
  ```
* Edit specific issue:
  ```bash
    gh issue edit 123 --add-label bug
  ```
* Comment on specific issue using the content of a file:
  ```bash
    gh issue comment 123 --body-file ../output.log
  ```



---
layout: section
---

# Working with Pull Requests

Creating, commenting, templates, merging ...

---
hideInToc: true
---

# Overview of Pull Request commands

```bash
Work with GitHub pull requests.

USAGE
  gh pr <command> [flags]

GENERAL COMMANDS
  create:      Create a pull request
  list:        List pull requests in a repository
  status:      Show status of relevant pull requests

TARGETED COMMANDS
  checkout:    Check out a pull request in git
  checks:      Show CI status for a single pull request
  close:       Close a pull request
  comment:     Add a comment to a pull request
  diff:        View changes in a pull request
  edit:        Edit a pull request
  lock:        Lock pull request conversation
  merge:       Merge a pull request
  ready:       Mark a pull request as ready for review
  reopen:      Reopen a pull request
  review:      Add a review to a pull request
  unlock:      Unlock pull request conversation
  view:        View a pull request
```

---
hideInToc: true
---

# Examples for working with pull requests 

* List open pull requests:
  ```bash
    gh pr list
  ```
* Work on an issue by creating a linked branch and switch to the branch:
  ```bash
    gh issue develop 123 --checkout
  ```
* List all open PRs that are relevant for me:
  ```bash
    gh gh pr status
  ```
* Create a new PR interactively:
  ```bash
    gh pr create
  ```
* Show check runs on specific PR:
  ```bash
    gh pr check 123
  ```
* Merge specific PR using the rebase merge method:
  ```bash
    gh pr merge --rebase
  ```


---
hideInToc: true
---

# On Merge Methods

When working with PR, Github features three different merge methods:

* Merge pull request
* Squash and merge
* Rebase and merge

The allowed merge methods can be configured on a per repo basis.

> In a project, wisely choose one and stick to it! There is no right or false!

More information on this topic:

* [Official documentation on merge methods](https://docs.github.com/de/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/about-merge-methods-on-github)
* [GitHub Merge straegies explained by examples](https://github.com/MarcBoissonneault/github-merge-strategies)

Also mentioned here shall be the [merge queue feature](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-a-merge-queue) that GitHub offers.



---
layout: section
---

# Other Interesting Features

API, projects, releases, workflows, aliases, labels, extensions, ...

---
level: 2
---

# GitHub REST API Usage

```
function setup_snow_autolinkref {
  autolinkref=$(gh api --method GET \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "/repos/$1/autolinks" --jq '.[] | select(.key_prefix=="SNOW-")'
  )

  if [ -n "$autolinkref" ]; then
    success "Autolink reference for SNOW already setup."
    return 0
  fi

  gh api \
    --method POST \
    -H "Accept: application/vnd.github+json" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "/repos/$1/autolinks" \
    -f key_prefix="SNOW-" \
   -f url_template="https://serviceportal.unibe.ch/text_search_exact_match.do?sysparm_search=<num>" \
   -F is_alphanumeric=true
}
```

See https://docs.github.com/en/rest

---
level: 2
title: Project Commands (new)
---

# Overview of Project Commands

```
Work with GitHub Projects. Note that the token you are using must have 'project'
scope, which is not set by default. You can verify your token scope by running
'gh auth status' and add the project scope by running 'gh auth refresh -s
project'.

USAGE
  gh project <command> [flags]

AVAILABLE COMMANDS
  close:       Close a project
  copy:        Copy a project
  create:      Create a project
  delete:      Delete a project
  edit:        Edit a project
  field-create: Create a field in a project
  field-delete: Delete a field in a project
  field-list:  List the fields in a project
  item-add:    Add a pull request or an issue to a project
  item-archive: Archive an item in a project
  item-create: Create a draft issue item in a project
  item-delete: Delete an item from a project by ID
  item-edit:   Edit an item in a project
  item-list:   List the items in a project
  list:        List the projects for an owner
  view:        View a project
```

---
level: 2
title: Release Management
---

# Managing Project Releases

It's possible to create releases based on tags right from the CLI. First prepare
the tag to create a release for:

```bash
git checkout main
git tag -a -s -m "Release v1.0" v1.0
git push origin --tags
```

Then create the release - examples:

* Interactively create a release
```bash
gh release create
```
* Non-interactively create a release
```bash
gh release create v1.2.3 --notes "bugfix release"
```
* Use automatically generated release notes
```bash
gh release create v1.2.3 --generate-notes
```
* Create a release and start a discussion
```bash
gh release create v1.2.3 --discussion-category "General"
```

---
level: 2
title: Workflow Management
---

# Managing Workflows and Check Runs

```bash
List, view, and run workflows in GitHub Actions.

  gh workflow <command> [flags]

AVAILABLE COMMANDS
  disable:     Disable a workflow
  enable:      Enable a workflow
  list:        List workflows
  run:         Run a workflow by creating a workflow_dispatch event
  view:        View the summary of a workflow

```

```bash
List, view, and watch recent workflow runs from GitHub Actions.

  gh run <command> [flags]

AVAILABLE COMMANDS
  cancel:      Cancel a workflow run
  delete:      Delete a workflow run
  download:    Download artifacts generated by a workflow run
  list:        List recent workflow runs
  rerun:       Rerun a run
  view:        View a summary of a workflow run
  watch:       Watch a run until it completes, showing its progress
```

---
level: 2
title: Extending GitHub CLI
---

# Extensions

### Overview of Extension Commands

```bash
AVAILABLE COMMANDS
  browse:      Enter a UI for browsing, adding, and removing extensions
  create:      Create a new extension
  exec:        Execute an installed extension
  install:     Install a gh extension from a repository
  list:        List installed extension commands
  remove:      Remove an installed extension
  search:      Search extensions to the GitHub CLI
  upgrade:     Upgrade installed extensions
```

<br />

### Noteworthy extensions

```bash
❯ gh extension list
gh label             heaths/gh-label               v0.4.0
gh markdown-preview  yusukebe/gh-markdown-preview  23d1a241
```

---
level: 2
title: Label Management
---

# Managing GitHub Labels

* Builtin labels commands

```bash
AVAILABLE COMMANDS
  clone:       Clones labels from one repository to another
  create:      Create a new label
  delete:      Delete a label from a repository
  edit:        Edit a label
  list:        List labels in a repository
```

* Commands in heaths/gh-labels extensions

```bash
Available Commands:
  completion  generate the autocompletion script for the specified shell
  create      Create the label <name> in the repository
  delete      Delete the label <name> from the repository
  edit        Edit the label <name> in the repository
  export      Export labels from the repository to <path>, or stdout if <path> is "-".
  help        Help about any command
  import      Import labels into the repository from <path>, or stdin if <path> is "-".
  list        List labels in the repository, optionally matching substring [name] in the label name or description
````

---
hideInToc: true
layout: cover
background: https://source.unsplash.com/collection/94734566/1920x1080
---

# Thank you!

## Questions? More feature demonstration?
