plugins {
    kotlin("multiplatform")
    id("dev.fritz2.fritz2-gradle")
}

repositories {
    jcenter()
}

kotlin {
    js().browser()

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(kotlin("stdlib"))
                implementation("dev.fritz2:core:0.8")
            }
        }
        val jsMain by getting {
            dependencies {
                implementation(npm("@mat3e-ux/stars", "0.2.5"))
            }
        }
    }
}