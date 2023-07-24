gh show off

Login/Auth
- gh auth login -h       # auch mit Enterprise Github
- gh auth status

Repos:
- gh repo list
- gh repo list idsys-unibe-ch
- gh repo view idsys-unibe-ch/idilub.ansible
- gh repo clone idsys-unibe-ch/unisign
- cd unisign
# word on user.name / user.email
- gh repo view
- gh repo view -w

- gh repo fork neovim/nvim-lspconfig

- gh repo create   # interactive
- gh repo create mytestrepo --private --source=. --remote=origin

gh issue
    - create
    - edit
    - list
    - comment
    - develop

gh pr merge
  - add link to comparison of merge strategies

gh alias set bugs 'gh issue list --authorlabel="bug"'
