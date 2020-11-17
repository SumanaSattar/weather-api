window.addEventListener('load',onloadFunction);
function onloadFunction(){
    let long;
    let lat;
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=> {
            console.log(position);
        });
    } else {
      console.log("it is not active");
    }
}