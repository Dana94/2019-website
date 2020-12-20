---
title: Docker - Part 2
path: docker-part-2
date: 2021-01-22
tags: ['coding', 'docker']
---

<!-- table of contents of all docker parts? -->
<!-- or a prev/next for posts? -->

## What is a Dockerfile?

A Dockerfile is a file that has a set of instructions on what Docker needs to build an image to create a new container.

## Make-up of a Dockerfile

To make one, you just create a new file in the root of your project and name it "Dockerfile" (no extension).

There are various optional commands you can use. I'm just listing the ones I've learned so far:

- `FROM <image>[:<tag>]` can start you off with an existing image as the base of the build. In DockerHub (we'll get to this in a bit), there are specific images that you can use like `node` or `python` for running programs based in that language(?).

- `WORKDIR path/to/folder` is the name of the directory being created in the container.

- `RUN <command>` launches necessary commands to run the program as you would do locally (for example: to install dependencies in a node project, you'd have to include `RUN npm install`).

- `COPY <path/to/source> <path/to/destination>` will copy the rest of the project's code into the container. There are 2 arguments for this command. The first being the path where the code is located, and the second being what path in the container it's being copied to.

- `EXPOSE <port>` is used to specify what ports the container should listen to when running. You need to publish the port in the command to run the container.

- `CMD ["<executable>", "<param1>", ...]` is the command to execute the project. There is only one of these instructions in the file.

## What is an Image?

An image are the blueprints to make a container that contain code and required tools. One an image can create multiple containers. Images can be shared so a developer can spin up a new container on their own machine without having to need the Dockerfile it was built from.

## Building an Image

Use the `docker build` command with the path where the Dockerfile is located.

Here, the `.` means the root of the folder.

```bash
> docker build .
```

After it's done building, there will be an ID created for the image to use to run a container. I found it easier to look under `docker images` to copy/paste this ID. This command will display all created images available.

Example:

```bash
> docker images
REPOSITORY               TAG                 IMAGE ID            CREATED             SIZE
<none>                   <none>              bee345bd2248        9 minutes ago       946MB
docker/getting-started   latest              67a3629d4d71        2 days ago          27.2MB
```


[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2021-01-22-docker-part-2.md)
