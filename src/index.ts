/**
 *
 * @name tmbot
 * @author Spirit <i8bou3@gmail.com>
 * @license MIT
 * @copyright (c) 2023 Spirit
 *
 */

import { Client } from "discord.js"
import * as dotenv from "dotenv"

dotenv.config()

const client = new Client({
  intents: []
})

client.login(process.env.TOKEN)
