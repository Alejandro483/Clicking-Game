# Clicking-Game

# The game

The game is very simple:
1. Look at the images on the screen.
2. Click on one image.
3. Click on a different image.
4. Every time the user clicks on an image, the images change positions randomly.
5. Click as many times without clicking the same image twice.
- - -

## mechanincs

This app is a memory game using React. This app  breaks up the application's UI into components, manage component state, and respond to user events.

* The application renders different images to the screen. Each image listens for click events.

* The application keeps track of the user's score. The user's score incrementes when clicking an image. The user's score resets to 0 if the an image is clicked more than once and the game restarts.

* Every time an image is clicked, the images rendered to the page shuffle automatically in a random order.

* The user wins the game if able to click on all the images only once.

