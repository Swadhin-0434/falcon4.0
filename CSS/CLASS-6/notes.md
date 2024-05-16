CSS Flexbox Guide
Introduction
Welcome to the CSS Flexbox Guide! This document aims to provide you with a comprehensive understanding of CSS Flexbox, a powerful layout mechanism in CSS for building flexible and responsive layouts.

What is Flexbox?
CSS Flexible Box Layout Module, commonly known as Flexbox, is a layout model in CSS that allows you to design flexible and efficient layouts. With Flexbox, you can easily align and distribute space among items in a container, regardless of their size and order.

Getting Started To start using Flexbox, you need to understand the following concepts:

Flex Container
A flex container is an element whose children are laid out using the Flexbox model. To create a flex container, apply display: flex; or display: inline-flex; to the container element.

css

.container {
  display: flex;
}
Flex Items
Flex items are the direct children of a flex container. They can be laid out horizontally or vertically, depending on the flex direction. Each flex item can be individually styled using Flexbox properties.

css

.item {
/_ Flex item styles _/
}
Flexbox Properties
Flexbox provides several properties to control the layout of flex containers and flex items:

display: Specifies the type of box used for the container (e.g., flex, inline-flex).
flex-direction: Sets the direction of the main axis (row or column) along which flex items are placed.
flex-wrap: Controls whether flex items are forced onto a single line or can wrap onto multiple lines.
justify-content: Aligns flex items along the main axis of the flex container.
align-items: Aligns flex items along the cross axis of the flex container.
align-self: Overrides the align-items value for individual flex items.
flex: Specifies the ability of a flex item to grow, shrink, or stay the same size relative to other flex items.
order: Controls the order in which flex items appear within a flex container.
Resources
MDN Web Docs: Flexbox: A Complete Guide to Flexbox

Flexbox Froggy: A game for learning Flexbox through puzzles.

Conclusion
CSS Flexbox is a versatile tool for creating responsive and dynamic layouts in web development. By mastering Flexbox, you'll have more control over the arrangement and alignment of elements on your web pages.

CSS units:
px (1inch = 96px)
em (16px)
rem (16px)
examples: font-size: 16px; 2em = 216px = 32px; 2rem = 216px = 32px;

margin :
margin-top
margin-right
margin-bottom
margin-left
padding :
padding-top
padding-left
padding-right
padding-bottom
block element : it takes the whole width of it's area.
example : h1...h6,p,div etc

inline element : it takes ony the required width of it's area.
example : span,a,img,input etc