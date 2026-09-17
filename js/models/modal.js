class GearModal {
    constructor() {
        this.overlay = document.getElementById('gearModal');
        this.openBtn = document.getElementById('addGearBtn');
        this.closeBtn = document.getElementById('closeGearModal');
        this.cancelBtn = document.getElementById('cancelGearModal');

        this.bindEvents();
    }

    open() {
        this.overlay.classList.add('active');
        this.overlay.setAttribute('aria-hidden', 'false');
    }

    close() {
        this.overlay.classList.remove('active');
        this.overlay.setAttribute('aria-hidden', 'true');
    }

    bindEvents() {
        this.openBtn.addEventListener('click', () => this.open());
        this.closeBtn.addEventListener('click', () => this.close());
        this.cancelBtn.addEventListener('click', () => this.close());
    
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });
    }
}

const gearModal = new GearModal();