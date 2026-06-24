# Briefing — Site Tasca do Dino

*Documento de trabalho · v1 · para validação interna e briefing a quem desenvolver o site*

---

## 1. Resumo do projeto

Site institucional da **Tasca do Dino**, restaurante de cozinha tradicional portuguesa nas redondezas de Marco de Canaveses, instalado numa casa centenária (1889) e em funcionamento como tasca desde 1982, hoje na segunda geração da família.

O site não é uma loja nem uma plataforma de reservas online: é uma **montra digital** que conta a história da casa, mostra a comida e o espaço, e encaminha o visitante para a ação principal — **telefonar a reservar**. A loja online fica para uma **fase 2**.

A regra de ouro do projeto: o site deve dar vontade de lá ir. Fotografia e vídeo a sério, pouca "conversa", e o telefone sempre à mão.

---

## 2. Objetivos do site

Por ordem de prioridade:

1. **Levar à reserva por telefone** — número sempre visível, com botão de chamada direta no telemóvel.
2. **Mostrar a ementa** — especialidades da casa bem apresentadas (versão escrita no código, atualizável manualmente).
3. **Dar a conhecer a história** — a casa, o Sr. Dino e a D. Amélia, a mercearia, a passagem de mercearia a tasca.

> Nota: o foco é no **espaço e na comida** (decisão tua), não em criar "personagens". A D. Amélia e o Sr. Dino entram como parte da história da casa, não como rosto de marca.

**Como medir sucesso** (proposta simples, sem ferramentas pagas):
- Cliques no botão "Ligar" (eventos no Google Analytics / GA4).
- Visitas à página de Reservas/Contactos.
- Direções pedidas e chamadas a partir do perfil Google Business.
- Crescimento de tráfego orgânico (Google) ao longo dos meses.

---

## 3. Público-alvo

Público **diversificado e sem prioridade única** — dos mais jovens aos seniores. O denominador comum não é a idade, é a **procura de uma experiência**: um espaço rústico e acolhedor, que reaviva memórias, e onde se come comida tradicional bem feita.

Para efeitos de conteúdo e tom, vale a pena ter em mente três situações de uso (não são segmentos a tratar de forma diferente, são contextos de visita):

- **Quem celebra** — famílias e grupos em almoços/jantares de fim de semana.
- **Quem descobre** — pessoas do Grande Porto e visitantes da região que chegam pelo Google e pelo passa-palavra.
- **Quem volta** — clientes locais habituais.

Implicação prática: linguagem calorosa e acessível, nada pretensiosa; informação prática (horários, contacto, como chegar) muito clara; e a história contada de forma que emocione tanto o local como quem nunca lá foi.

---

## 4. Direção criativa

### Tom de voz
Caloroso, genuíno, orgulhoso da terra. Frases curtas. Português de Portugal, sem floreados a mais. A casa "fala" como quem recebe alguém à mesa — não como uma brochura de marketing.

### Referências fornecidas
- **Restaurante Pena** → o que retiramos: imagens em ecrã inteiro, paleta quente e terrosa, sensação de quinta portuguesa, navegação visual.
- **Belcanto** → o que retiramos: elegância e limpeza, **navegação por scroll** com secções bem definidas, **vídeo em destaque** no topo, muito espaço em branco, tipografia com personalidade.

### Síntese para a Tasca do Dino
**Rústico com toque contemporâneo e limpo.** Na prática:
- Topo (hero) com **vídeo do espaço** ou fotografia forte em ecrã inteiro.
- Paleta quente e natural: tons de madeira, terracota/tijolo, creme, verde-azeitona, com um neutro escuro para texto. (A afinar com base no logótipo.)
- Tipografia: um título com carácter (serifada, com alma de tasca antiga) + um corpo de texto limpo e muito legível.
- Muito espaço em branco a "respirar" entre secções, ao estilo Belcanto, mas com a alma quente do Pena.
- Fotografia e vídeo como protagonistas — texto sempre ao serviço da imagem.

### Ativos de marca
- **Logótipo:** já existe (a fornecer em vetor — SVG/PDF — se possível).
- **Fotografia e vídeo:** existe acervo abundante e com qualidade, tirado no espaço. **Este é o grande trunfo do site.** A definir uma seleção das melhores imagens por secção.

