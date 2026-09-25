const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const { signup, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

router.post("/signup", signup);
router.post("/login", login);

router.post("/logout", authMiddleware, async (req, res) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return res.status(500).json({
      error: error.message
    });
  }

  return res.status(204).send();
});

module.exports = router;