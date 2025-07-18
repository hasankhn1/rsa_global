'use client'
import { OpenAI } from 'openai'
import { useState } from 'react'

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser: true });

export const generateCoverLetter = async ({
    resumeText,
    jobTitle
  }) => {
    const systemPrompt = `You are acting as cover letter generator agent. You are writing a personalized, professional cover letter to apply for the role: ${jobTitle}.
  You are given:
  - Resume: ${resumeText}
  
  Get name from resume and align experience with the role. Keep tone confident, warm, tailored. Format as a cover letter.`;
  
    const response = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt }
      ],
      model: 'gpt-4o-mini',
      temperature: 0.7
    });
  
    return response.choices[0]?.message?.content;
  };
