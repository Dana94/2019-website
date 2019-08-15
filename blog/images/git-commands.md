---
title: Git Commands I Currently Use
path: git-commands-i-currently-use
date: 2019-08-16
tags: ['coding','git']
---

> Table of contents

[Source](https://opensource.com/resources/what-open-source)

## Prerequisute

Install Git from this [page](https://git-scm.com/downloads).

You cannot immediately use Git in a project until the project is initialized for it.
There are 2 ways I go about this:

## Initialize

`Git init`

For a project you only have locally on your computer and not in GitHub.

Initialize the project as a Git repository (repo). The command will automatically create the Master branch.

```shell
~/
$ mkdir sample-repo

~/
$ cd sample-repo/

~/sample-repo
$ git init
```

Or pull down a new repo form GitHub.

`Git clone <url>`

Download repo from GitHub onto your computer. The project will already be a Git repository.

Make sure HTTPS is selected, and click the copy to clipboard button.

> Add image here

Add the url after “git clone”

```shell
~/
$ git clone https://github.com/Dana94/git-example.git
```

## Creating branches

It’s important to not work in your base branch (normally called “master”). Make sure to be constantly working in separate branches for different features.

`Git checkout <branch-name>`

Changes the branch you are currently working in to the one you specify. This will only work if the branch you want to change to already exists.

To create a new branch and check it out:

`Git checkout –b <new-branch-name>`

```shell
~/git-example (master)
$ git checkout -b new-feature
Switched to a new branch 'new-feature'

~/git-example (new-feature)
$ git checkout master
Switched to branch 'master'
```


