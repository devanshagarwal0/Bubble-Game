function start() {
    let Timer = 60;
    let score = 0;
    let hitnum = 0;

    function makeBubble() {
        var clutter = "";
        for (var i = 1; i < 125; i++) {
            var rn = Math.round(Math.random() * 10);
            clutter += `<div class="bubble">${rn}</div>`;
        }
        document.querySelector('#pbtm').innerHTML = clutter;
    }

    function runTimer() {
        let timeint = setInterval(function () {
            if (Timer > 0) {
                Timer--;
                document.querySelector("#timer").textContent = Timer;
            } else {
                document.querySelector("#pbtm").removeEventListener("click", handleBubbleClick);
                document.querySelector("#pbtm").innerHTML = `
                    <h1 id="end">Score: ${score} <br>GAME OVER
                    <button onclick="start()">
                        <img src="images/restarting.png" height="50px" width="50px" style="border-radius:50%;"> Restart
                    </button>
                    </h1> `;
                clearInterval(timeint);
            }
        }, 1000);
    }

    function getNewHit() {
        hitnum = Math.round(Math.random() * 10);
        document.querySelector("#newhit").textContent = hitnum;
    }

    function increaseScore() {
        score += 10;
        document.querySelector("#newscore").textContent = score;
    }

    function handleBubbleClick(dets) {
        let clicked = Number(dets.target.textContent);
        if (clicked === hitnum) {
            increaseScore();
            getNewHit();
            makeBubble();
        } else {
            makeBubble();
        }
    }

    document.querySelector("#pbtm").addEventListener("click", handleBubbleClick);
    
    runTimer();
    getNewHit();
    makeBubble();
}
