
function startGreeting() {
    // Get the user input
    var userName = document.getElementById("userNameInput").value;

    console.log(userName);
    if(userName != ''){


    // Display the user name in the result div
    var greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.innerHTML = "Hello, " + userName + "! How is your mood Today?";
    // greetingMessage.style.fontFamily = 'Roboto Mono', monospace;
    // greetingMessage.innerHTML = ""+ userName +" How was your day?";
    document.getElementById('greetingMessage').style.font = 'Roboto Mono', monospace;
    document.getElementById('greetingMessage').style.color = "red"
    

    // Show the result div
    var resultDiv = document.getElementById("resultDiv");
    resultDiv.style.display = "block";

}else if(userName == ''){
    alert("Please enter your UserName")
}

const mood_of_user = document.getElementById("mood_of_the_user")
mood_of_user.style.display = "block";
mood_of_user.style.display = 'flex';

}

// to conform one checkbox is clicked
function onlyOne(checkbox1) {
    var checkboxes = document.getElementsByName('fooby[1][]')
    checkboxes.forEach((item) => {
        if (item !== checkbox1) item.checked = false
    })
}



// making the conditions for the checkbox
const check = document.getElementById('checkbox1').value
const check2 = document.getElementById('checkbox2').value
const check3 = document.getElementById('checkbox3').value
const check4 = document.getElementById('checkbox4').value


if(check == check){

    document.getElementById('checkbox1').addEventListener('change', function onlyOne() {
        var myDiv = document.getElementById('forhappy');
        myDiv.style.display = this.checked ? 'block':'none';
        var myDiv2 = document.getElementById('forsad');
        myDiv2.style.display = 'none';
        var myDiv3 = document.getElementById('forangry');
        myDiv3.style.display = 'none';
        var myDiv4 = document.getElementById('fortired');
        myDiv4.style.display = 'none';
    });
}


// checkbox for sad
if(check2 == check2){

    document.getElementById('checkbox2').addEventListener('change', function onlyOne() {
        var myDiv = document.getElementById('forsad');
        myDiv.style.display = this.checked ? 'block':'none';
        var myDiv2 = document.getElementById('forhappy');
        myDiv2.style.display = 'none';
        var myDiv3 = document.getElementById('forangry');
        myDiv3.style.display = 'none';
        var myDiv4 = document.getElementById('fortired');
        myDiv4.style.display = 'none';
    });

}

// checkbox for angry

if(check3 == check3){

    document.getElementById('checkbox3').addEventListener('change', function onlyOne() {
        var myDiv = document.getElementById('forangry');
        myDiv.style.display = this.checked ? 'block':'none';
        var myDiv2 = document.getElementById('forhappy');
        myDiv2.style.display = 'none';
        var myDiv3 = document.getElementById('forsad');
        myDiv3.style.display = 'none';
        var myDiv4 = document.getElementById('fortired');
        myDiv4.style.display = 'none';
    });

}

// checkbox for tired

if(check4 == check4){

    document.getElementById('checkbox4').addEventListener('change', function onlyOne() {
        var myDiv = document.getElementById('fortired');
        myDiv.style.display = this.checked ? 'block':'none';
        var myDiv2 = document.getElementById('forsad');
        myDiv2.style.display = 'none';
        var myDiv3 = document.getElementById('forangry');
        myDiv3.style.display = 'none';
        var myDiv4 = document.getElementById('forhappy');
        myDiv4.style.display = 'none';
    });

}



function toggleCheckbox(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    checkbox.checked = !checkbox.checked; // Toggle checkbox state
    updateVisualAppearance(checkboxId);
}

function updateVisualAppearance(checkboxId) {
    var checkbox = document.getElementById(checkboxId);
    var toggleButton = checkbox.nextElementSibling;

    if (checkbox.checked) {
        toggleButton.style.backgroundColor = ''; // Customize the background color
    } else {
        toggleButton.style.backgroundColor = ''; // Reset the background color
    }
}


// to play the video in the descr

