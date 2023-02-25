package com.example.kchatfx.models

data class Friend (

    val name: String,
    val username: String,
    val image: String,
    val messages: List<Message> = emptyList()


)
