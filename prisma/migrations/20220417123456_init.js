module.exports = {
    async up(db) {
      // Perform migration actions, e.g. create collections, indexes, etc.
      await db.collection('users').createIndex({ email: 1 }, { unique: true });
    },
  
    async down(db) {
      // Perform rollback actions, e.g. drop collections, indexes, etc.
      await db.collection('users').dropIndex({ email: 1 });
    },
  };
  