// emojii for happy
function start(){
var videoPlayer = document.getElementById('videoPlayer1');

    // Auto play, half volume.
    videoPlayer.play()
    videoPlayer.volume = 0.5;

    // Play / pause.
    videoPlayer.addEventListener('click', function () {
        if (videoPlayer.paused == false) {
            videoPlayer.pause();
            videoPlayer.firstChild.nodeValue = 'Play';
        } else {
            videoPlayer.play();
            videoPlayer.firstChild.nodeValue = 'Pause';
        }
    });

}

// emojii for saad or depressed

function start(){
    var videoPlayer = document.getElementById('videoPlayer2');
    
        // Auto play, half volume.
        videoPlayer.play()
        videoPlayer.volume = 0.5;
    
        // Play / pause.
        videoPlayer.addEventListener('click', function () {
            if (videoPlayer.paused == false) {
                videoPlayer.pause();
                videoPlayer.firstChild.nodeValue = 'Play';
            } else {
                videoPlayer.play();
                videoPlayer.firstChild.nodeValue = 'Pause';
            }
        });
    
    }

// emojii for angry

    function start(){
        var videoPlayer = document.getElementById('videoPlayer3');
        
            // Auto play, half volume.
            videoPlayer.play()
            videoPlayer.volume = 0.5;
        
            // Play / pause.
            videoPlayer.addEventListener('click', function () {
                if (videoPlayer.paused == false) {
                    videoPlayer.pause();
                    videoPlayer.firstChild.nodeValue = 'Play';
                } else {
                    videoPlayer.play();
                    videoPlayer.firstChild.nodeValue = 'Pause';
                }
            });
        
        }

// emojii for tired 
        function start(){
            var videoPlayer = document.getElementById('videoPlayer4');
            
                // Auto play, half volume.
                videoPlayer.play()
                videoPlayer.volume = 0.5;
            
                // Play / pause.
                videoPlayer.addEventListener('click', function () {
                    if (videoPlayer.paused == false) {
                        videoPlayer.pause();
                        videoPlayer.firstChild.nodeValue = 'Play';
                    } else {
                        videoPlayer.play();
                        videoPlayer.firstChild.nodeValue = 'Pause';
                    }
                });
            
            }
        


// function to crossout the list element(happy)
            function toggleCompleted1(videoSource, event) {
                const listItem = event.target;
                listItem.classList.toggle("completed");
                const video1 = document.getElementById('videoPlayer1')
                video1.src = videoSource;
                video1.play();
              }


              function toggleCompleted2(videoSource, event) {
                const listItem = event.target;
                listItem.classList.toggle("completed");
                const video1 = document.getElementById('videoPlayer1')
                video1.src = videoSource;
                video1.play();
              }

              function toggleCompleted3(videoSource, event) {
                const listItem = event.target;
                listItem.classList.toggle("completed");
                const video1 = document.getElementById('videoPlayer1')
                video1.src = videoSource;
                video1.play();
              }




// function to crossout the list element(sad)
function toggleCompleted4(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer2')
    video1.src = videoSource;
    video1.play();
  }


  function toggleCompleted5(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer2')
    video1.src = videoSource;
    video1.play();
  }

  function toggleCompleted6(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer2')
    video1.src = videoSource;
    video1.play();
  }



// function to crossout the list element(angry)
  function toggleCompleted7(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer3')
    video1.src = videoSource;
    video1.play();
  }


  function toggleCompleted8(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer3')
    video1.src = videoSource;
    video1.play();
  }

  function toggleCompleted9(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer3')
    video1.src = videoSource;
    video1.play();
  }



  // function to crossout the list element(depressed)
  function toggleCompleted10(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer4')
    video1.src = videoSource;
    video1.play();
  }


  function toggleCompleted11(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer4')
    video1.src = videoSource;
    video1.play();
  }

  function toggleCompleted12(videoSource, event) {
    const listItem = event.target;
    listItem.classList.toggle("completed");
    const video1 = document.getElementById('videoPlayer4')
    video1.src = videoSource;
    video1.play();
  }