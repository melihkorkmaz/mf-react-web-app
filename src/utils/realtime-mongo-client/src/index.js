
export default class RealTimeMongo {
    constructor(host) {
        const WebSocket = window.WebSocket || window.MozWebSocket;
        
        host = host.replace(/^(https?):\/\//, "");
        const connection = new WebSocket('ws://' + host);

        connection.onmessage = this.onMessage.bind(this);
    }


    onMessage(e) {
        const message = JSON.parse(e.data);
        const event = new CustomEvent("onrecivemessage", { "detail": message });
        document.dispatchEvent(event);
    }

    created(model) {
        return new Promise((resolve, reject) => {
            document.addEventListener("onrecivemessage", function (e) {
                var message = e.detail;
                if (message.event === "updated" && message.modelName === model)
                    resolve(message.data);
            });
        })
    }

    updated(model, callback) {
        document.addEventListener("onrecivemessage", function (e) {
            var message = e.detail;
            if (message.event === "updated" && message.modelName === model)
                callback(message.data);
        });
    }

}