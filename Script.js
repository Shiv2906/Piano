const pianoKeys = document.querySelectorAll(".piano-keys .key "),
volumeSlider = document.querySelector(".volumn-slider input "),
keycheckBox = document.querySelector(".keys-checkbox input ");

let allkeys = [], audio = new Audio("tunes/a.wav");  // bydefault audio a  tune

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;  //passing audio src based on key pressed
    audio.play();   // playing audio
    console.log(allkeys);

    const clickedKey = document.querySelector(`[data-key = ${key}]`);  // getting clicked key element 
    clickedKey.classList.add("active");  // adding active class on the  clicked key element

    setTimeout(() => {

        clickedKey.classList.remove("active");   // removing active class after 150ms from the  clicked key element

    }, 150);


}


pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key); // adding data key value to the allKeys array
    // calling playTune function with passing data.key value as an argument 
    key.addEventListener("click", () => playTune(key.dataset.key));
})


const pressedKey = (e)=>{
    if(allkeys.includes(e.key))
    playTune(e.key)

}

const handleVolume = (e) =>{

    audio.volume = e.target.value; // passing the range slider value as an audio valume
}

const showHideKeys =()=>{
    //  toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));

}

keycheckBox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown" , pressedKey);