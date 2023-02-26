package com.example.kchatfx.models

data class SocketLogin(
    var username: String = "",
) {
    fun toJson(): String {
return "{\"username\":\"$username\"}"

    }
}