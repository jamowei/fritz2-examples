plugins {
    id("dev.fritz2.fritz2-gradle") version "0.7.1" apply false
    kotlin("plugin.serialization") version "1.4.10" apply false
}

allprojects {
    repositories {
        jcenter()
        //FIXME: remove before release
        maven("https://oss.jfrog.org/artifactory/jfrog-dependencies")
    }
}