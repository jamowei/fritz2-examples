plugins {
    kotlin("multiplatform")
    kotlin("plugin.serialization")
    id("dev.fritz2.fritz2-gradle")
}

repositories {
    mavenCentral()
    jcenter()
}

kotlin {
    jvm()
    js().browser()

    val serializationVersion = "1.0.1"

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation("dev.fritz2:core:0.9-SNAPSHOT")
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$serializationVersion")
            }
        }
        val jvmMain by getting {
            dependencies {
            }
        }
        val jsMain by getting {
            dependencies {
            }
        }
    }
}