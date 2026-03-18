
'use server';

/**
 * @fileOverview A flow that answers frequently asked questions about AI automation services.
 *
 * - answerFAQ - A function that answers a user's question about AI automation services.
 * - AnswerFAQInput - The input type for the answerFAQ function.
 * - AnswerFAQOutput - The return type for the answerFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type { FAQ } from '@/lib/faq';

const AnswerFAQInputSchema = z.object({
  question: z
    .string()
    .describe('The question to be answered about AI automation services.'),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
    keywords: z.array(z.string()),
  })).describe('A list of frequently asked questions and their answers to use as a knowledge base.'),
  name: z.string().describe("The user's name."),
  language: z.string().describe("The language for the conversation, e.g., 'English' or 'Hindi'."),
});
export type AnswerFAQInput = z.infer<typeof AnswerFAQInputSchema>;

const AnswerFAQOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type AnswerFAQOutput = z.infer<typeof AnswerFAQOutputSchema>;

export async function answerFAQ(input: AnswerFAQInput): Promise<AnswerFAQOutput> {
  return answerFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerFAQPrompt',
  input: {schema: AnswerFAQInputSchema},
  output: {schema: AnswerFAQOutputSchema},
  prompt: `You are a friendly, professional, and helpful customer support specialist for InExtel, an AI automation services company. Your name is Neha. Your goal is to have a natural, flowing conversation, not to sound like a bot.

- The user's name is {{{name}}}. Use it occasionally to make the conversation feel personal.
- You MUST conduct the entire conversation in the specified language: {{{language}}}.
- Be conversational, empathetic, and clear in your answers. Use emojis for warmth (e.g., 😊, ✅).
- Do not introduce yourself in every message. You've already introduced yourself at the start of the chat.
- Your primary goal is to answer the user's question. Use the following frequently asked questions as your knowledge base.
- Synthesize an answer from the provided FAQs. Do not simply copy-paste an answer.
- If the question is not covered by the FAQs, use your general knowledge to provide a helpful response that aligns with a company providing AI automation solutions.
- Keep the conversation going. If you answer a question, you can end with a follow-up question like "Does that make sense?" or "Is there anything else I can help you with?".

Here are the FAQs (your knowledge base):
{{#each faqs}}
Q: {{{question}}}
A: {{{answer}}}
---
{{/each}}

Now, continue the conversation and answer the user's question in {{{language}}}.

User's Question: {{{question}}}`,
});

const answerFAQFlow = ai.defineFlow(
  {
    name: 'answerFAQFlow',
    inputSchema: AnswerFAQInputSchema,
    outputSchema: AnswerFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
