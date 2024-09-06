import {GoogleGenerativeAI} from "@google/generative-ai"




const genAI = new GoogleGenerativeAI("AIzaSyBQEC_cNIjKG0XIqcHAIQyBsUp530hD01Y");



const model = genAI.getGenerativeModel({
    model:"gemini-1.5-pro"
})



const r = await model.generateContent("top 10 projects to make in web development");


console.log(r.response.text())