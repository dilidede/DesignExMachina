# Interaction with the Canvas

If until now it was not clear how a p5 program can achieve more than a classic software, we will see that now through **interaction**. Now that we've mastered loops and conditionals, let's bring our p5 sketches to life through interaction. This section explores how to make your programs respond to keyboard input, mouse movements, and even integrate live webcam feeds. These techniques will transform static visuals into dynamic experiences.

Note that all the functions we will look at are not inside `draw()`, they are **special functions** that p5 calls automatically when a click is detected.

## Mouse Interaction

We've already used `mouseX` and `mouseY`, but p5 also offers more sophisticated mouse control:

The `mousePressed()` function is going to be triggered during the program run any time we press with the mouse. For example. let's look at this program:

<iframe src="https://editor.p5js.org/dide_dd/sketches/MUC85qH4f" width="100%" height="500px"></iframe>

Every time you click on the canvas, the background color changes from blue to red.

However, this is not all. If we want something to happen **only when the mouse is first clicked**, not while it’s being held down, we can use the `mousePressed()` function:


## Keyboard Interaction

Both for games or for controlling a certain parameter of the program, it can be very useful to use the keyboard to interact with the program. Just like with the mouse, we can detect keyboard presses. The simplest way is by using `keyPressed()`. Let's look at a simple program that changes color of the canvas when a key is pressed.

<iframe src="https://editor.p5js.org/dide_dd/sketches/2IhCMw03Y" width="100%" height="600px"></iframe>

For more control, we can also check specific keys using `key` for alphanumeric characters, for example `'a'`, `'3'` or even the spacebar through leaving a blank space like this `' '`. For special keys, we can use `keyCode`, for example `ENTER` or `BACKSPACE`.

Here's how to move a shape with arrow keys:

<iframe src="https://editor.p5js.org/dide_dd/sketches/DxuPuW0Yi" width="100%" height="600px"></iframe>

As you can see, we check what key is being pressed through an if statement, where after controlling if the specific key has been pressed, we write the desired command inside the curly brackets.
You should also note that since the user might have caps lock activated, it's good practice to write in the conditional "if the lower case letter or the upper case letter is pressed, then...", which in code translates to the following.

```javascript

function keyPressed(){
    if (key === 'W' || key === 'w') {
      x -= 10;
    } else if (key === 'A' || key === 'a') {
      x += 10;
    } else if (key === 'S' || key === 's') {
      y -= 10;
    } else if (key === 'D' || key === 'd') {
      y += 10;
    }
}

```

## Webcam Input

Finally, let's delve into a bit more advanced territory: **using a webcam as input**. Thankfully, this is surprisingly easy in p5, thanks to the `createCapture()` function.

<iframe src="https://editor.p5js.org/dide_dd/sketches/wqZ_Qh0Ud" width="100%" height="600px"></iframe>

**NOTE**: If programs that use the webcam do not run, it may be due to the webcam permissions in your browser! Also, some browsers do not allow for embed websites (like the p5 editor pages in this website) to use the webcam for security reasons. If this is your case, click <a href="https://editor.p5js.org/dide_dd/sketches/wqZ_Qh0Ud" target="_blank">here</a> to go directly on the Web Editor!
 <br>
 <br>

This code will grab the webcam feed and draw it into your canvas. As you can see, we handle the video just as we did with images in the [second section](canvas). When we decide to apply effects to the webcam, we should always include `video.hide();` at the end of the setup, in order to hide the default camera input.

We can decide to apply filters to the webcam input using the `filter()` call **after** drawing the image on the canvas. There are many filters available, for example `GRAY` for grayscale effect, or `INVERT` to invert the colors in the webcam. 

!!! summary "Filters"
    A list of some of the filters available. You can find more on the <a href="https://p5js.org/reference/p5/filter/" target="_blank">official p5 reference website.</a>.

    INVERT:Inverts the colors in the image. No parameter is used.
    THRESHOLD: Converts the image to black and white. Pixels with a brightness above the threshold (a number between 0.0 and 1.0) are converted to white, while those below are converted to black. The default threshold is 0.5
    POSTERIZE Limits the number of colors in the image. Each color channel is limited to the number of colors specified. The default value is 4.
    BLUR Blurs the image. The level of blurring is specified by a blur radius. The default value is 4.

Here's a simple example:

<iframe src="https://editor.p5js.org/dide_dd/sketches/8gV8AgBcI" width="100%" height="600px"></iframe>

<small>If you have issues with webcam permissions click <a href="https://editor.p5js.org/dide_dd/sketches/8gV8AgBcI" target="_blank">here</a>  to go directly to the p5 editor.</small>

Now your mouse becomes a red magnifying glass moving over the webcam feed.

!!! exercises "Exercises"
	1. Create a sketch where a circle follows the mouse, but only appears when you hold the mouse down.
	2. Draw a square that changes position when any key is pressed.
	3. Overlay a shape on top of the webcam feed. Change their color depending on where your mouse is.
    *Tip*: Remember that in `fill()` you can set the opacity as the fourth parameter.
	4. Build a simple “draw with keyboard” app: press arrows to move a dot and leave a trail.
