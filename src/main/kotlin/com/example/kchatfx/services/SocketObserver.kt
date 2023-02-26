package com.example.kchatfx.services

import com.example.kchatfx.models.Message
import com.example.kchatfx.models.MessageType
import com.example.kchatfx.models.SocketLogin
import com.google.gson.Gson
import io.ktor.client.*
import io.ktor.client.plugins.websocket.*
import io.ktor.websocket.*
import java.util.*

object SocketObserver {


    var IsConnected = false


    suspend fun subscribe(message: (Message) -> Unit) {
        val client = HttpClient {
            install(WebSockets)
        }


        client.webSocket(host = "127.0.0.1", port = 5001) {
            GlobalStore.session = this
            println("Connected to server")

            if (!IsConnected) {

                val SocketLogin = SocketLogin(username = "6")


                send(SocketLogin.toJson())

            }

            while (true) {

                println("🤔Waiting for message...")
                var text = incoming.receive() as? Frame.Text
                println("👌Received: ${text?.readText()}")

                var newMessage = Message.fromJson(text?.readText() ?: "")

                message(newMessage)
            }
        }


    }


}
