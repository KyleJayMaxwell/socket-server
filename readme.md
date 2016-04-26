## Sockets on the Server

We'll be building a simple inbox-like application that allows us to read
notifications we receive. When we read them, our unread messages count will
decrease. When a new message is created, the count increase and our inbox
will show the new message.

[![https://gyazo.com/fff175ad6348a0c74fb782f8d029fb7d](https://i.gyazo.com/fff175ad6348a0c74fb782f8d029fb7d.gif)](https://gyazo.com/fff175ad6348a0c74fb782f8d029fb7d)

#### Setup

1. Fork/clone this repository.
1. Install the packages with `npm install`
1. Run your mongo daemon with `mongod`
1. Run the server with `gulp`
  * If your database is empty, the application will automatically seed some random notifications. If you need to reset your notifications, you should go into your database and `.remove({})` all notifications.
1. At some point you will need to download the [angular-socket-io](https://github.com/btford/angular-socket-io) JS file. You'll want to just download the zip file and extract the `.min.js`.
# socket-server
