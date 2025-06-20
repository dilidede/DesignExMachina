Now that we know the very basics of p5 programming, it might be interesting to see how to implement some “settings” you’re used from classic software, like changing the opacity of a shape or integrating typography directly from p5. This can be useful as it gives us freedom of applying these options, without being limited by the software.

## Transparency

We will now look at how to handle transparency and blend modes in our p5 projects, concepts with which designers should already have some familiarity.

In p5, just like many design and illustration softwares, transparency is called alpha and it is not linked to the shape, but the color of the object. Its value ranges from 0 to 255 and it can be set through the `setAlpha()` call. This means that if we have a circle called c1 we cannot change its alpha value directly, but instead we have to declare a color variable and change its alpha value. Remember to repeat the `fill()` call, otherwise p5 will fill the new circle with the old version of the color if you already used it. Let’s have a look directly.

<iframe src="https://editor.p5js.org/dide_dd/sketches/UYoFlpyQC" width="100%" height="400px"></iframe>

Just as we're used doing with programs like Adobe Photoshop, but also Procreate or other Adobe programs, opacity is not the only way to change how our shapes look when in front of other parts of the canvas: we can also use **blend modes**. To use them we will implement the call `blendmode()`, which asks as a parameter the name of the mode. These names are mostly the same as the ones we find in common image editing tools.

!!! summary "Blend Modes"

    Here are the main modes we can use:

    `ADD`: color values from the source are added to values from the canvas. <br>
    `DARKEST`: keeps darkest color value. <br>
    `LIGHTEST`: keeps lightest color value. <br>
    `MULTIPLY`: color values from the source are multiplied with values from the canvas. The result is always darker. <br>
    `SCREEN`: all color values are inverted, then multiplied, then inverted again. The result is always lighter. (Opposite of `MULTIPLY`) 
    `DIFFERENCE`: color values from the source are subtracted from the values from the canvas. If the difference is a negative number, it's made positive. <br>
    `OVERLAY`: combines `MULTIPLY` and `SCREEN`. Dark values in the canvas get darker and light values get lighter. <br>
    `HARD_LIGHT`: combines `MULTIPLY` and `SCREEN`. Dark values in the source get darker and light values get lighter. <br>
    `SOFT_LIGHT`: a softer version of `HARD_LIGHT`.
    <br>


## Adding Typography to the Canvas

As typography is its own precise and important practice this section of the chapter aims to only explain how to render a designer’s own knowledge on the topic in a javascript canvas, but does not in any way aim to explain typography concepts to the learner. Because of this, many typographic concepts will be given for granted and only the ways for those concepts to be implemented will be hereby explained.

The simplest way to add typography to a canvas is to use the `text()` call, which requires three minimum parameters: the text to be written and then the **x and y coordinates of the text’s bottom left corner**. As with the shape calls we’ve seen so far, both `fill()` and `stroke()` are used for styling our text and they will respectively change the text color and its outline.
By default, the text size is 12, but we can change it with a simple `textSize()` call, in which the only parameter is the desired size in points.

Technically speaking, the text parameter is called a string, which can also be declared and initialized as a variable, just like we did with numbers. For example:

<iframe src="https://editor.p5js.org/dide_dd/sketches/oTlWcDWXD" width="100%" height="500px"></iframe>

As you can see, we declare a string by surrounding it with `‘’` characters. Note that you can also choose to use `""` and it will be exactly the same. The second string we declared has a weird \n in between two words. What do these strange characters do? If we tried to place this in a text and run our program we will see that `\n` created a new line. What we’re looking at is an **escape sequence**, i.e. a sequence of characters used to write a special character in our string, that if we were to write normally it would somehow disrupt our code. In this case, creating a new line by pressing enter would only be confusing for both us and our JavaScript interpreter. 

!!! summary "Escape Sequences and Useful Calls"

    **Common escape sequences:**

    `\t` = tab <br>
    `\n` = new line <br>
    `\’` = ‘ <br>
    `\”` = “ <br>

    **Useful calls:**

    `textStyle(style)` – Sets the style for system fonts with NORMAL, ITALIC, BOLD and BOLDITALIC.
    `loadFont(path)` – Loads a font and creates a p5 font object.
    `textFont(font, [size])` – Sets the font used, the second optional parameter is the size.

## Handling Images

As a designer, it’s likely that you will decide to work with images in your projects, and you might be wondering how to handle them in p5. As with almost any other thing we saw until now, images will be handled through a series of calls. Before doing that, we need to have an image in our files in the first place. We can do that by pressing the arrow on the upper left corner of the editor to open the sketch files window, and then pressing plus, finally “Upload File.
Now that we have our image ready, we can start working with it. 
Furthermore, just as we saw with values and strings, images are **objects** in p5 (and in many other programming languages), and as such they can be handled through variables created with the `let` keyword. As we’ve seen before, we can either declare our object variable without immediately assigning it or not. To assign an image to our object we will be using the `loadImage()` call, which requires a string with the image path as a parameter.
Usually all “load” calls for loading assets are used in a special kind of function: `preload()` which will be called before ``setup()` and `draw()`.

Now that we have our image ready it’s time to actually create a canvas with it. To do so we will have to first create a canvas with the same size as the image. To do so, we will need to call the image size in the parameters of `createCanvas()` through the dot operator. In many programming languages we can use the dot operator to call an object data, for example the length of a string or the width of an image, like in our case. Finally, we will need to draw our image by using the simple call `image()` which requires as parameters the image we are going to use and the coordinates of the top left corner, which in our case is 0, 0.

This is how our program will look like now:

```javascript

function preload(){
	let img = loadImage(‘example.txt’);
}

function setup(){
	createCanvas(img.width, img.height);
	image (img, 0, 0);
}

```

If we wanted to easily resize our image and canvas, we might want to use the fourth and fifth unnecessary parameters of the `image()` call: the bottom right corner coordinates. For example we might edit our code this way:

```javascript

function preload(){
	let img = loadImage(‘example.txt’);
}

function setup(){
	createCanvas(img.width/3, img.height/3);
	image (img, 0, 0, width, height);
}

```

!!! exercises "Exercises"
    1. Write pseudocode to draw a traffic light with red, yellow, and green lights in the correct order vertically. <br>
    *Tip*: Think of shapes, positions, and repetition.

    2. Modify the sample p5.js sketch to create a canvas of size 600x300 and set the background to light gray and try to realise the traffic light in p5. <br>
    *Tip*: Use `circle()` function.

    3. 