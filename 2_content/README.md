# Highest Specificity
!Important
    ↓
InlineStyle
    ↓
ID Attributes
    ↓
Classes
    ↓
Elements


# Inheritance
```
Body color: #FFFFFF;
    ↓
DIV (Inherits the color)
    ↓                   →   H1 color: #FF6565;
    ↓                       ↓
    ↓                       → EM (inherited color from h1)
Nav (Inherits color from body)                               ↓ 
```

# Cascade

## Each code snipped written below overtakes the one above

```css
.box {
    background-color: red;
    text-align: center;
}
↓
.box{
    background-color: blue;
    text-align: right;
}
↓
.box{
    background-color: purple;
    text-align: left;
}
```

## Selectors, Classes, Id 
All paragraphs will be red
```css
p {color: red;} 
```
All red Classes will be red
```css
.red {color: red;} 
```
### Only a single ID can exist
ID myParagraph will be red
```css
#myParagraph {color: red;} 
```
