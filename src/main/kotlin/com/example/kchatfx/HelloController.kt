package com.example.kchatfx

import com.example.kchatfx.HelloApplication
import javafx.fxml.FXML
import javafx.fxml.FXMLLoader
import javafx.scene.control.Label
import javafx.scene.control.TextField

class HelloController {


    @FXML
    private lateinit var usernameText: Label

    @FXML
    private lateinit var passwordText: Label

    // input username and password
    @FXML
    private var usernameField: TextField = TextField()

    @FXML
    private var passwordField: TextField = TextField()

//    on init


    @FXML
    private fun LoginEvent() {

        var isLogin = false
        // if login success navigate to chat page

        when {
            usernameField.text == "admin" && passwordField.text == "admin" -> {
                isLogin = true
            }

            usernameField.text == "user" && passwordField.text == "user" -> {
                isLogin = true
            }

            else -> {
                isLogin = true
            }
        }

        if (isLogin)
            LoadChatPage()
        else
            FailedMessage()

    }

    private fun FailedMessage() {
        // show Modal failed message
        var page = "failed.fxml"
        var scene = usernameText.scene
        var loader = FXMLLoader(HelloApplication::class.java.getResource(page))
        scene.root = loader.load()
        scene.window.sizeToScene()


    }

    private fun LoadChatPage() {
        // navigate to chat page
        val page = "dashboard.fxml"
        val scene = usernameText.scene
        val loader = FXMLLoader(HelloApplication::class.java.getResource(page))

        scene.root = loader.load()
        scene.window.sizeToScene()

    }
}