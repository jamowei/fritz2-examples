[![fritz2](https://www.fritz2.dev/images/fritz2_logo_grey.png)](https://www.fritz2.dev/)
# Examples
![build](https://github.com/jamowei/fritz2-examples/workflows/build/badge.svg)

This repo hosts ready-to-try examples to give you quick insight into how development of web-apps using fritz2 is like. 

If you want to learn more about fritz2 and how it's works, take a look at our [documentation](https://docs.fritz2.dev/).

The following examples are available:
* [gettingstarted](https://examples.fritz2.dev/gettingstarted/build/distributions/index.html) - shows the one- and two-way-databinding in fritz2.
* [nestedmodel](https://examples.fritz2.dev/nestedmodel/build/distributions/index.html) - shows the handling with complex models in fritz2.
* [remote](https://examples.fritz2.dev/remote/build/distributions/index.html) - shows the use of remote extension within fritz2.
* [routing](https://examples.fritz2.dev/routing/build/distributions/index.html) - shows the use of routing extension within fritz2.
* [validation](https://examples.fritz2.dev/validation/build/distributions/index.html) - shows the use of validation extension within fritz2.
* [todomvc](https://examples.fritz2.dev/todomvc/build/distributions/index.html) - shows the implementation of the [TodoMVC](http://todomvc.com/) specification using fritz2.
* [webcomponent](https://examples.fritz2.dev/webcomponent/build/distributions/index.html) - shows the implementation of a [WebComponent](https://www.webcomponents.org/) using fritz2.

### Running locally
If you want to run our examples locally you can clone this repository and then execute:
```
fritz2-examples> ./gradlew <example-folder-name>:jsRun
``` 
You can add the `--continuous` flag to enable the automatic re-compiling of 
your changes and reloading your browser page.

### Create your own project
If you want to get started with fritz2 easily checkout our 
[template-project](https://github.com/jwstegemann/fritz2-template).