# js-background-blend-mode

A JavaScript based _polyfill_ for browsers that don’t support CSS [`background-blend-mode`](http://html.adobe.com/webplatform/graphics/blendmodes/) property.

#### Browser Support: 

- CSS background-blend-mode: many browsers but IE11- and some mobile [Can I Use...](http://caniuse.com/#feat=css-backgroundblendmode).
- Canvas blend modes: any browser but IE11- [Can I Use...](http://caniuse.com/#feat=canvas-blending).

#### Demo: 
[Codepen](http://codepen.io/juanbrujo/full/DnghH/)

![js-background-blend-mode](https://i.imgur.com/KSPNis4.png)

## Usage

1. Add the `js-background-blend-mode.js` file to your HTML
2. Define an element using `data-blend` attribute and one of those values:

	**normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity**

3. Add an image to blend using the `data-blend-image` attribute.
4. Add a color to blend using `data-blend-color` attribute.
5. Add a little CSS and the fallback if the browser support CSS `background-blend-mode` (js-background-blend-mode.css file).

#### Example:

```html
<div class="blend" data-blend="overlay" data-blend-image="demo.jpg" data-blend-color="rgba(255, 0, 0, 0.5)"></div>
```

## TODO

- Polish code
- Check for better crossbrowser support
- Better performance (it is still slow to render)
- ~~Gruntify~~
- Get rid of CSS file
- ~~Bowerify~~
- NPM module

## Credit

- Forked from: [https://github.com/idevsoftware/](https://github.com/idevsoftware/js-background-blend-mode/)
- Adobe Blend Modes and Compositing: [http://html.adobe.com/webplatform/](http://html.adobe.com/webplatform/graphics/blendmodes/)

## License


Original License: [ABRSL](https://github.com/idevsoftware/js-background-blend-mode/blob/master/LICENSE.md).

Forked License: [MIT](https://github.com/juanbrujo/js-background-blend-mode/blob/master/LICENSE)
