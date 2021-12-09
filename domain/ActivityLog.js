class ActivityLog {
  constructor() {
    this.events = [];
  }

  recordItemRemoved(name) {
    this.removedItems.push(name);
  }

  getRemovedItems() {
    return this.removedItems;
  }
}

module.exports = ActivityLog;
