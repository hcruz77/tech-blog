


const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/update/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne(req.params.id, {
      attributes: [
        'title',
        'post_content',
      ]
    }) 
  
    const post = postData.get({ plain: true });

    res.render('update', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
