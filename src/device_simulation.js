class Device {
    constructor(os, battery_level) {
        this.os = os;
        this.battery_level = battery_level;
    }
}

class SimulationSetup {
    constructor(devices) {
        this.devices = devices;
    }

    useDevices() {
        for (let index = 0; index < this.devices.length; index++) {
            if (this.devices[index].os == "iOS") {
                this.devices[index].battery_level = Math.max(0, this.devices[index].battery_level -= 1.2)
            }
            else if (this.devices[index].os == "Android") {
                this.devices[index].battery_level = Math.max(0, this.devices[index].battery_level -= 1)
            }
            else {
                throw new Error("Unknown OS");
            }
        }
    }
}

module.exports = {
    Device, SimulationSetup
}