package com.example.kchatfx.models

data class User (
    val username: String,
    val password: String? = null,
    val image: String,
    var friends: List<Friend> = emptyList(),



    )