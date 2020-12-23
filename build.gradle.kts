plugins {
    id("dev.fritz2.fritz2-gradle") version "0.8" apply false
    kotlin("multiplatform") version "1.4.10" apply false
    kotlin("plugin.serialization") version "1.4.10" apply false
}

allprojects {
    repositories {
        jcenter()
        maven("https://dl.bintray.com/jwstegemann/fritz2")
    }
}