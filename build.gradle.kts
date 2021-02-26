plugins {
    id("dev.fritz2.fritz2-gradle") version "0.9-SNAPSHOT" apply false
    kotlin("multiplatform") version "1.4.30" apply false
    kotlin("plugin.serialization") version "1.4.30" apply false
}

allprojects {
    repositories {
        mavenLocal() //FIXME: remove before release
        mavenCentral()
        jcenter()
        maven("https://dl.bintray.com/jwstegemann/fritz2")
    }
}