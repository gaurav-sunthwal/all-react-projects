import { Button, HStack, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

function AIProject() {
  const [answer, setAnswer] = useState("");
  const [qus, setQus] = useState("");
  const APIKey = "AIzaSyBQEC_cNIjKG0XIqcHAIQyBsUp530hD01Y";

  async function run() {
    try {
      const genAI = new GoogleGenerativeAI(APIKey);
      const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const result = await model.generateContent({
        prompt: {
          text: qus  // Make sure the prompt object has the correct structure
        }
      });

      const text = await result.response.text();
      setAnswer(text);
    } catch (error) {
      console.error("Error generating content:", error);
      setAnswer("An error occurred. Please try again.");
    }
  }

  function handleClick(e) {
    e.preventDefault();
    run();
  }

  return (
    <div>
      <Heading>AI Clone</Heading>
      <form>
        <HStack>
          <Input onChange={(e) => setQus(e.target.value)} value={qus} placeholder="Enter your Prompt" />
          <Button onClick={handleClick}>Generate Answer</Button>
        </HStack>
      </form>
      <VStack>
        <Heading>Answer:</Heading>
        <div>{answer}</div>
      </VStack>
    </div>
  );
}

export default AIProject;