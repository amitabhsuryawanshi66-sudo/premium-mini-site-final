export const getWhatsAppUrl = (message = "") => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/?text=${encodedMessage}`;
};

export const WHATSAPP_MESSAGES = {
  CONSULTATION: "Hi Obsidian Ink Studio, I want to check appointment availability for a tattoo consultation.",
  FINE_LINE: "Hi Obsidian Ink Studio, I want to ask about pricing for a fine-line/script tattoo.",
  COVER_UP: "Hi Obsidian Ink Studio, I want to ask if a cover-up is possible. I can send a photo.",
  REFERENCE: "Hi Obsidian Ink Studio, I want to share a tattoo reference and get guidance.",
  IDEA: "Hi Obsidian Ink Studio, I want to discuss a fine-line tattoo idea. I can share reference images.",
};
