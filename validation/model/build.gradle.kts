plugins {
    kotlin("multiplatform")
}

apply(plugin = "io.fritz2.fritz2-gradle")

repositories {
    mavenLocal()
    mavenCentral()
    jcenter()
}

kotlin {
    kotlin {
        jvm()
        js().browser()

        sourceSets {
            val commonMain by getting {
                dependencies {
                    implementation(kotlin("stdlib"))
                    api("com.soywiz.korlibs.klock:klock:1.10.5")
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
}