project: image search app

this is my first project on learning javascript, CSS, HTML. 

things I learnt
- HTML is the code that creates makes the element of the website exist. it creates the button. it creates the text
- CSS is the design for the HTML. it can increase the size of the button, adjust the alignment and more.
- javascript will create a backend for the website to make the website more interactive and usable

tutorial video:
https://www.youtube.com/watch?v=oaliV2Dp7WQ

the image search website that I implemented into this new website is:
https://unsplash.com/oauth/applications/546648


how to use:
- just click the "go live" button at the bottom right corner of VScode


technical description of the project:
i first create a HTML page. then i used CSS to give the HTML page some adjustments and designs. and javascript to make the website more interactive

in order to get my images upon giving the prompt in the search query bar, i used a website call unsplash. i took the website API, and with javascript, i made an async function to generate a url according to the prompt and then return the following appropriate images.

after getting the images from unsplash API, i then had a function automatically generating the HTML, and CSS for the image so that the images can be displayed on the website.


current problems: 
- the search bar is not working at the moment [i cant generate images upon prompting the search bar] (i suspect that there is something wrong with my javascript. or the API is not working)
- im not sure if my "Show More" button is working or not. [because i cant generate images idk if my show more button is working] (if it is not working i suspect there is something wrong with javascript. -- the button is able to only be shown when there is page > 1.... but it is not generating more pic upon clicking it)

