# Tasca do Dino — Contexto do Projeto

## O que é este projeto

Site institucional do **Tasca do Dino**, restaurante de cozinha tradicional portuguesa em Marco de Canaveses, numa casa centenária (1889), tasca desde 1982, hoje na segunda geração da família.

O site é uma **montra digital** — não é loja nem plataforma de reservas. O objetivo principal é levar o visitante a **telefonar e reservar**. Loja online é fase 2 (fora de escopo agora).

Documentos de referência completos (briefing + copy da homepage) estão em `/docs` na raiz do projeto — **sempre consultar antes de escrever copy ou criar uma seção nova**. Não inventar texto: usar o copy já definido nesses documentos.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion (animações: scroll reveal, fade, parallax leve)
- Magic UI e React Bits (componentes estilizados/animados prontos — usar como base, adaptar à paleta do projeto)
- npm como package manager

## Estrutura de páginas (4 páginas, App Router)

```
app/
  page.tsx              → Início
  historia/page.tsx     → A Nossa História
  ementa/page.tsx       → Ementa
  contacto/page.tsx     → Contacto / Reservas
  not-found.tsx         → 404
```

## Convenções de código

- Componentes funcionais, TypeScript estrito (sem `any`).
- Nome de componente em PascalCase, arquivo igual ao componente (`Hero.tsx` exporta `Hero`).
- Estilização **somente** com classes Tailwind. Não criar CSS solto a menos que seja pedido.
- Usar componentes shadcn/ui quando fizer sentido (botões, inputs) em vez de criar do zero.
- Estrutura de componentes (a criar conforme as peças forem sendo desenvolvidas):
  ```
  components/
    ui/            → componentes shadcn/ui (gerados pelo shadcn CLI) + peças próprias do projeto
                       (PratoCard, CtaButton, BadgeHorario, TestemunhoCard, etc.)
    layout/        → Navbar, Footer
  ```
  Não criar `components/sections/` — seções não são componentes, são composições montadas direto na page (ver regra de granularidade abaixo).
- Imagens: usar `next/image` sempre, nunca `<img>` puro.
- Links de chamada: usar `<a href="tel:...">`, nunca JS para isso.

## Granularidade de componentização (regra importante)

**Componentizar pelas peças, nunca pela seção inteira.** Uma seção da página (ex: "À mesa na Tasca do Dino", "Visitar-nos") **não deve ser um único componente monolítico** do tipo `<GaleriaPratos />` que esconde tudo dentro de si. Em vez disso, quebrar em peças pequenas e reutilizáveis — card, botão/CTA, badge, tag, item de horário, etc. — e montar a composição final **diretamente dentro da page** (ou de um componente de seção bem fino, se necessário, mas que não escapa o conteúdo, recebe via children/props).

Exemplo do padrão esperado, para uma seção com cards repetidos:

```tsx
// components/ui/PratoCard.tsx
export function PratoCard({ imagem, nome }: PratoCardProps) { ... }

// components/ui/CtaButton.tsx
export function CtaButton({ href, children }: CtaButtonProps) { ... }

// app/page.tsx (a composição da seção vive aqui, não escondida num componente "seção")
<section>
  <h2>À mesa na Tasca do Dino</h2>
  <div className="grid ...">
    <PratoCard imagem="..." nome="Pataniscas da Dona Amélia" />
    <PratoCard imagem="..." nome="Anho no Forno" />
    {/* ... */}
  </div>
  <CtaButton href="/ementa">Ver ementa completa</CtaButton>
</section>
```

Isso vale para qualquer padrão repetido: se uma seção tem dois ou mais elementos parecidos (cards, depoimentos, itens de horário, badges), cada peça vira seu próprio componente em `components/ui/`, e a page é responsável por orquestrar a disposição. O objetivo é máxima reutilização das peças entre páginas/seções diferentes, e total visibilidade da estrutura quando se olha a page — nada de abrir um componente de seção pra entender o que está sendo renderizado.

## Direção visual (definida — ver logo e referências)

**Paleta:** preto e branco como base (fundo claro/escuro alternando entre seções, como Osteria Francescana). Creme/castanho/bege apenas em detalhes pontuais — ícones, divisores, hover, pequenos acentos. Nunca usar cores saturadas/quentes em excesso; a "cor" do site é o preto, o branco e a fotografia em si.

