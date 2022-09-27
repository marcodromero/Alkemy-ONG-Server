const express = require('express');
const router = express.Router();
const {
    createMember,
    findMembers,
    removeMember,
    updateMember
} = require('../controllers/member');
const { createValidator } = require('../validators/members');
router.post('/', createValidator, createMember);
router.get('/', findMembers);
router.delete('/:id', removeMember);
router.put('/:id', updateMember);
module.exports = router;