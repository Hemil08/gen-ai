import "dotenv/config"
import readline from "readline"
import { ChatMistralAI } from "@langchain/mistralai"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question("What is your name? ",(name) => {
    console.log(`Hello ${name}!`)
    rl.close()
})

const model = new ChatMistralAI({
    model: "mistral-small-latest",
})