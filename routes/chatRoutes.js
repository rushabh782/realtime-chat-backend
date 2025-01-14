const express = require("express");
const {
  getMessages,
  createRoom,
  getAllRooms,
  sendMessage,
} = require("../controllers/chatController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create a chat room
router.post("/room", authMiddleware, createRoom);

// Get all chat rooms
router.get("/rooms", authMiddleware, getAllRooms);

// Get messages for a room
router.get("/messages/:room", authMiddleware, getMessages);

// Send a message to a chat room
router.post("/message", authMiddleware, sendMessage);

module.exports = router;
