# Draggable Class

This class allows for the dragging and dropping of elements by creating a new one and allowing customisation from there through JavaScript inheritance.

Instances of this class contain a div element that has dragging and dropping enabled. It's all done in plain old JavaScript so there are no dependencies.

## Usage

```
const draggableElement = new Draggable(100, 100, 100,  100, {
    useConstraints: true,
    constraintRect: new Rect(50, 100, 100, 0)
});

document.body.appendChild(draggableElement.getElement());
```

This code creates a new draggable. The first four parameters are there to allow you to specify the width, height, x location and y location respectively.

The fourth argument should be optional and allows you to specify that you want the draggable area to be contained within the specified `Rect` and nowhere outside of it. Further options will follow.

Finally the element is added to the body of the document.

## Future Plans

This will eventually become a React component.

It will also need to work on tablets and mobile phones.