plugins {
    kotlin("multiplatform")
    id("dev.fritz2.fritz2-gradle")
}

repositories {
    mavenCentral()
}

kotlin {
    js(IR) {
        browser()
    }.binaries.executable()

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("dev.fritz2:core:0.9.1")
            }
        }
        val jsMain by getting {
            dependencies {
            }
        }
    }
}