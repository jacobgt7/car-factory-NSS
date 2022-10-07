const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

// The addWheels() function should have a parameter for the incoming chassis object.
// It should add a new property to that object named wheels with a value of 4. 
// The function should return the chassis object.
const addWheels = (chassisObject) => {
    chassisObject.wheels = 4
    return chassisObject
}
// The addEngine() function should have a parameter for the incoming chassis object.
// It should add a new property to that object named engine with a value of "4.8L".
// The function should return the chassis object.
const addEngine = (chassisObject) => {
    chassisObject.engine = "4.8L"
    return chassisObject
}
// The addSteeringWheel() function should have a parameter for the incoming chassis object.
// It should add a new property to that object named steeringWheel with a value of "Tilting".
// The function should return the chassis object.
const addSteeringWheel = (chassisObject) => {
    chassisObject.steeringWheel = "Tilting"
    return chassisObject
}
// The addDriveTrain() function should have a parameter for the incoming chassis object.
// It should add a new property to that object named driveTrain with a value of "Two wheel drive".
// The function should return the chassis object.
const addDriveTrain = (chassisObject) => {
    chassisObject.driveTrain = "Two wheel drive"
    return chassisObject
}


let fever = createChassis()
console.log(fever) 

fever = addWheels(fever)
console.log(fever)

fever = addEngine(fever)
console.log(fever)

fever = addSteeringWheel(fever)
console.log(fever)

fever = addDriveTrain(fever)
console.log(fever)