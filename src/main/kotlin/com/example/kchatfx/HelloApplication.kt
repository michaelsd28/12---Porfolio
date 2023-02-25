package com.example.kchatfx

import com.example.kchatfx.services.GlobalStore
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.plugins.websocket.*
import io.ktor.http.*
import io.ktor.websocket.*
import javafx.application.Application
import javafx.fxml.FXMLLoader
import javafx.scene.Scene
import javafx.stage.Stage
import kotlinx.coroutines.runBlocking
import java.util.*

class HelloApplication : Application() {
    override fun start(stage: Stage) {
//        startWebSocket()
        val fxmlLoader = FXMLLoader(HelloApplication::class.java.getResource("hello-view.fxml"))
        val scene = Scene(fxmlLoader.load(), 620.0, 420.0)
        // min width and height
        stage.minWidth = 620.0
        stage.minHeight = 420.0
        stage.title = "Hello!"
        stage.scene = scene
        stage.show()
    }
}

fun main() {
    Application.launch(HelloApplication::class.java)
}

fun startWebSocket() {
    val client = HttpClient(CIO) {
        install(WebSockets) {
            pingInterval = 20_000
        }

    }

    runBlocking {
        client.webSocket(host = "127.0.0.1", port = 5001, path = "/") {

            println("Connected to server")


            GlobalStore.session = this



//            while (true) {
//                println("🤔Waiting for message...")
//                var text = incoming.receive() as? Frame.Text
//
//
//                println("Received: ${text?.readText()}")
//
//                if (GlobalStore.session == null) {
//                    GlobalStore.session = this
//                }
//
//
//
//
//
//
////                val myMessage = Scanner(System.`in`).next()
////                if (myMessage != null) {
////
////                    session?.send(myMessage)
////
////                }
//            }
        }
    }
    client.close()
}