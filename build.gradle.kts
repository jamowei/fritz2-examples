plugins {
    id("dev.fritz2.fritz2-gradle") version "0.9.1" apply false
    kotlin("multiplatform") version "1.4.30" apply false
    kotlin("plugin.serialization") version "1.4.30" apply false
}

allprojects {
    repositories {
        mavenCentral()
        maven("https://s01.oss.sonatype.org/content/repositories/snapshots/")
    }
}