//FIXME: remove after release
pluginManagement {
    plugins {
        id("dev.fritz2.fritz2-gradle") version "0.9-SNAPSHOT"
    }
    repositories {
        mavenLocal()
        gradlePluginPortal()
    }
}

rootProject.name = "fritz2-examples"

include("gettingstarted")
include("todomvc")
include("nestedmodel")
include("validation")
include("remote")
include("repositories")
include("routing")
include("performance")
include("webcomponent")