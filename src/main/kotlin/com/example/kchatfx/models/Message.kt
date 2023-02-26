package com.example.kchatfx.models

import com.google.gson.Gson
import java.security.Timestamp
import java.util.Date

enum class MessageType {
    TEXT, IMAGE, VIDEO, AUDIO;

    // string to enum
    companion object {
        fun fromString(type: String): MessageType {
            return when (type) {
                "text" -> TEXT
                "image" -> IMAGE
                "video" -> VIDEO
                "audio" -> AUDIO
                else -> throw IllegalArgumentException("Invalid message type")
            }
        }
    }
}

class Message {
    //    {"sender":"4","receiver":"6","message":"lol","type":"text","timestamp":"2023-02-26T14:23:10.086Z"}
    var sender: String = ""
    var receiver: String = ""
    var message: String = ""
    var type: String = "text"
    var timestamp: String = "2023-02-26T14:30:28.939Z"


    constructor(sender: String, receiver: String, message: String, type: String,timestamp: String ) {
        this.sender = sender
        this.receiver = receiver
        this.message = message
        this.type = type
        this.timestamp = "2023-02-26T14:30:28.939Z"


    }

    override fun toString(): String {
        return "Message(sender='$sender', receiver='$receiver', message='$message', timestamp='$timestamp', type='$type')"
    }


    companion object {
        fun fromJson(objectString: String): Message {

            println("🤔objectString::  $objectString")


            val sender = objectString.substringAfter("\"sender\":\"").substringBefore("\",\"receiver\":\"")
            val receiver = objectString.substringAfter("\"receiver\":\"").substringBefore("\",\"message\":\"")
            val message = objectString.substringAfter("\"message\":\"").substringBefore("\",\"type\":\"")
            val type = objectString.substringAfter("\"type\":\"").substringBefore("\",\"timestamp\":\"")
            val timestamp = objectString.substringAfter("\"timestamp\":\"").substringBefore("\"}")

            return Message(sender, receiver, message, type, timestamp)


        }

        fun toJson(message: Message): String {

            return "{\"sender\":\"${message.sender}\",\"receiver\":\"${message.receiver}\",\"message\":\"${message.message}\",\"type\":\"${message.type}\",\"timestamp\":\"${message.timestamp}\"}"

        }


    }


}
