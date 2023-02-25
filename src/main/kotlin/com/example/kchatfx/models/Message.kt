package com.example.kchatfx.models

enum class MessageType {
    TEXT, IMAGE, VIDEO;

    // string to enum
    companion object {
        fun fromString(type: String): MessageType {
            return when (type) {
                "TEXT" -> TEXT
                "IMAGE" -> IMAGE
                "VIDEO" -> VIDEO
                else -> throw IllegalArgumentException("Invalid message type")
            }
        }
    }
}

class Message {

    var id: Int = 0
    var message: String = ""
    var sender: String = ""
    var receiver: String = ""
    var time: String = ""
    var type: MessageType = MessageType.TEXT

    override fun toString(): String {
        return "Message(id=$id, message='$message', sender='$sender', receiver='$receiver', time='$time', type=$type)"
    }



}
