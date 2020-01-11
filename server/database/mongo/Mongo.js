class Mongo {
  constructor({ db, logger }) {
    this.db = db;
  }

  async getStatus() {
    return await this.db.stats();
  }
}

module.exports = Mongo;
