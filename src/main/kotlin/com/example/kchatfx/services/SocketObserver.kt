package com.example.kchatfx.services

import com.example.kchatfx.models.Message
import com.example.kchatfx.models.MessageType
import io.ktor.client.*
import io.ktor.client.plugins.websocket.*
import io.ktor.websocket.*
import java.util.*

class SocketObserver {


    companion object {



        suspend fun subscribe(message: (Message) -> Unit) {
            val client = HttpClient {
                install(WebSockets)
            }


            client.webSocket(host = "127.0.0.1", port = 5001) {
                GlobalStore.session = this
                println("Connected to server")
                while (true) {

                    println("🤔Waiting for message...")
                    var text = incoming.receive() as? Frame.Text
                    println("Received: ${text?.readText()}")
                    var message = Message()
                    message.message = text?.readText() ?: ""
                    message.type = MessageType.TEXT
                    message.sender = "server"
                    message.receiver = "client"
                    message.time = Date().toString()
                    message(message)
                }
            }








        }


}


}
