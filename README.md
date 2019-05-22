# Draggable Class

This is going to be part of a much larger project called Shout which will allow for the streaming and scheduling of social media posts. Being able to drag and drop is an important part of the functionality for this first module so I want to get it right so I can use it easily later on. Eventually this will become a React component.

Instances of this class contain a div element that has dragging and dropping enabled. It's all done in plain old JavaScript so there are no dependencies.

## Usage

```
const draggableElement = new Draggable(100, 100, 100,  100, {
    useConstraints: true,
    constraintRect: new Rect(50, 100, 100, 0)
});

document.body.appendChild(draggableElement.getElement());
```

This code creates a new draggable. The first four parameters are there to allow you to specify the height, width, x location and y location respectively.

The fourth argument should be optional and allows you to specify that you want the draggable area to be contained within the specified rect and nowhere outside of it. Further options will follow.

Finally the element is added to the body of the document.