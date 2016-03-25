# IoT Node.JS Client

## Usage

Clone this repository and install it the dependencies using the command 
``npm install``

Create a new file and include the iot file

```js
var IoT = require('iot');

var APP_KEY = <YOUR APP KEY>
var DEV_KEY = <YOUR DEV KEY>
var SECRECT = <YOUR SECRECT KEY>

// Create an IoT Client 

IoT.createClient(APP_KEY,DEV_KEY,SECRECT)

```
Provide the APP,DEV and SECRET Keys

### Functionalities

```js

// Connecting to IoT Server
IoT.connect()

// Setting the State
IoT.setData("YOUR STATE / DATA")

// Retriving the State
IoT.getData("YOUR STATE / DATA")

// Disconnecting from the IoT Server
IoT.disconnect()
```
