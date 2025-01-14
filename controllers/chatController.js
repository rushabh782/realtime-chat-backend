const Message = require("../models/Message");
const Room = require("../models/Room"); // Import Room Model

// Get Messages for a Specific Chat Room
exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ room: req.params.room }).populate(
      "sender",
      "username"
    );
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create a Chat Room
exports.createRoom = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if room already exists
    const existingRoom = await Room.findOne({ name });
    if (existingRoom) {
      return res.status(400).json({ error: "Room already exists" });
    }

    // Create and save the new room
    const room = new Room({ name });
    await room.save();

    res.status(201).json({ message: "Room created successfully", room });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Get All Chat Rooms
exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find(); // Get all rooms from the database
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Send a Message to a Chat Room
exports.sendMessage = async (req, res) => {
  try {
    const { room, sender, content } = req.body;

    // Check if the room exists
    const existingRoom = await Room.findById(room);
    if (!existingRoom) {
      return res.status(400).json({ error: "Room not found" });
    }

    // Create and save the new message
    const message = new Message({ room, sender, content });
    await message.save();

    res.status(201).json({ message: "Message sent successfully", message });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
