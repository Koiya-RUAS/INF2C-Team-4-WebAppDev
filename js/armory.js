import { gearModal } from './models/modal.js';

class GearItem {
  constructor(name, kind, condition, dangerous) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.kind = kind;
    this.condition = condition;
    this.dangerous = dangerous;
    this.retired = false;
  }
}

class GearRepository {
  constructor() {
    this.storageKey = 'gear';
  }
  getAll() {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }
  save(gearItem) {
    const items = this.getAll();
    items.push(gearItem);
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}

class ArmoryPage {
  constructor() {
    this.repository = new GearRepository();
    this.form = document.getElementById('gearForm');
    this.bindEvents();
  }
  bindEvents() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }
  handleSubmit() {
    const name = document.getElementById('gearName').value.trim();
    const kind = document.getElementById('gearKind').value;
    const condition = document.getElementById('gearCondition').value;
    const dangerous = document.getElementById('gearDangerous').checked;
    if (!name || !condition) return;
    const item = new GearItem(name, kind, condition, dangerous);
    this.repository.save(item);
    this.form.reset();
    gearModal.close();
  }
}

const armoryPage = new ArmoryPage();
