# What is Artificial Intelligence?

Before delving into how to properly use AI for writing code, it is important to understand what this technology is and how does it work. However, please remember that everything is going to be **heavily simplified** and is not meant to be an exhaustive explanation on AI. 

Artificial Intelligence can be described as an algorithm that tries to simulate human intelligence. While that may sound abstract, the core idea is simple: humans learn from **observing things, recognizing patterns and apply what we learned**. In a way, AI does the same thing.

There are two main approaches that allow computer scientists to create these AI: **symbolic AI** (also called "Good Old Fashioned Artificial Intelligence" or GOFAI), and **connectionist AI** (or more commonly, Neural Networks).
As the alternative name suggests, **symbolic AI** is the older one, and works through **explicit rules**, similar to traditional programming. For example, if we write a rule that says "If an animal has four legs, a tail, and it barks, then it’s a dog", the system will be able to recognize dogs within a set of images. However, it is more prone to errors, as for example it might not be able to correctly distinguish a dog if the input featured a dressed-up dog.

On the other hand, connectionist AI doesn't rely on rules, but rather on **data**. What does this mean? If we talk about an AI that generates images from a written prompt, the **neural network** is fed with millions of images, each labeled with the elements present in the image. This way, the network doesn't know for example **exactly what makes a dog a dog**, but rather internalizes its features. If we instead think of Large Language Models, the ones that have text both as input and output, they are given millions of texts to "read" and slowly learn how does a sentence look like, how does grammar work and so on. 

There is not an approach of AI that works for every given situation, different types serve different purposes. Some models are designed to classify things (discriminative models), others are built to generate content, and others for decision-making.

Although AI in creative practices has exploded in the recent years, it has been long present in this field. For instance, back in the 1970s the artist Harold Cohen created **AARON**, a program that was able to draw without specific instructions on what to draw. At the beginning it was only able to create abstract images, but by 1990s it was able to draw humans and even color them.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/IPczQgCuOOc?si=T-vks129-YoCskp9" title="Harold Cohen and AARON (1987)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

As AI models have become more advanced, they’ve also become more flexible. There are **unimodal** generative AIs that work with just one type of data, such as text-to-text or image-to-image. Others are **multimodal**, meaning they can understand and produce across different formats: text-to-image, image-to-sound, image-to-text, and so on. These models are behind tools like Midjourney, DALL·E, and Adobe Firefly, which allow users to describe a scene or concept in natural language and receive a visual interpretation in return.

## How do generative models work?

Generative models as we know them base themselves on **Generative Adversarial Networks** (GANs), a technology introduced in 2014 by Ian Goodfellow. Although the name feels a bit complicated, the idea is simple: we have two models involved, one that generates fake data (generative model) and another that tries to detect whether the data is real or not (discriminative model). At first the discriminative one will recognize the fake data quite often, but as time passes, the generative model will learn how to get past it. In simpler words, you can see the discriminative model as a bouncer that only allows cats to enter and the generative model as someone who tries to trick the bouncer into letting them enter with a cat costume. At first the bouncer will easily recognize that the "cat" is not real, but as time passes the generative model gets better and better to trick the discriminator, until it can't tell the fake cat costume from a real cat anymore.

If this is how the generative models get trained to be as convincing as possible, how do they actually generate images or text?

Generative models use the connectionist approach, which means that they get trained by analysing millions of data, learning how do things work and thus how to recreate them. As the model is influenced by millions of images or texts, it **should not be able to recreate a specific thing from its training data**, right? It should be like that, but unfortunately it does not always work like this. Since the most popular models are usually trained on data found on the **internet**, it might happen that a single text or image is not present just once, but two, five, ten, even hundreds of times. Generative models work essentially with **statistics**, which means that they take decisions based on how should things **probably** be.
Because of these inherent characteristics of generative models, it can happen that a specific thing is present so many times in the training data that the model accidentally recreates it.

However, this is not the only problem that these generative models can have. While a wrongly generated image is easier to tell apart, as it may include unrealistic looking elements, unfortunately the same cannot be said on wrongly generated text. The statistical nature of large language models leads to the risk of **hallucinations**, as the model will generate what it assumes should probably there, but the information might not be true. This is important not only when we take the risk of using LLMs to get information, but also when we use it to **write code**, since the model will always be confident that its solutions work, even when they don't.

It's exactly because of this reason that it's important to learn the basics of programming in order to be able to use LLMs for writing code.

# AI as a code writing assistant

Before even starting to learn how to best use LLMs to write code, the selection of the tool is as important as the action itself. Mantaining tge open-source and free resources philosophy of this project, we also recommend the use of an **open-source LLM**. Fortunately, of the LLMs that are good to write code, one of the best ones also happens to be open-source:<a href="https://editor.p5js.org/dide_dd/sketches/wqZ_Qh0Ud" target="_blank">DeepSeek</a>.

The approach proposed is obviously appliable to virtually any LLM, although you should keep in mind that you can achieve better results when you use the **"deep think" option**, whose name can be different based on the model used. These results tend to be better because the LLM generates a provisional text through which it "thinks" before giving you the final response, often leading in our case to better code writing.

That said, the way we use these tools matters just as much as which ones you use. First, it's recommendable to **write your prompts in English**, even if it's not your first language. You can rely on translators like <a href="https://translate.google.com/" target="_blank">Google's</a> or  <a href="https://www.deepl.com/en/translator" target="_blank">DeepL</a> if you are not confident with your English. This is because these models have been trained primarily on English data, documentation, and questions, and the quality of the results drops noticeably when using other languages.

But relying on an LLM doesn’t mean you can stop thinking algorithmically. In fact, having a basic mental model of what you want to achieve, just as you would when writing code yourself, consistently leads to better results. You don’t need to know the full syntax or exact details of what functions and calls do you need, but having a clear idea of how the code should work is extremely important. This is because you need to give these clear explanations as prompts. If your prompt is vague or underspecified, they’ll often make assumptions without explicitly saying so. This can result in code that compiles, runs, and looks correct—but doesn’t do what you actually needed.
Exactly like when you explain a project to a friend that knows nothing about it, you shouldn't give for granted the specifics. For instance, a common error is to just ask for a program, but what you want is for instance a p5 program, or a JavaScript program for Indesign, and so on and so forth.

Whenever you ask the model for help, whether you’re writing a function, fixing a bug, or trying something you’ve never done before you should sketch out your goal, or at least have a clear idea of what it is. What are the inputs and outputs? What steps need to happen in between? What edge cases should be considered? You don't need to be formal or use pseudo-code, just be clear in the prompt you give. It might also be useful to explain your idea to the model and ask for a steps breakdown, rather than the full code immediatly.
Don't think of the LLM as a magic wand but as a very fast and overconfident collaborator: **their work is good only if your prompt is good**, otherwise it will give you results that they consider perfect, even when they are not.

Another useful tip for learning programming through AI can be to ask the LLM clear explanation of code and of anything that isn't immediately clear to you.

The core idea is that you should use LLMs to accelerate your learning and speed-up long interative processes, but **never guide the project itself**. They can help you achieve results that exceed your current skill level, but they cannot replace reasoning. 

## Not just p5, Adobe programs and so much more

The vast majority of designers works everyday with Adobe programs, 