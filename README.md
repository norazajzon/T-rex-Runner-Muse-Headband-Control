In order to use the Dinosaur game, I modified a Github repository (https://github.com/wayou/t-rex-runner) to simulate the key event of pressing space bar by blinking your left eye. The JavaScript SDK (https://github.com/urish/muse-js) that allowed me to read the EEG signal streamed by the headband is called Muse-JS. To start the muse-js sample program (once you have yarn installed), execute: "yarn" then "yarn start".
Once the muse-js server is running on your computer and waiting for requests on the default port of 4445, in a Chrome tab type: http://localhost:4445/ . Turn on your Muse headband and click Connect! It should detect your device, something like Muse-9134. If you select and click “Pair”, it should start plotting the data the headband is streaming on graphs, one for each electrode. If your headband is correctly positioned, you can control the t-rex and see a steady signal on Electrode2 (channel ‘AF7’) when flinching your left eye.
