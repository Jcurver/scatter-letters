# 🔠 Scatter Letters

### The text is scattered when the mouse passes over it.
### No PeerDependency! Good performance!

<a href="https://ibb.co/ZL1N99L"><img src="https://i.ibb.co/tmP3RRm/2023-02-04-4-22-59.png" alt="2023-02-04-4-22-59" border="0" /></a>

### 🎥 Youtube Demo : https://www.youtube.com/watch?v=eVliGZLmwks&feature=youtu.be

This project was created with inspiration from watching Interactive Developer Kim Jong-min's YouTube.

## Usage
````javascript
new ScatterLetters(strs[,options])
````
#### example

````javascript
window.onload = () => {
  new ScatterLetters("AIC DB GFJ", {
    sparkLevel: 11,
    comebackSpeed: 1,
    mouseThickness: 15,
    color: "#30e080",
    flyingDotColor: "#e81831",
    blankWidth: 17,
    letterSpacing: 4,
    fontSize: 16,
    top: 310,
    left: 160,
  });
};
````

Strings can contain up to 30 characters. (Alphabet, space only, converted to upper case)

All options are not required.

| Key            | discription                                     | default    |
| -------------- | ----------------------------------------- | ------- |
| sparkLevel     | intensity of the spark that spreads when the mouse passes | 6 |
| comebackSpeed  | The speed at which points spread out return              | 4 |
| mouseThickness | extent to which a point is affected when the mouse passes over it          | 12 |
| color          | Color of immobile dots                                   | "#000000" |
| flyingDotColor | The color of the scattered dots. It changes slightly to the basic color. | "#00FF00" |
| blankWidth     | Blank Width                                   | 10 |
| letterSpacing  | Letter Spacing                                   | 3 |
| fontSize       | Font Size                                   | 20 |
| top            | Margin Top                                   | 0 |
| left           | Margin Left                                   | 0 |
