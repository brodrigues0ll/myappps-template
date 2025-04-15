// seedAdmin/runSeedAdmin.js
"use server";
const bcrypt = require("bcryptjs");
const connect = require("../src/lib/db");
const User = require("../src/models/User");

const runSeedAdmin = async () => {
  try {
    await connect();

    const admin = await User.findOne({ email: process.env.ADMIN_USER_EMAIL });

    if (!admin) {
      const hashedPassword = await bcrypt.hash(
        process.env.ADMIN_USER_PASSWORD,
        10
      );

      await User.create({
        name: process.env.ADMIN_USER_NAME,
        surname: process.env.ADMIN_USER_SURNAME,
        email: process.env.ADMIN_USER_EMAIL,
        password: hashedPassword,
      });

      console.log("✅ Usuário admin criado com sucesso!!");
    } else {
      console.log("❌ Usuário admin já existe. Nenhuma ação necessária.");
    }
  } catch (error) {
    console.error("❌ Erro ao criar o usuário admin:", error);
  } finally {
    process.exit();
  }
};

runSeedAdmin();
