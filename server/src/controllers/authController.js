const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.register = async (req, res) => {
  // Lógica de registro (ejemplo)
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: { email, password: hashedPassword, role: "owner" }
    });
    
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

exports.login = async (req, res) => {
  // Lógica de login
};