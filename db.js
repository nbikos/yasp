var db = require('monk')(process.env.MONGO_URL || "mongodb://localhost/dota");
db.players = db.get('players');
db.matches = db.get('matches');
db.ratings = db.get('ratings');
db.matches.index('players.account_id');
db.matches.index({
    'match_id': -1
}, {
    unique: true
});
db.matches.index({
    'match_seq_num': -1
}, {
    unique: true
});
db.matches.index({
    'start_time': -1
});
db.players.index('account_id', {
    unique: true
});
db.players.index({
    'last_visited': -1
});
db.players.index({
    'full_history_time': 1
});
db.players.index({
    'last_summaries_update': 1
});
db.ratings.index({
    'match_id': -1,
    'account_id': 1
}, {
    unique: true
});

module.exports = db;