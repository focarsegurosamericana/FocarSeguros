# Progresso do site Focar Seguros

Última atualização: 17/07/2026

## Onde o site está publicado

- **Produção:** https://focar-seguros.vercel.app
- **Repositório:** https://github.com/focarsegurosamericana/FocarSeguros (branch `main`, público)
- Deploy automático: todo `git push` no `main` dispara um novo build na Vercel.
- Stack: Next.js 16 (App Router, Turbopack) + React 19 + Tailwind CSS 4.

## O que já foi feito

1. **Landing page inicial** — Header, Hero, seção de coberturas (carrossel), Sobre nós,
   Parceiros, formulário de cotação e Footer, com a identidade visual da Focar Seguros
   (navy `#061532`/`#0a2350`, azul `#135bc0`/`#1a72e0`, sky `#009fe8`).
2. **Dados de contato reais**: WhatsApp `+55 19 98207-8899`, e-mail
   `focarseguros@proton.me`, Instagram `@focar_seguros` — tudo centralizado em
   `src/lib/site-config.ts`.
3. **Logos das seguradoras parceiras**: 12 logos reais em carrossel infinito
   (`src/components/Partners.tsx`, imagens em `public/partners/`) — Suhai, Bradesco
   Seguros, Azul Seguros, Porto Seguro, Mapfre, Allianz, HDI Seguros, Itaú Seguros,
   Marítima Seguros, Tokio Marine Seguros, SulAmérica Seguros, Sompo Seguros.
4. **Página "Cotação Online"** (`/cotacao` e `/cotacao/[slug]`):
   - Inspirada no fluxo do Aggilizador (americanaseguros.aggilizador.com.br), mas com
     a identidade visual da Focar Seguros.
   - Grade com 13 tipos de seguro (Carro, Moto, Caminhão, Residencial, Empresa,
     Condomínio, Vida Individual, Vida Global, Acidentes, Viagem, Bike, Aluguel,
     Diversos), config em `src/lib/quote-types.ts`.
   - Formulário multi-etapas (`src/components/quote/QuoteWizard.tsx`): Segurado →
     Contato → dados específicos do tipo de seguro → Coberturas.
   - **Ainda não integrado com Agger/Aggilizador** (isso ficou combinado para depois,
     via webhook). Por enquanto, ao final do formulário os dados são formatados e
     enviados para o WhatsApp da Focar Seguros (mesmo padrão do formulário de
     contato da home).
5. **Header com 2 CTAs em destaque** (azul), lado a lado no desktop / empilhados no
   menu mobile:
   - **Cotação Online** → `/cotacao`
   - **Fazer cotação com consultor - WhatsApp** → abre WhatsApp direto
   - Os mesmos 2 botões foram replicados no Hero da home.
6. **Otimização mobile**:
   - Removida sobreposição entre o botão flutuante do WhatsApp e o botão final do
     formulário de cotação (o flutuante foi removido só das páginas `/cotacao/[slug]`).
   - Setas do carrossel de coberturas escondidas no mobile (colidiam com o WhatsApp
     flutuante); a navegação por swipe já funciona nativamente.
   - Descrição dos cards de seguro visível por padrão no mobile (antes dependia de
     `:hover`, que não existe em telas de toque).
   - Links do rodapé corrigidos para funcionar a partir de qualquer página (antes só
     funcionavam a partir da home).
   - Testado em viewport 390px sem overflow horizontal.

## Pendências / próximos passos conhecidos

- **Integração real com Agger/Aggilizador** via webhook no formulário de Cotação
  Online (combinado explicitamente para depois).
- **Domínio próprio** (ex: focarseguros.com.br) ainda não configurado — site está no
  domínio padrão `focar-seguros.vercel.app`.
- Vercel está no **plano Hobby (gratuito)**: se o repositório do GitHub for tornado
  privado novamente, deploys de commits de colaboradores fora do time Vercel voltam a
  ser bloqueados (só libera no plano Pro, pago). Hoje o repositório está público para
  evitar esse bloqueio.

## Notas técnicas úteis

- Config central do site (telefone, e-mail, Instagram, endereço, horário):
  `src/lib/site-config.ts`.
- Tipos de seguro da home/carrossel: `src/lib/insurance-types.ts`.
- Tipos de seguro da Cotação Online (mais completos, 13 categorias): `src/lib/quote-types.ts`.
- Paleta de cores e variáveis CSS: `src/app/globals.css`.
