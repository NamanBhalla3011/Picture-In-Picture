const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const stop2 = document.getElementById('stop');

// prompt to select media stream, pass to video elements,then play

async function selectMediaStream() {
    try {
        // const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch error
        console.log('whoops,error here:', error);
    }

}
function reloadPage() {
    window.location.reload();
}


button.addEventListener('click', async() => {
    //Disable Button 
    button.disabled = true;
    //start Picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});
// on load
selectMediaStream();
