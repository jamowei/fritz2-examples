plugins {
    id("dev.fritz2.fritz2-gradle") version "0.7.1" apply false
    kotlin("plugin.serialization") version "1.4.0" apply false
}

subprojects {
    repositories {
        mavenLocal()
    }
}