**Tipografia (definida):**
- **Título/display:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (Google Fonts, variable, grátis). Tem o caráter old-style com peso forte que conversa com a serifa quadrada do "D" do logo. Usar pesos altos (600–900) para hero e títulos de seção; pode usar o eixo `opsz` (optical size) alto para títulos grandes.
- **Corpo de texto:** [Inter](https://fonts.google.com/specimen/Inter) ou [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) (ambas grátis, leves, muito legíveis em qualquer tamanho de tela).
- Carregar ambas via `next/font/google` (não via `<link>` ou CDN externo) para otimização automática de performance e zero layout shift.

**Logo:** selo circular preto — "TASCA DINO" no arco superior, "DESDE 1982" no arco inferior, "D" serifado centralizado. Usar como está; não recriar.

**Referências de layout/estética (por ordem de peso):**
- **Ballena** (ballenacabo.com) — referência principal de hero e tom: vídeo full-bleed no topo, frase poética curta sobreposta, blocos alternando texto curto + imagem grande, muito espaço em branco, navegação minimalista. É a referência mais próxima do tom que queremos para o hero e para os blocos de transição (história, mercearia).
- **Osteria Francescana** (osteriafrancescana.it) — referência de galeria/seção "À mesa": mosaicos assimétricos de fotos, fundo claro e escuro intercalando entre seções, texto editorial e contido, zero "cara de venda".
- **The Cheesecake Factory** (thecheesecakefactory.com) — referência **apenas de funcionalidade**, não de estética: como estruturar blocos de prato em destaque com CTA claro (ex.: "Ver ementa completa", foto + nome + ação). Ignorar completamente a paleta colorida e o tom comercial desse site.

**Princípio geral:** fotografia e vídeo são protagonistas — texto sempre a serviço da imagem, nunca o contrário. Hero forte e poético (tom Ballena), galeria contida e editorial (tom Osteria Francescana), estrutura de blocos funcional onde precisar de CTA (lógica do Cheesecake Factory, sem a estética dele).

## Regras importantes

- **Não criar conteúdo/copy novo.** Sempre usar o texto definido nos documentos em `/docs`. Se faltar copy para algo, perguntar em vez de inventar.
- **Não decidir pontos em aberto do briefing** (ex: preços na ementa, morada exata) — esses pontos devem ser perguntados ao usuário, nunca assumidos.
- **Nome oficial:** o logo usa "TASCA DINO" (sem "do"). O briefing usa "Tasca do Dino" em todo o texto. Confirmar com o cliente qual prevalece antes de fechar o copy final — por ora, usar "Tasca do Dino" no copy corrido (como está nos documentos) e "TASCA DINO" apenas onde o logo aparece.
- Site não tem formulários nem WhatsApp — reserva é só por telefone.
- Multilíngue (EN) é opcional e não obrigatório no lançamento — não implementar a menos que pedido explicitamente.
- **Mobile-first, sem exceção.** O site precisa ser tão impressionante no mobile quanto no desktop — não é "desktop adaptado pra caber na tela pequena". Toda seção deve ser desenhada e construída primeiro pensando no mobile (breakpoint base do Tailwind, sem prefixo) e só depois expandida para tablet/desktop (`sm:`, `md:`, `lg:`, `xl:`). Isso vale tanto para layout quanto para tipografia, espaçamento, vídeo/imagem e animações Framer Motion (testar performance em mobile antes de assumir que está OK). Nenhuma seção é considerada terminada sem validar nos dois extremos.

## Como investigar problemas reportados

Quando o usuário relatar um bug, erro ou comportamento inesperado, a prioridade é **diagnosticar a causa raiz antes de propor qualquer correção**. Não seguir direto para tentativas de solução genéricas — isso gasta tempo e tokens sem necessidade e pode mascarar o problema real.

Passos obrigatórios antes de editar qualquer código:
1. Reproduzir ou entender exatamente o problema (ler o componente/arquivo relevante, ver o erro completo no terminal/console, checar se há mensagem de erro específica).
2. Formular uma hipótese concreta sobre a causa, baseada no que foi observado — não em suposições genéricas ("deve ser cache", "tenta reinstalar node_modules") sem evidência.
3. Validar a hipótese (ler o código relevante, checar configuração, conferir versão de lib, etc.) antes de aplicar qualquer mudança.
4. Só então propor a correção, explicando qual era a causa raiz.

Evitar: sugerir múltiplas soluções "pra ver se uma funciona", reinstalar dependências sem motivo identificado, ou alterar código sem antes confirmar que aquele é realmente o ponto do problema. Se a causa não for clara após investigação, é preferível dizer isso e pedir mais informação (print do erro, passos exatos) do que tentar adivinhar.