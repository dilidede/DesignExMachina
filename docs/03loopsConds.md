# Loops and Conditionals

Now that we have the basics clear, it’s time to delve into two of the most important concepts in programming: loops and conditionals. Despite the intimidating name, it’s nothing to be too scared of. It’s impossible to stress enough how important these concepts are, both for classic programming algorithms, but also for the creations of pattern, something many designers will be interested about.

Before delving into the topic, let's look at **operations**. They are basic actions we can perform both in simple mathematics and with computers, where the two most obvious ones are `+` and `-`, which are unsurprisingly "add" and "subtract". We then have `*` for multiplications and `/` for divisions, but here comes a twist. Just as in elementary school we learnt about the remainder of a division, we also have in programming a way to compute it: the **remainder operation** `%`. This operation computes the remainder of a division, so for example if we calculated "13/3" p5 would round the result to 4, while "13%3" would output "1", since "4*3" is 12 and "13-12" is 1.
Finally, let's look at something quite strange at first: 

<iframe src="https://editor.p5js.org/dide_dd/sketches/4D2lw573N" width="800" height="400" frameborder="0"></iframe>


How can position be equal to itself plus one? As we saw in the last section, "position" is a variable that holds a value and writing `position = position + 1` is a way to update that value. Therefore, if initially position equals to 20, after the operation it will equal to "20 + 1". Since, as we've seen, the `draw()` function reruns at every frame, the circle will be redrawn at its new position every frame, therefore creating our simple animation. This increase operation is very useful in programming, especially in loops, just as we will see now. 

## Loops

Loops are a fundamental concept in programming, as they allow a program to **repeat an action** while or until a specific condition is met. The condition might be a target result (for example filling the whole canvas) or simply repeating an action a set number of times.

Let’s say we want to create a chain of 20 circles. In pseudocode it might look like this:

```
repeat 20 times:
	draw a circle of 40 px diameter every 30 px

```

How can we translate this simple concept into real code that is executable? One of the most common ways is by using a structure called **for-loop**. It allows to repeat an action while a condition is valid, so for example we can use it to repeat an action a certain number of times by using a counter, a variable that keeps track of the amount of times the action has been repeated.

```javascript

for (/*condition goes here */){
    //action goes here
  }

```

In the action we will use calls and commands that we already encountered before, but the condition part might look a bit tricky. This is where our counter, usually named i, comes into play. In the cursive brackets we will need to declare the counter variable, define until which condition will the loop be repeated and finally increment our counter. This is how a typical for loop condition looks like:

```javascript

for (let i = 0; i < 20; i++){
	//action goes here
  }

```

Here we declared the counter variable with the number 0, instructed the computer to repeat the action until its value is less than 20, and finally increased the counter value by 1. Note we increased the value by using the increment (`++`) operator, a special operator in JavaScript that is logically equivalent to writing `i = i + 1`. Note that it's also possible to have a **decrement** (`--`) operation. This way our counter will begin from 0, increment by 1 at the end of the block (i.e. the `}` bracket) and then check whether the counter is minor than 20. If it is, the block will run again, otherwise it will skip it and continue with our code.

So how would our chain pattern code look like in p5? 

<iframe src="https://editor.p5js.org/dide_dd/sketches/R0K9LWHj_" width="800px" height="400px"></iframe>

Now, in your p5 programs it's very likeable you will need to loop through the whole canvas, and in this case a simple loop won't be enough, as you will require coordinates both for the x and the y. How to handle this case? Let's look at the code:

```javascript
for (let x = 0; x < 4; x++) {
  for (let y = 0; y < 4; y++) {

  }
}
```

What is going on? The program enters in the first loop, then runs the second one until it doesn't meet anymore the condition (i.e. being less than nine), then goes back to the first loop in order to increment the x value and then it runs the second loop. This repeats until the first loop condition is valid. If this sounds a bit too confusing, let's look at it.

