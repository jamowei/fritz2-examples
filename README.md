[![fritz2](https://fritz2.dev/img/fritz2_header.png)](https://www.fritz2.dev/)
# Examples
![build](https://github.com/jamowei/fritz2-examples/workflows/build/badge.svg)

These ready-to-try examples give you some insight into web-app development with fritz2. 

If you want to learn more about fritz2 and how it works, take a look at our [documentation](https://www.fritz2.dev/docs/).

The following js-only examples are available:
* [gettingstarted](https://examples.fritz2.dev/gettingstarted/build/distributions/index.html) - one- and two-way-databinding in fritz2
* [nestedmodel](https://examples.fritz2.dev/nestedmodel/build/distributions/index.html) - how to handle complex models in fritz2
* [remote](https://examples.fritz2.dev/remote/build/distributions/index.html) - the use of remote service in fritz2
* [repositories](https://examples.fritz2.dev/repositories/build/distributions/index.html) - the use of repositories service in fritz2
* [routing](https://examples.fritz2.dev/routing/build/distributions/index.html) - shows routing service in fritz2
* [validation](https://examples.fritz2.dev/validation/build/distributions/index.html) - validation service in fritz2
* [todomvc](https://examples.fritz2.dev/todomvc/build/distributions/index.html) - implementing the [TodoMVC](http://todomvc.com/) specification using fritz2
* [webcomponent](https://examples.fritz2.dev/webcomponent/build/distributions/index.html) - implementing a [WebComponent](https://www.webcomponents.org/) using fritz2
* [tictactoe](https://examples.fritz2.dev/tictactoe/build/distributions/index.html) -  demonstrates the combination of UI, logic and state with fritz2

We also provide the following full-stack examples:
* [spring-todomvc](https://github.com/jamowei/fritz2-spring-todomvc) - todomvc web-application build with [spring](https://spring.io/) backend
* [ktor-todomvc](https://github.com/jamowei/fritz2-ktor-todomvc) - todomvc web-application build with [ktor](https://ktor.io/) backend

### Running locally
To run our examples locally, clone this repository and then execute
```
fritz2-examples> ./gradlew <example-folder-name>:jsBrowserRun
``` 
You can add the `-t` flag to enable the automatic re-compiling of 
your changes and reloading your browser.

### Create your own project
For an easy start into fritz2, check out our 
[simple-project](https://github.com/jwstegemann/fritz2-template)
or [tailwind-template](https://github.com/jwstegemann/fritz2-tailwind-template).