class Rect {
    constructor(top, right, bottom, left) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
    }
}

class Draggable {

    getElement() {
        return this.element;
    }

    constructor(height, width, x, y, options) {
        this.element = document.createElement('div');
        this.element.style.position = 'absolute';
        this.element.style.width = width + 'px';
        this.element.style.height = height + 'px';
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
        this.element.style.background = 'red';
        this.isDragging = false;

        // Options stuff
        if (options.useConstraints == true) {
            this.useConstraints = true;
            this.constraintRect = options.constraintRect;
        } else if (options.useConstraints == false) {
            this.useConstraints = false;
        }

        this.setupEventHandlers();
    }

    setupEventHandlers() {
        const el = this.element;

        el.addEventListener('mousedown', (e) => {
            const rect = e.target.getBoundingClientRect()
                
            // Get local coordinates for draggable element. This allows for the relative positioning.
            const x = this.localXDown = e.clientX  - rect.left;
            const y = this.localYDown = e.clientY  - rect.top;

            if (this.useConstraints && !(x >= this.constraintRect.left && x <= this.constraintRect.right && y <= this.constraintRect.bottom && y >= this.constraintRect.top)) {
                this.isDragging = true;
            } else if (this.useConstraints == false) {
                this.isDragging = true;
            }
         

        });

        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                this.element.style.left = e.clientX - this.localXDown + 'px';
                this.element.style.top = e.clientY - this.localYDown + 'px';
            }
        })

        document.addEventListener('mouseup', () => {
            this.isDragging = false
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const d = new Draggable(100, 100, 100,  100, {
        useConstraints: true,
        constraintRect: new Rect(50, 100, 100, 0)
    });
    document.body.appendChild(d.getElement());
});