package com.example.kchatfx

import com.example.kchatfx.models.Message
import com.example.kchatfx.models.MessageType
import com.example.kchatfx.services.GlobalStore
import com.example.kchatfx.services.SocketObserver
import io.ktor.websocket.*
import javafx.application.Platform
import javafx.fxml.FXML
import javafx.fxml.Initializable
import javafx.scene.control.Button
import javafx.scene.control.Label
import javafx.scene.control.ScrollPane
import javafx.scene.control.TextField
import javafx.scene.layout.FlowPane
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import java.net.URL
import java.util.*

class ChatController : Initializable {

    @FXML
    private lateinit var usernameText: Label

    @FXML
    private lateinit var passwordText: Label

    @FXML
    private var messageHistoryScollPane: ScrollPane = ScrollPane()

    @FXML
    private var messageHistoryFlowPane: FlowPane = FlowPane()

    @FXML
    private var inputTextField: TextField = TextField()

    @FXML
    private var sendButton: Button = Button()


    fun sendMessage() {

        runBlocking {

            var session: DefaultWebSocketSession = GlobalStore.session!!
            println("🤔session::  $session ")

            var message = getMessageLabel(inputTextField.text, false)
            messageHistoryFlowPane.children.add(message)

            val messageObject = Message(

                message = inputTextField.text,
                type = "text",
                sender = "6",
                receiver = "4",
                timestamp = "2023-02-26T14:30:28.939Z"
            )

            val json = Message.toJson(messageObject)


            session.send(json)

            inputTextField.text = ""
        }


    }

    private var messages: MutableList<Message> = mutableListOf()


    override fun initialize(p0: URL?, p1: ResourceBundle?) {

        sendButton.setOnAction { sendMessage() }
        // scroll to bottom on size change
        messageHistoryFlowPane.heightProperty().addListener { _, _, _ ->
            messageHistoryScollPane.vvalue = 1.0
        }

//       vertical alignment

        messageHistoryFlowPane.alignment = javafx.geometry.Pos.TOP_LEFT
        messageHistoryFlowPane.prefWrapLength = 200.0
        messageHistoryFlowPane.prefWidth = 595.0
        messageHistoryFlowPane.prefHeight = 200.0
        messageHistoryFlowPane.hgap = 5.0
        messageHistoryFlowPane.vgap = 5.0


        // 0 to 100 loop
        for (i in 0..1000) {
            var friendLabel = getMessageLabel("Hello World from user 1", false)
            messageHistoryFlowPane.children.add(friendLabel)
            var label = getMessageLabel("Hello World from user 2", true)
            messageHistoryFlowPane.children.add(label)

        }

        GlobalScope.launch {
            SocketObserver.subscribe { message ->

                messages.add(message)

                println("☕🍵subscribed ??  $message")

                Platform.runLater(Runnable {

                    messageHistoryFlowPane.children.add(getMessageLabel(message.message, false))

                })


            }
        }


    }


    private fun getMessageLabel(message: String, isFriend: Boolean): Label {

        var labelStyle =
            if (isFriend) "-fx-background-color: linear-gradient(to right, #9890e3, #b1f4cf);" else "-fx-background-color: " + "linear-gradient(to left, #2af598, #009efd);"

        var label = Label(message)

        label.prefWidth = 590.0
        label.style = labelStyle


        return label

    }


}

