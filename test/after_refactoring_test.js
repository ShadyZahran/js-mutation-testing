const expect = require("chai").expect;
const device_sim = require("../src/device_simulation.js");

describe("After refactoring", function () {
    it("should reduce battery of Android device by 1 after one usage", function () {
        devices = [
            new device_sim.Device("Android", 70)
        ];
        original_battery_levels = [devices[0].battery_level]
        my_test_setup = new device_sim.SimulationSetup(devices);
        my_test_setup.useDevices()
        expect(my_test_setup.devices[0].battery_level).equal(original_battery_levels[0] - 1)

    });

    it("should reduce battery of iOS device by 1.2 after one usage", function () {
        devices = [
            new device_sim.Device("iOS", 78)
        ];
        original_battery_levels = [devices[0].battery_level]
        my_test_setup = new device_sim.SimulationSetup(devices);
        my_test_setup.useDevices()
        expect(my_test_setup.devices[0].battery_level).equal(original_battery_levels[0] - 1.2)

    });

    it("should not reduce battery of unknown OS devices", function () {
        devices = [
            new device_sim.Device("iOS 17", 70),
            new device_sim.Device("Android 12", 78)
        ];
        original_battery_levels = []
        original_battery_levels.push(devices[0].battery_level)
        original_battery_levels.push(devices[1].battery_level)

        my_test_setup = new device_sim.SimulationSetup(devices);

        expect(() => my_test_setup.useDevices()).to.throw(Error, "Unknown OS")

    });
});



