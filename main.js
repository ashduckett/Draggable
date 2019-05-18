class Draggable {

    getElement() {
        return this.element;
    }

    constructor(height, width, x, y) {
        this.element = document.createElement('div');
        this.element.style.position = 'absolute';
        this.element.style.width = width + 'px';
        this.element.style.height = height + 'px';
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
        this.element.style.background = 'red';
        this.isDragging = false;
        this.setupEventHandlers();
    }

    setupEventHandlers() {
        const el = this.element;

        el.addEventListener('mousedown', (e) => {
            const rect = e.target.getBoundingClientRect()
                
            // Get local coordinates for draggable element. This allows for the relative positioning.
            // Ya bastard.
            this.localXDown = e.clientX  - rect.left;
            this.localYDown = e.clientY  - rect.top;
            this.isDragging = true
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
    const d = new Draggable(100, 100, 100,  100);
    document.body.appendChild(d.getElement());
});

