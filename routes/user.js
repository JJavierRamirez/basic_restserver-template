const { Router } = require('express');
const { usersGet, usersPut, usersPost, usersPatch } = require('../controllers/users');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:id', usersPut);

router.patch('/', usersPatch);

router.delete('/', (req, res) => {
    res.json({
        ok: true,
        msg: "delete API"
    });
});

module.exports = router;