---

## 5. Arquitetura de informação (mapa do site)

Site de **4 páginas**, conforme definido:

```
Início
├── A Nossa História
├── Ementa
└── Reservas / Contactos
```

Navegação no topo em todas as páginas, com o **logótipo** à esquerda e um botão de destaque **"Reservar"** (que faz scroll/leva ao telefone) sempre visível.

> Possível abordagem alternativa, à Belcanto: site em **página única com scroll** (Início → História → Ementa → Reservas), com o menu a saltar para cada secção. Fica a decidir com quem desenvolver — funciona muito bem em restaurantes e é excelente no telemóvel. Mantemos na mesma as 4 áreas, só muda se são páginas separadas ou secções da mesma página.

---

## 6. Conteúdo página a página

### 6.1 Início (Homepage)
Objetivo: causar impacto em 3 segundos e empurrar para a reserva.
- **Hero:** vídeo ou foto em ecrã inteiro + nome + uma frase-assinatura (ex.: *"Sabores e memórias desde 1982, numa casa com história desde 1889."*) + botão **Reservar**.
- **Bloco história (teaser):** 2-3 frases + foto da casa/mercearia + link "A nossa história".
- **Especialidades em destaque:** 4 a 5 pratos-ícone com foto (Pataniscas da D. Amélia, Anho no Forno, Cabidela, Galo Assado, Leite Creme) + link "Ver ementa".
- **A mercearia:** pequeno bloco a explicar que dentro do espaço vive ainda uma mercearia tradicional (diferenciador forte).
- **Prova social:** uma ou duas frases de clientes / referência ao passa-palavra (e, se possível, avaliações Google).
- **Informação prática:** horário, morada com mapa, telefone com botão de chamada.
- **Rodapé:** contactos, horário, redes sociais, mapa, "como chegar".

### 6.2 A Nossa História
Objetivo: emocionar e dar profundidade à marca.
- A casa centenária (1889, António Ferraz Conde) e o seu papel como mercearia / coração comercial da freguesia.
- 1982 — Sr. Dino e D. Amélia; o negócio dos cereais (milho e centeio) para as padarias do Grande Porto e a transição gradual para a taberna.
- A D. Amélia na cozinha, então e hoje.
- A mercearia tradicional que ainda hoje vive dentro do espaço.
- A segunda geração e o compromisso de honrar o legado.
- **Formato sugerido:** narrativa por scroll, alternando texto curto com fotografias (incluindo fotos antigas, se existirem) — tipo "linha do tempo" visual.

### 6.3 Ementa
Objetivo: dar água na boca e informar.
- Conteúdo **escrito no código** (hardcoded), organizado por secções (Entradas / Petiscos · Pratos principais · Sobremesas · Bebidas/Vinhos, conforme fizer sentido).
- Especialidades da casa com **fotografia própria** — pelo menos os pratos-ícone.
- Decisão pendente: **com ou sem preços?** (ver secção 11).
- Nota visível: ementa sujeita a alterações sazonais; reservas por telefone.
- *Fase 2:* tornar a ementa editável sem mexer no código.

### 6.4 Reservas / Contactos
Objetivo: converter. Página utilitária mas bem feita.
- **"Reservas apenas por telefone"** — afirmação clara + número grande com botão **Ligar**.
- Horário completo (ver secção 7).
- Morada + **mapa Google** integrado + botão "Como chegar".
- Formas de pagamento: dinheiro e **TPA virtual com pagamento por QR Code** (não há multibanco físico — convém dizê-lo para gerir expectativas).
- Redes sociais e link para o perfil Google.
- *Sem formulários e sem WhatsApp*, por decisão tua.

---

## 7. Dados oficiais a usar no site

**Horário de funcionamento**
- Domingo: encerrado
- Segunda: 12:30–16:00
- Terça, Quarta, Quinta: 12:30–17:00 e 19:00–23:00
- Sexta e Sábado: 12:30–17:00 e 19:00–00:00

