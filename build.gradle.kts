plugins {
    id("dev.fritz2.fritz2-gradle") version "0.11" apply false
    kotlin("multiplatform") version "1.5.10" apply false
    kotlin("plugin.serialization") version "1.5.10" apply false
}

allprojects {
    repositories {
        mavenCentral()
    }
}