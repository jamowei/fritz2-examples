buildscript {
    repositories {
        mavenLocal() //FIXME: nicht einchecken
        jcenter()
    }

    dependencies {
        classpath(kotlin("gradle-plugin"))
        classpath("dev.fritz2:fritz2-gradle-plugin:0.5")
    }
}

plugins {
    kotlin("multiplatform") version("1.3.72")
}

apply(plugin = "dev.fritz2.fritz2-gradle")

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
                    implementation(project(":validation:model"))
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