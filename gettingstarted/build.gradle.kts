buildscript {
    repositories {
        mavenLocal() //FIXME: nicht einchecken
        jcenter()
    }

    dependencies {
        classpath(kotlin("gradle-plugin"))
        classpath("io.fritz2:fritz2-gradle-plugin:0.5")
    }
}

plugins {
    kotlin("multiplatform") version("1.3.72")
}

apply(plugin = "io.fritz2.fritz2-gradle")

repositories {
    mavenLocal()
    jcenter()
}