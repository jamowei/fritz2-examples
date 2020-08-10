plugins {
    id("dev.fritz2.fritz2-gradle") version "0.6"
}

repositories {
    maven("https://oss.jfrog.org/artifactory/jfrog-dependencies")
    jcenter()
}

kotlin {
    jvm()
    js().browser()

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(kotlin("stdlib"))
                implementation("dev.fritz2:core:0.7-SNAPSHOT")
            }
        }
        val jvmMain by getting {
            dependencies {
            }
        }
        val jsMain by getting {
            dependencies {
                implementation(npm("@mat3e-ux/stars"))
            }
        }
    }
}