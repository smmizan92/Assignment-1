//question 1
function describeValue(v) {
    return `${typeof v} | ${Boolean(v) ? 'truthy' : 'falsy'}`;
}


//question 2
function getDayType(day) {
    let dayLower = day.toLowerCase();
    switch (dayLower) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Weekday";
        default:
            return "Invalid day";
    }
}

//question 3
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    let usernameLower = username.toLowerCase();
    if (usernameLower.includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}

//question 4
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let baseFare = 50;
    let distanceFare = (distance - 2) * 15;
    let waitingFare = waitingMinutes * 2;
    let totalFare = baseFare + distanceFare + waitingFare;

    if (isNight) {
        totalFare *= 1.2; // Apply night surcharge
    }

    return totalFare;
}

//question 5
function getChaseVerdict(target, scored, ballsLeft) {
    
    let runsNeeded = target - scored;
    let requiredRate = (runsNeeded / ballsLeft) * 6;
   
    if (runsNeeded <= 0) {
        return `Won`;
    } 
    else if (ballsLeft <= 0) {
        return `Lost`;
    }

    if (requiredRate <= 6) {
        return `Needs ${runsNeeded} runs in ${ballsLeft} balls | Comfortable`;
    } 
    else if (requiredRate > 6 && requiredRate <= 12) {
        return `Needs ${runsNeeded} runs in ${ballsLeft} balls | Tough`;
    } 
    else {
        return `Needs ${runsNeeded} runs in ${ballsLeft} balls | Almost Impossible`;
    }   
}