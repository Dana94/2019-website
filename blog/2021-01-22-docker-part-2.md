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

- `FROM <image>[:<tag>]` can start you off with an existing image as the base of the build. In Docker Hub (we'll get to this in a bit), there are specific images that you can use like `node` or `python` for running programs based in that language(?).

- `WORKDIR path/to/folder` is the name of the directory being created in the container.

- `RUN <command>` launches necessary commands to run the program as you would do locally (for example: to install dependencies in a node project, you'd have to include `RUN npm install`).

- `COPY <path/to/source> <path/to/destination>` will copy the rest of the project's code into the image. There are 2 arguments for this command. The first being the path where the files are located locally, and the second being what path in the image it's being copied to.

- `EXPOSE <port>` is used to specify what ports the container should listen to when running. You need to publish the port in the command to run the container. The port is expected in the project's code. This actually optional here and isn't required to run the container. What's important is when publishing it. This is to show as documentation.

- `CMD ["<executable>", "<param1>", ...]` is the command to execute the project. There is only one of these instructions in the file. This won't be executed when the _image_ is created but when the _container_ is created.

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

If you change the project's code after building the image, you will need to rebuild the image again. That's because images are read-only and locked once they're created. The `COPY` command takes a snapshot of the code and does not update itself if the project is edited.

## Using Prebuilt Images

There are existing images you can use as a starter in a Dockerfile or just to use to solely run a container off of. [Docker Hub](https://hub.docker.com/) is a good source for finding images. Docker Hub is a lot like GitHub except it has images instead of repositories.

If you want to start up a new container (which will be discussed in the next section) you could just use the image name even if it's not on found on your computer. Here, the `node` image is pulled from Docker Hub (if you're connected) since it's not on my computer.

```bash
> docker run node
```

[Found a typo or problem? Edit this page.](https://github.com/Dana94/website/blob/master/blog/2021-01-22-docker-part-2.md)
