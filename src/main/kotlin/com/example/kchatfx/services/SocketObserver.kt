package com.example.kchatfx.services

import com.example.kchatfx.models.Message

class SocketObserver {


    companion object {

        var webSocketClient = WebSocketClient()

        fun subscribe(message: (Message) -> Boolean) {

            webSocketClient.receiveData(message)


        }
    }


}

class WebSocketClient {



    fun receiveData(message: (Message) -> Boolean) {

    }

}
