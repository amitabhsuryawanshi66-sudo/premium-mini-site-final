export const getWhatsAppUrl = (message = "") => {
  const phone = "910000000000"; // Placeholder for studio number
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const WHATSAPP_MESSAGES = {
  CONSULTATION: "Hi Obsidian Ink, I'd like to book a consultation for a new tattoo.",
  ENQUIRY: "Hello, I have a question about your tattoo services.",
  MEMBERSHIP: "I'm interested in the Obsidian Concierge membership.",
};
