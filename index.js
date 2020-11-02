// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
        if (blocks > 42) {
            return (blocks - 42);
        }else if (blocks < 42) {
            return (42 - blocks);
        } else {
            return 0
        }
    }



function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks)*264


    // if (blocks > 42) {
    //     return (blocks - 42)*264;
    // }else if (blocks < 42) {
    //     return (42 - blocks)*264;
    // } else {
    //     return 0
    // }
}



function distanceTravelledInFeet(start, stop) {
    return Math.abs((start - stop) * 264)
}



function calculatesFarePrice(start, destination) {
    const dis = distanceTravelledInFeet(start, destination)
        if (dis < 400) {
            return 0
        } else if (dis < 2000) {
            return (dis - 400) * .02
        } else if (dis < 2500) {
            return 25
        } else {
            return 'cannot travel that far'
        }
    }
