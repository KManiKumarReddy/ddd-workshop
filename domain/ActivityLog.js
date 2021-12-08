class ActivityLog {
  constructor() {
    this.removedItems = [];
  }

  recordItemRemoved(name) {
    this.removedItems.push(name);
  }

  getRemovedItems() {
    return this.removedItems;
  }
}

module.exports = ActivityLog;
