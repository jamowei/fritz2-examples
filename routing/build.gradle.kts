plugins {
    id("dev.fritz2.fritz2-gradle")
}

repositories {
    jcenter()
}

kotlin {
    jvm()
    js().browser()

    sourceSets {
        val commonMain by getting {
            dependencies {
                implementation(kotlin("stdlib"))
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