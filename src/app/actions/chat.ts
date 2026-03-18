'use server';

import { answerFAQ } from '@/ai/flows/answer-faq';
import { faqs } from '@/lib/faq';

function findFaqAnswer(question: string): string | null {
  const lowerCaseQuestion = question.toLowerCase();
  for (const faq of faqs) {
    if (faq.keywords.some(keyword => lowerCaseQuestion.includes(keyword))) {
      return faq.answer;
    }
  }
  return null;
}

export async function getFaqAnswerAction(question: string, name: string, language: string): Promise<{ answer?: string; error?: string }> {
  if (!question || question.trim().length === 0) {
    return { error: 'Question cannot be empty.' };
  }
  
  const lowerCaseQuestion = question.toLowerCase();

  const isHindi = language === 'Hindi';

  if (lowerCaseQuestion.includes('schedule a demo') || lowerCaseQuestion.includes('schedule consultation')) {
      return { answer: isHindi ? "मैं इसमें निश्चित रूप से मदद कर सकती हूँ! हमारी टीम का एक सदस्य आपसे दिए गए ईमेल पर संपर्क करेगा ताकि आपके लिए सबसे अच्छा समय मिल सके।" : "I can certainly help with that! A team member will reach out to you at the email you provided to find a time that works best." };
  }

  if (lowerCaseQuestion.includes('human agent') || lowerCaseQuestion.includes('talk to a human')) {
      return { answer: isHindi ? "मैं समझ गई। मैं आपको अब एक मानव एजेंट से जोड़ रही हूँ। कृपया एक क्षण प्रतीक्षा करें जब तक मैं आपको कनेक्ट करती हूँ।" : "I understand. I am transferring you to a human agent now. Please wait a moment while I connect you." };
  }

  try {
    const result = await answerFAQ({ question, faqs, name, language });
    return { answer: result.answer };
  } catch (error) {
    console.error('AI Error:', error);
    return { error: isHindi ? 'क्षमा करें, आपके अनुरोध को संसाधित करते समय मुझे एक समस्या का सामना करना पड़ा। सहायता के लिए मैं आपको एक मानव एजेंट के पास भेज रही हूँ।' : 'Sorry, I encountered an issue while processing your request. I\'m transferring you to a human agent for assistance.' };
  }
}