<iframe src="../p5/nestedLoop.html" width="800" height="500" style="border: 2px solid var(--main-orange)"></iframe>


## Conditionals

Conditionals are another fundamental concept in programming, as they allow the computer to executer different actions depending on whether a condition is true or false.

Thanks to this structure, we can make our program perform a certain action **only if** a certain circumstance apply. For example we can take our initial code that created circles wherever our mouse was and make it so that the moment our mouse goes into the bottom half of the canvas, all the circles will be red. In pseudocode, our logic would look like this:

```
draw a red circle where the mouse is

if the mouse is in the bottom half:
	fill is blue

```

The basic syntax is the same as the for loops we’ve seen in the last section:

```javascript
if (condition){
    //action
  }
```

However, the key difference is in how we will write our **condition**. Usually the condition will be a value comparison, for example in our case checking whether the mouseY is higher than half the canvas height.

```javascript
if (mouseX > height/2){
    //action
  }
```

This is usually called an “**if statement**” and is extremely common practice in programming.
Let’s now assume that we want for all the circles in the top half to be red and the circles in the bottom half to be blue. How would we deal with it? Since there is no other option than for the mouse to be in the bottom half, we don’t need to explicitly explain the other condition, and we might just write our logic in pseudocode like this:


```
if the mouse is in the top half:
		fill is red

	otherwise:
		fill is blue

	draw a circle where the mouse is
```

But how do we write the “otherwise” part? This is called an “if else statement” and the syntax is very simple, as following:

```javascript
if (/*condition*/){
    //action
  } else {
	//action
}
```

So this is how our code will finally look like:

<iframe src="https://editor.p5js.org/dide_dd/sketches/w4wpK3wAE" width="800px" height="400px"></iframe>

In this program we defined an action for our program to do in the eventuality that the if condition didn’t apply, and we did it through the “else” statement. However, what if we didn’t have just two conditions but more? For example that our circles assumed a different color based on the third of the canvas the mouse found itself in?

```
if mouse is in the top third:
		fill is red

	if mouse is in the mid third:
		fill is green

	otherwise:
		fill is blue

	draw a circle where the mouse is
```

Even though this might look complex at first, the basic logic is the same as the one we saw before, we just need one last piece of syntax: else if. This is how our conditional statement will look like::

```javascript
//top third
if (mouseY > (height/3)*2) {
	fill(200, 0, 0);
	} else if (mouseY < (height/3)*2 && mouseY> height/3 ) {
		//mid third
		fill (0, 0, 200)
		} else {
   			//bottom third
			fill(0, 200, 0);
		}
```

You might have noticed that something is looking strange here. What is happening in the fourth line? We are here handling not one, but two conditions: in this example two criteria must be met. In our case we wanted to fill the circles in green **only if** the mouse Y coordinate was **both less than two thirds and more than one third**.

This kind of situation requires us to introduce two new symbols: `&&` and `||`. In plain English, the first one can be read as “AND”, it means that both conditions must be true for the action to be performed. The second one is instead "OR”, which means that at least one of the two condition must be true in order for the program to perform the action. So let's look at this **truth table** and see a little bit better how this logic works.


<table class ="truth-table">
  <thead>
    <tr>
      <th>x</th>
      <th>y</th>
      <th>AND</th>
      <th>OR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
    </tr>
    <tr>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>false</td>
      <td>true</td>
      <td>false</td>
      <td>true</td>
    </tr>
    <tr>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

Finally, let's look at our complete code.

<iframe src="https://editor.p5js.org/dide_dd/sketches/d0c2s7HxK" width="800px" height="600px"></iframe>


!!! exercises "Exercises"
	1. Draw triangles in a row. Change the color of a triangle when the mouse is over it.
	2. Draw a 5x5 grid of squares.
		2.1. Try to alternate the square colors like in a chessboard
			*Tip*: Use nested loops.
  3. 
  4. Starting from the *02A* program from this chapter, make every second circle filled with red.
		*Tip*: Use the remainder operation
	