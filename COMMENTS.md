# Comments

## Dev dependencies

* I like to use **Prettier** and **Eslint**. For this project, I tried to make it better than I normaly used on my projects.
* I usually write typed JavaScript and mostly with **Flow**, which I use for more than 2 years.
* **Jest** is a game change for me and I use for every single JavaScript project.
* **yarn audit** helps to keep the project updated, so I like to see the warnings before each deploy.

## Dependencies

* **express** feels to me, the most solid library for Node servers. I use on my applications. It has a good performance too.
* **axios** has a good support to make the requests and works with Promises. So I chose it for this project.
* **morgan** I use morgan for my projects to help debugging. I usually like to make queries to find what I need, and this tool helps me a lot.

## What I'd like to do

When I have to build a new API. I like to run some performance tests with a raw environment containing only the API. It helps me to optimize the code before go to infrastructure enhancement.

For this project, I think that **Docker** would help to have a easy deployment system.

For the cache system, I think that a RPAAS using **NGINX**, as a layer in front of the application, would help to deal with repeated requests. And **Redis** between the application and the other API, would help to scale the application.