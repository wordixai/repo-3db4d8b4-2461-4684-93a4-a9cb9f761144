import React from 'react';

interface SyntaxHighlighterProps {
  language: string;
  theme: 'dark' | 'light';
  highlightLines?: number[];
}

export const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  language,
  theme,
  highlightLines = [],
}) => {
  // This is a simplified syntax highlighter
  // In a real implementation, you might use Prism.js or similar
  const keywords = ['function', 'const', 'let', 'var', 'return', 'if', 'else', 'for', 'while'];
  const strings = ['"', "'", '`'];
  const comments = ['//'];
  
  const highlightSyntax = (text: string) => {
    let highlighted = text;
    
    // Highlight keywords
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      highlighted = highlighted.replace(regex, `<span style="color: ${theme === 'dark' ? '#ff7b72' : '#d73a49'}">${keyword}</span>`);
    });
    
    // Highlight strings
    highlighted = highlighted.replace(
      /(["'`].*?["'`])/g,
      `<span style="color: ${theme === 'dark' ? '#a5d6ff' : '#032f62'}">$1</span>`
    );
    
    // Highlight comments
    highlighted = highlighted.replace(
      /(\/\/.*$)/gm,
      `<span style="color: ${theme === 'dark' ? '#8b949e' : '#6a737d'}">$1</span>`
    );
    
    return highlighted;
  };

  return null; // This component is used as a child renderer
};