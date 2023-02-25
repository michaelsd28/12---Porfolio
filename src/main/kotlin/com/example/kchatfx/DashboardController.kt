package com.example.kchatfx

import com.example.kchatfx.models.Friend
import com.example.kchatfx.models.User
import javafx.fxml.FXML
import javafx.fxml.FXMLLoader
import javafx.fxml.Initializable
import javafx.scene.control.Button
import javafx.scene.control.ListView
import java.net.URL
import java.util.*

class DashboardController : Initializable {


    @FXML
    private var friendListView: ListView<String> = ListView()


    @FXML
    private var joinChatButton: Button = Button()


    fun joinChat() {


        var friendName = friendListView.selectionModel.selectedItem
        println("$friendName is selected to join chat")
        // navigate to chat page
        var page = "chat.fxml"
        var scene = friendListView.scene
        var loader = FXMLLoader(HelloApplication::class.java.getResource(page))
        scene.root = loader.load()


    }

    override fun initialize(p0: URL?, p1: ResourceBundle?) {


        val user: User = User("admin", null, "", emptyList())

        val friend1 = Friend("friend1", "username1", "", emptyList())
        val friend2 = Friend("friend2", "username2", "", emptyList())
        val friend3 = Friend("friend3", "username3", "", emptyList())
        val friendList = listOf(friend1, friend2, friend3)

        user.friends = friendList



        for (friend in user.friends) {
            friendListView.items.add(friend.name)
        }
        joinChatButton.setOnAction { joinChat() }


    }

}