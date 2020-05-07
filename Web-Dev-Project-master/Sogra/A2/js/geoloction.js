/* https://www.youtube.com/watch?v=pPAvL21kZQ0 */
(function geo() {
    'use strict';
    function onPostionReceived(position){
        console.log(position);
    }
    function locationNotReceived(positionError) {
        console.log(positionError);

    }
    if(navigator.geolocation){
        var watch= navigator.geolocation.watchPosition(onPostionReceived, locationNotReceived);
        navigator.geolocation.clearWatch(watch);
    }

}());
