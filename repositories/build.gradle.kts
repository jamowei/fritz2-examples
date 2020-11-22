plugins {
    id("dev.fritz2.fritz2-gradle")
    kotlin("plugin.serialization")
}

repositories {
    jcenter()
}

kotlin {
    jvm()
    js().browser()

    val serializationVersion = "1.0.1"

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(kotlin("stdlib"))
                implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:$serializationVersion")
                implementation("dev.fritz2:core:0.8-SNAPSHOT")
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