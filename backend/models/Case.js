const mongoose = require('mongoose');

const CaseSchema = new mongoose.Schema({
    caseId: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Case', CaseSchema);
