/// <reference path="Attractor.ts" />
/// <reference path="Constants.ts" />
/// <reference path="Poem.ts" />

var canvas = <HTMLCanvasElement> document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

// Must instantiate this class instance first because
// these constants are used throughout this file.
let constants = new Constants.Constants();

let mainAttractor = new Attractor.Attractor(constants.mainAttractorGain,
    constants.attractorIncrementAmount, constants.attractorStartingUnit);
let poem = new Poem.Poem(constants.callsPerNewLine);
let secondAttractor = new Attractor.Attractor(constants.secondaryAttractorGain,
    constants.attractorIncrementAmount, constants.attractorStartingUnit);

let lastTimeRan = Date.now();

function animate() {

    requestAnimationFrame(animate);

    let nowTime = Date.now();
    let intervalTime = nowTime - lastTimeRan;
    if (intervalTime >= constants.minimumInterval)
    {

        lastTimeRan = nowTime;

        context.clearRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = "rgba(255, 255, 255, 0.5)";
        context.font = "15px papyrus";
        context.fillText("Gregary C. Zweigle, 2019", constants.attributeX,
        constants.attributeY);

        context.fillStyle = '#99999F';
        context.font = "30px Papyrus";
        let myString : string = poem.getLine();
        // Semi-center the text. Movement around center is desired effect.
        context.fillText(myString, constants.poemX - constants.poemScale *
            myString.length/2, constants.poemY);

        mainAttractor.clearXY();
        secondAttractor.clearXY();

        let red, green : number;
        let size : number;
        for(let i : number = constants.mainAttractorPoints; i >= 0; i--)
        {
            mainAttractor.calcXY(i);
            // Random point colors and rarely make some of the points large.
            red = Math.round(Math.random() * 256);
            green = Math.round(Math.random() * 256);
            size = Math.round(Math.random() * 2);
            if (Math.random() > 0.98) {
                if (Math.random() > 0.98)
                    size = 4;
                else
                    size = 3;
            }
            // Blue is always 255 to ensure a violet tendency of the color.
            context.fillStyle = "rgba(" + red + "," + green + "," + "255, 1)";
            context.fillRect(
            constants.attractorX+constants.attractorGainX*mainAttractor.getX(),
            constants.attractorY+constants.attractorGainY*mainAttractor.getY(),
            size, size);
          }

        let alpha : number;
        for(let i : number = constants.secondAttractorPoints; i >= 0; i--)
        {
            secondAttractor.calcXY(i);
            // Only display second attractor during a portion of the animation.
            if (poem.getInd() > constants.stopSecondAttractor && 
                poem.getInd() < constants.restartSecondAttractor)
            {
                alpha = 0;
            }
            else
            {
                alpha = Math.round(Math.random() * 0.4) + 0.1;
            }
            size = Math.round(Math.random() * 2);
            context.fillStyle = "rgba(" + 255 + "," + 255 + "," + 255 + "," +
            alpha + ")";
            context.fillRect(
            constants.attractorX+constants.attractorGainX*secondAttractor.getX(),
            constants.attractorY+constants.attractorGainY*secondAttractor.getY(),
            size, size);
        }

        mainAttractor.update();
        secondAttractor.update();
    }

}

animate();