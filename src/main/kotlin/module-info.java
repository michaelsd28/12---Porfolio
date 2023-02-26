module com.example.kchatfx {
    requires javafx.controls;
    requires javafx.fxml;
    requires kotlin.stdlib;

    requires org.kordamp.bootstrapfx.core;
    requires io.ktor.client.core;
    requires io.ktor.client.cio;
    requires kotlinx.coroutines.core.jvm;
    requires io.ktor.http;
    requires io.ktor.websockets;
    requires com.google.gson;

    opens com.example.kchatfx to javafx.fxml;
    exports com.example.kchatfx;
}