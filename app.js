const drums = new Howl({
        "src": [
          "./drums/drums.webm",
          "./drums/drums.mp3"
        ],
        "sprite": {
          "clap": [
            0,
            497.3922902494331
          ],
          "closed-hihat": [
            2000,
            318.4580498866212
          ],
          "crash": [
            4000,
            3908.095238095238
          ],
          "kick": [
            9000,
            652.4943310657604
          ],
          "open-hihat": [
            11000,
            1030.7256235827663
          ],
          "snare": [
            14000,
            577.5736961451248
          ]
        }
});

const drumkit = document.querySelector('.drumkit');
function playDrum(event) {
  if (event.target.classList.contains('pad')) {
    event.preventDefault();
    let soundToPlay = event.target.dataset.sound;
    drums.play(soundToPlay);
  }
}

function setViewportHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}


setViewportHeight();
window.addEventListener('resize', () => {
  setTimeout(setViewportHeight, 100);
});

drumkit.addEventListener('click', playDrum);
drumkit.addEventListener('touchstart', playDrum);


window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio) return;
  drums.play(audio.dataset.sound);
  console.log(e.keyCode);
})