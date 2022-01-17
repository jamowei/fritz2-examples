plugins {
    kotlin("multiplatform") version "1.6.10" apply false
    kotlin("plugin.serialization") version "1.6.10" apply false
    id("com.google.devtools.ksp") version "1.6.10-1.0.2" apply false

}

allprojects {
    repositories {
        mavenCentral()
    }
}

ext {
    // Dependencies
    set("kotlinVersion", "1.6.10")
    set("fritz2Version", "0.14")
    set("serializationVersion", "1.3.1")
    set("kspVersion", "1.6.10-1.0.2")
}


rootProject.plugins.withType<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin> {
    rootProject.the<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension>().nodeVersion = "16.0.0"
}
