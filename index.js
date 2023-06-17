import { Configuration, OpenAIApi } from 'openai'
import { process } from './env'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const chatbotConversation = document.getElementById('chatbot-conversation')
 
const conversationArr = [
    {
        role: 'system',
        content: 'You are an assistant that gives very short answers.'
    }
] 
 
document.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = document.getElementById('user-input')   
    conversationArr.push({ 
        role: 'user',
        content: userInput.value
    })
    fetchReply()
    const newSpeechBubble = document.createElement('div')
    newSpeechBubble.classList.add('speech', 'speech-human')
    chatbotConversation.appendChild(newSpeechBubble)
    newSpeechBubble.textContent = userInput.value
    userInput.value = ''
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight
}) 

async function fetchReply(){
    const response = await openai.createChatCompletion({
        model: 'gpt-4',
        messages: conversationArr,
        presence_penalty: 0,
        frequency_penalty: 0.3
/*
Challenge:
    1. Set the frequency_penalty to 0.
    2. Give the chatbot this query: Generate 20 ways to 
       say "you can't buy that because you're broke".
    3. Paste the results into output.md.
    4. Repeat the process with frequency_penalty set to 2.
    7. Examine the differences between the 2 outputs.
    ⚠️ DO NOT SET frequency_penalty to -2!!!
*/
    }) 
    conversationArr.push(response.data.choices[0].message)
    // renderTypewriterText(response.data.choices[0].message.content)
    console.log(response.data.choices[0].message.content)
}

function renderTypewriterText(text) {
    const newSpeechBubble = document.createElement('div')
    newSpeechBubble.classList.add('speech', 'speech-ai', 'blinking-cursor')
    chatbotConversation.appendChild(newSpeechBubble)
    let i = 0
    const interval = setInterval(() => {
        newSpeechBubble.textContent += text.slice(i-1, i)
        if (text.length === i) {
            clearInterval(interval)
            newSpeechBubble.classList.remove('blinking-cursor')
        }
        i++
        chatbotConversation.scrollTop = chatbotConversation.scrollHeight
    }, 50)
}