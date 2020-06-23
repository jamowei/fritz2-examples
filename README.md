[![fritz2](https://www.fritz2.dev/images/fritz2_logo_grey.png)](https://www.fritz2.dev/)
# Examples
![build](https://github.com/jamowei/fritz2-examples/workflows/build/badge.svg)

These ready-to-try examples give you some insight into web-app development with fritz2. 

If you want to learn more about fritz2 and how it works, take a look at our [documentation](https://docs.fritz2.dev/).

The following examples are available:
* [gettingstarted](https://examples.fritz2.dev/gettingstarted/build/distributions/index.html) - one- and two-way-databinding in fritz2
* [nestedmodel](https://examples.fritz2.dev/nestedmodel/build/distributions/index.html) - how to handle complex models in fritz2
* [remote](https://examples.fritz2.dev/remote/build/distributions/index.html) - the use of remote extension in fritz2
* [routing](https://examples.fritz2.dev/routing/build/distributions/index.html) - shows routing extensions in fritz2
* [validation](https://examples.fritz2.dev/validation/build/distributions/index.html) - validation extension in fritz2
* [todomvc](https://examples.fritz2.dev/todomvc/build/distributions/index.html) - implementing the [TodoMVC](http://todomvc.com/) specification using fritz2
* [webcomponent](https://examples.fritz2.dev/webcomponent/build/distributions/index.html) - implementing a [WebComponent](https://www.webcomponents.org/) using fritz2

### Running locally
To run our examples locally, clone this repository and then execute
```
fritz2-examples> ./gradlew <example-folder-name>:jsRun
``` 
You can add the `--continuous` flag to enable the automatic re-compiling of 
your changes and reloading your browser page.

### Create your own project
For an easy start into fritz2, check out our 
[template-project](https://github.com/jwstegemann/fritz2-template).