**Reservas:** apenas por telefone.
**Pagamentos:** dinheiro e TPA virtual (QR Code). Sem multibanco físico.
**Localização:** redondezas de Marco de Canaveses *(morada exata a confirmar para o mapa).*

---

## 8. Funcionalidades e requisitos técnicos

- **Responsivo** (prioridade ao telemóvel — é onde a maioria vai abrir o site).
- **Botão de chamada** (`tel:`) com clique direto no telemóvel.
- **Mapa Google** incorporado.
- **Otimização de vídeo e imagem** para carregar rápido (o site é pesado em media — fundamental comprimir bem).
- **Multilíngue?** A decidir — dado que recebem visitantes de fora, uma versão **EN** pode valer a pena (pelo menos Início + Ementa). Fica como opção, não obrigatório no arranque.
- **GA4** + **Google Search Console** instalados desde o início.
- **Cookies / Política de Privacidade** e link para o **Livro de Reclamações eletrónico** (obrigatório em Portugal).
- **Alojamento:** já existe. **Domínio:** a definir (sugestão: `tascadodino.pt`).
- **Preparado para a fase 2** (loja online) sem precisar de refazer o site.

---

## 9. SEO local (alinhado com o passa-palavra e o Google)

O Google e o passa-palavra já são os teus maiores canais — o site deve reforçar isso.

- **Google Business Profile:** otimizar e manter (horário certo, fotos novas, responder a avaliações, categoria "Restaurante português / Cozinha tradicional"). É, provavelmente, o investimento de maior retorno.
- **Palavras-chave a trabalhar** (a confirmar/expandir):
  - "restaurante comida tradicional Marco de Canaveses"
  - "tasca típica perto do Porto / Marco de Canaveses"
  - "anho no forno", "cabidela", "leite creme" + zona
  - "onde comer comida regional Marco de Canaveses"
- **Boas práticas no site:** títulos e descrições por página, texto real (não só imagens), nomes de ficheiros e *alt text* descritivos nas fotos, dados estruturados de "Restaurant" (horário, morada, menu) para o Google.

---

## 10. Fotografia e vídeo

O acervo existente é o ativo principal. Sugestão de organização do que selecionar:
- **Vídeo de topo:** 15–30s do espaço (ambiente, mercearia, pratos a sair, detalhes da casa antiga). Sem som ou com som ambiente.
- **Pratos-ícone:** 1 foto forte por especialidade.
- **Espaço:** sala, mercearia, detalhes (madeira, pedra, objetos antigos).
- **Pessoas/ambiente:** mesas, hospitalidade, a D. Amélia na cozinha (se confortável).
- **Fotos antigas:** se existirem, valem ouro na página da História.

---

## 11. Pontos em aberto (para fechar antes de avançar)

1. **Página única (scroll) vs. 4 páginas separadas** — qual preferes?
2. **Ementa com ou sem preços?**
3. **Nome oficial da marca:** "Tasca Dino" ou "Tasca do Dino"? (Aparecem as duas versões — convém fixar uma para todo o lado.)
4. **Datas e factos:** confirmar que **1889 = construção da casa** e **1982 = fundação da tasca**, e o nome completo do fundador (surge "Dino Miranda" e "Dino Miranda Teixeira Gomes").
5. **Morada exata** para o mapa.
6. **Versão em inglês** — sim ou não no arranque?
7. **Domínio** a registar.

---

## 12. Fase 2 — Loja online (registo, não para já)

Produtos previstos: vinhos, biscoitos regionais, compotas, artesanato (tábuas personalizadas, quebra-nozes, cerâmicas) e licores regionais.
A planear na fase 2: nº de referências, fotografia de produto, envios (transportadora / levantamento na tasca), e cuidados legais com **álcool** (vinhos e licores: idade mínima, transporte de vidro). O site deve nascer já preparado para receber esta loja sem reconstrução.

---

## 13. Próximos passos

1. Validares este briefing e fechares os **pontos em aberto** (secção 11).
2. Avançarmos para a **estrutura final** (wireframe das páginas/secções).
3. Escrevermos o **conteúdo página a página** (textos prontos a colar).
4. Seleção de **fotografias e vídeo** por secção.
5. Briefing entregue a quem desenvolve / escolha de ferramenta.
