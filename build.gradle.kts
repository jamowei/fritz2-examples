plugins {
    id("dev.fritz2.fritz2-gradle") version "0.13" apply false
    kotlin("multiplatform") version "1.5.31" apply false
    kotlin("plugin.serialization") version "1.5.31" apply false
}

allprojects {
    repositories {
        mavenCentral()
    }
}