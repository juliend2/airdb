export class TableRow {

  constructor(row) {
    this.row = row;
    Object.assign(this, row);
  }

  isUrgent() {
    return this._isSomething('is_urgent');
  }

  isImportant() {
    return this._isSomething('is_important');
  }

  githubGist() {
    return this.hasOwnProperty('gist_url') ? this.gist_url : null;
  }

  _isSomething(prop) {
    return this.hasOwnProperty(prop) ? !!parseInt(this[prop], 10) : null;
  }

}
