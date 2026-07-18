// Dados centrais do site. Trocar os valores marcados como PLACEHOLDER
// assim que tivermos as informações reais da Focar Seguros.

export const siteConfig = {
  name: "Focar Seguros",
  city: "Americana",
  state: "SP",
  whatsappNumber: "5519982078899",
  whatsappMessage:
    "Olá! Vim pelo site e quero fazer uma cotação de seguro.",
  email: "focarseguros@proton.me",
  // PLACEHOLDER — trocar pelo endereço real
  address: "Americana, SP",
  // PLACEHOLDER — trocar pelo horário real
  hours: "Seg. a Sex., 8h às 18h",
  instagram: "https://www.instagram.com/focar_seguros/",
};

export const whatsappHref = (message = siteConfig.whatsappMessage) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
