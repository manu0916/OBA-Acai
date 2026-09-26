const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const WHATSAPP = "5535988363065";

const extras = [
  "Granola",
  "Banana",
  "Morango",
  "Leite em pó",
  "Leite condensado",
  "Paçoca",
  "Mousse de maracujá",
  "Mousse de morango",
  "Creme de avelã",
  "Creme de Ninho",
  "Ovomaltine",
  "Gotas de chocolate",
  "Sucrilhos",
  "Chantilly",
  "Bis",
  "Trento",
  "Dadinho",
];

const menu = [
  {
    id: "campanha-dia-acai",
    name: "Copo de Açaí — Dia do Açaí",
    category: "Ofertas",
    badge: "Oferta especial",
    description: "Compre 1 açaí e ganhe 2 adicionais grátis.",
    featured: true,
    symbol: "2+",
    sizes: [
      { label: "Açaí 200 ml", short: "200 ml", price: 4, original: 9 },
      { label: "Açaí 300 ml", short: "300 ml", price: 5, original: 10 },
      { label: "Açaí 400 ml", short: "400 ml", price: 6, original: 11 },
      { label: "Açaí 500 ml", short: "500 ml", price: 7, original: 12.5 },
      { label: "Açaí 700 ml", short: "700 ml", price: 10.5, original: 15.5 },
    ],
  },
  {
    id: "acai-tradicional",
    name: "Açaí tradicional",
    category: "Açaí",
    badge: "Monte do seu jeito",
    description: "Cremoso, geladinho e pronto para receber seus adicionais preferidos.",
    symbol: "O!",
    sizes: [
      { label: "Açaí 200 ml", short: "200 ml", price: 9 },
      { label: "Açaí 300 ml", short: "300 ml", price: 10 },
      { label: "Açaí 400 ml", short: "400 ml", price: 11 },
      { label: "Açaí 500 ml", short: "500 ml", price: 12 },
      { label: "Açaí 700 ml", short: "700 ml", price: 15 },
    ],
  },
  {
    id: "acai-maiores",
    name: "Açaí para compartilhar",
    category: "Açaí",
    badge: "Tamanhos maiores",
    description: "Mais OBA! para dividir com a família ou guardar só para você.",
    symbol: "1L",
    sizes: [
      { label: "Açaí 1 litro", short: "1 litro", price: 21 },
      { label: "Açaí Marmita", short: "Marmita", price: 17 },
    ],
  },
  {
    id: "acai-zero",
    name: "Açaí zero açúcar",
    category: "Zero Açúcar",
    badge: "Zero açúcar",
    description: "A versão zero açúcar, com a mesma cremosidade e liberdade para montar.",
    symbol: "0%",
    sizes: [
      { label: "Açaí Zero Açúcar 200 ml", short: "200 ml", price: 11 },
      { label: "Açaí Zero Açúcar 300 ml", short: "300 ml", price: 12 },
      { label: "Açaí Zero Açúcar 400 ml", short: "400 ml", price: 14 },
      { label: "Açaí Zero Açúcar 500 ml", short: "500 ml", price: 15 },
      { label: "Açaí Zero Açúcar 700 ml", short: "700 ml", price: 18 },
    ],
  },
  {
    id: "oba-300",
    name: "Oba 300 ml",
    category: "Combos OBA!",
    badge: "Combinação pronta",
    description: "Açaí + mousse de maracujá + paçoca + Dadinho.",
    featured: true,
    symbol: "300",
    sizes: [{ label: "Oba 300 ml", short: "300 ml", price: 13 }],
  },
  {
    id: "oba-400",
    name: "Oba 400 ml",
    category: "Combos OBA!",
    badge: "Combinação pronta",
    description: "Açaí + mousse de morango + creme de avelã + leite em pó + Bis.",
    symbol: "400",
    sizes: [{ label: "Oba 400 ml", short: "400 ml", price: 15 }],
  },
  {
    id: "oba-700",
    name: "Oba 700 ml",
    category: "Combos OBA!",
    badge: "Combinação pronta",
    description: "Açaí + mousse de maracujá + creme de Ninho + Ovomaltine + paçoca + Trento.",
    featured: true,
    symbol: "700",
    sizes: [{ label: "Oba 700 ml", short: "700 ml", price: 22 }],
  },
  {
    id: "oba-marmita",
    name: "Oba Marmita",
    category: "Combos OBA!",
    badge: "Combinação pronta",
    description: "Açaí + chantilly + leite condensado + paçoca + banana + gotas de chocolate.",
    symbol: "M",
    sizes: [{ label: "Oba Marmita", short: "Marmita", price: 25 }],
  },
  {
    id: "oba-1l",
    name: "Oba 1 L",
    category: "Combos OBA!",
    badge: "Combinação pronta",
    description: "Açaí + mousse de maracujá + leite condensado + paçoca + banana + sucrilhos + gotas de chocolate.",
    featured: true,
    symbol: "1L",
    sizes: [{ label: "Oba 1 L", short: "1 litro", price: 32 }],
  },
  {
    id: "cupuacu",
    name: "Cupuaçu",
    category: "Cupuaçu",
    badge: "Cremoso e marcante",
    description: "O sabor amazônico que combina com frutas, cremes e crocantes.",
    symbol: "C!",
    sizes: [
      { label: "Cupuaçu 200 ml", short: "200 ml", price: 9 },
      { label: "Cupuaçu 300 ml", short: "300 ml", price: 10 },
      { label: "Cupuaçu 400 ml", short: "400 ml", price: 11 },
      { label: "Cupuaçu 500 ml", short: "500 ml", price: 12 },
      { label: "Cupuaçu 700 ml", short: "700 ml", price: 16 },
    ],
  },
  {
    id: "cupuacu-maiores",
    name: "Cupuaçu para compartilhar",
    category: "Cupuaçu",
    badge: "Tamanhos maiores",
    description: "Para aproveitar o sabor do cupuaçu em porções generosas.",
    symbol: "C+",
    sizes: [
      { label: "Cupuaçu 1 litro", short: "1 litro", price: 22 },
      { label: "Cupuaçu Marmita", short: "Marmita", price: 18 },
    ],
  },
  {
    id: "coca-200",
    name: "Coca-Cola 200 ml",
    category: "Bebidas",
    badge: "Bebida",
    description: "Garrafinha de 200 ml. Consulte o valor atualizado no atendimento.",
    symbol: "C",
    consultation: true,
    sizes: [],
  },
  {
    id: "agua-500",
    name: "Água 500 ml",
    category: "Bebidas",
    badge: "Bebida",
    description: "Garrafa de 500 ml. Consulte o valor atualizado no atendimento.",
    symbol: "H₂O",
    consultation: true,
    sizes: [],
  },
];

const state = {
  category: "Todos",
  search: "",
  currentProduct: null,
  quantity: 1,
  cart: loadCart(),
};

const refs = {
  categoryTabs: document.querySelector("#categoryTabs"),
  menuGrid: document.querySelector("#menuGrid"),
  emptyState: document.querySelector("#emptyState"),
  menuSearch: document.querySelector("#menuSearch"),
  resetFilters: document.querySelector("#resetFilters"),
  modal: document.querySelector("#productModal"),
  productForm: document.querySelector("#productForm"),
  modalSymbol: document.querySelector("#modalSymbol"),
  modalCategory: document.querySelector("#modalCategory"),
  modalProductName: document.querySelector("#modalProductName"),
  modalDescription: document.querySelector("#modalDescription"),
  sizeFieldset: document.querySelector("#sizeFieldset"),
  sizeOptions: document.querySelector("#sizeOptions"),
  extrasFieldset: document.querySelector("#extrasFieldset"),
  extraOptions: document.querySelector("#extraOptions"),
  extrasHint: document.querySelector("#extrasHint"),
  productNote: document.querySelector("#productNote"),
  productQty: document.querySelector("#productQty"),
  decreaseQty: document.querySelector("#decreaseQty"),
  increaseQty: document.querySelector("#increaseQty"),
  addToCart: document.querySelector("#addToCart"),
  modalPrice: document.querySelector("#modalPrice"),
  openCart: document.querySelector("#openCart"),
  closeCart: document.querySelector("#closeCart"),
  closeEmptyCart: document.querySelector("#closeEmptyCart"),
  drawer: document.querySelector("#cartDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  cartItems: document.querySelector("#cartItems"),
  cartEmpty: document.querySelector("#cartEmpty"),
  cartSummary: document.querySelector("#cartSummary"),
  cartSubtotal: document.querySelector("#cartSubtotal"),
  cartCount: document.querySelector("#cartCount"),
  mobileCart: document.querySelector("#mobileCart"),
  mobileCartCount: document.querySelector("#mobileCartCount"),
  mobileCartTotal: document.querySelector("#mobileCartTotal"),
  checkoutButton: document.querySelector("#checkoutButton"),
  toast: document.querySelector("#toast"),
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealObserver = !prefersReducedMotion && "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px" },
    )
  : null;

function observeReveals(root = document) {
  const items = root.querySelectorAll("[data-reveal]:not(.is-visible)");
  if (!revealObserver) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  document.documentElement.classList.add("reveal-ready");
  items.forEach((item) => revealObserver.observe(item));
}

function bumpCart() {
  [refs.openCart, refs.mobileCart].forEach((button) => {
    button.classList.remove("is-bumping");
    requestAnimationFrame(() => button.classList.add("is-bumping"));
    window.setTimeout(() => button.classList.remove("is-bumping"), 560);
  });
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("oba-acai-cart") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("oba-acai-cart", JSON.stringify(state.cart));
}

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getStartingPrice(product) {
  if (product.consultation || !product.sizes.length) return null;
  return Math.min(...product.sizes.map((size) => size.price));
}

function renderCategories() {
  const categories = ["Todos", ...new Set(menu.map((product) => product.category))];
  refs.categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-tab"
          type="button"
          role="tab"
          aria-selected="${state.category === category}"
          data-category="${escapeHtml(category)}"
        >${escapeHtml(category)}</button>`,
    )
    .join("");
}

function renderMenu() {
  const term = normalize(state.search.trim());
  const filtered = menu.filter((product) => {
    const matchesCategory = state.category === "Todos" || product.category === state.category;
    const haystack = normalize(`${product.name} ${product.category} ${product.description}`);
    return matchesCategory && (!term || haystack.includes(term));
  });

  refs.menuGrid.innerHTML = filtered
    .map((product, index) => {
      const price = getStartingPrice(product);
      return `
        <article class="product-card ${product.featured ? "featured" : ""}" data-reveal style="--reveal-delay: ${Math.min(index, 5) * 55}ms">
          <span class="product-badge">${escapeHtml(product.badge)}</span>
          <h3>${escapeHtml(product.name)}</h3>
          <p>${escapeHtml(product.description)}</p>
          <footer>
            <span class="product-price">
              ${price === null ? "Sob consulta" : BRL.format(price)}
              <small>${price === null ? "fale com a OBA!" : product.sizes.length > 1 ? "a partir de" : product.sizes[0].short}</small>
            </span>
            <button type="button" data-product-id="${product.id}">
              ${product.consultation ? "Consultar" : "Escolher"}
            </button>
          </footer>
        </article>`;
    })
    .join("");

  refs.emptyState.hidden = filtered.length > 0;
  observeReveals(refs.menuGrid);
}

function setCategory(category) {
  state.category = category;
  renderCategories();
  renderMenu();
}

function openProduct(product) {
  if (product.consultation) {
    const message = `Olá! Gostaria de consultar o valor de ${product.name}.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    return;
  }

  state.currentProduct = product;
  state.quantity = 1;
  refs.productQty.textContent = "1";
  refs.modalSymbol.textContent = product.symbol;
  refs.modalCategory.textContent = product.category;
  refs.modalProductName.textContent = product.name;
  refs.modalDescription.textContent = product.description;
  refs.productNote.value = "";

  refs.sizeOptions.innerHTML = product.sizes
    .map(
      (size, index) => `
        <label class="size-option">
          <input type="radio" name="productSize" value="${index}" ${index === 0 ? "checked" : ""} />
          <span>${escapeHtml(size.short)}<small>${BRL.format(size.price)}${size.original ? ` · era ${BRL.format(size.original)}` : ""}</small></span>
        </label>`,
    )
    .join("");

  refs.extraOptions.innerHTML = extras
    .map(
      (extra, index) => `
        <label class="extra-option">
          <input type="checkbox" name="productExtra" value="${escapeHtml(extra)}" id="extra-${index}" />
          <span>${escapeHtml(extra)}</span>
        </label>`,
    )
    .join("");

  refs.extrasHint.textContent = "0 de 3 escolhidos";
  updateModalPrice();
  refs.modal.showModal();
}

function selectedSize() {
  if (!state.currentProduct) return null;
  const selected = refs.productForm.querySelector('input[name="productSize"]:checked');
  return selected ? state.currentProduct.sizes[Number(selected.value)] : state.currentProduct.sizes[0];
}

function selectedExtras() {
  return [...refs.productForm.querySelectorAll('input[name="productExtra"]:checked')].map((input) => input.value);
}

function updateModalPrice() {
  const size = selectedSize();
  if (!size) return;
  refs.modalPrice.textContent = BRL.format(size.price * state.quantity);
}

function updateExtraLimit() {
  const checked = selectedExtras();
  const limitReached = checked.length >= 3;
  refs.productForm.querySelectorAll('input[name="productExtra"]').forEach((input) => {
    input.disabled = limitReached && !input.checked;
  });
  refs.extrasHint.textContent = `${checked.length} de 3 escolhidos`;
}

function createCartItem() {
  const product = state.currentProduct;
  const size = selectedSize();
  if (!product || !size) return null;
  return {
    key: globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random()}`,
    productId: product.id,
    name: product.name,
    symbol: product.symbol,
    size: size.short,
    extras: selectedExtras(),
    note: refs.productNote.value.trim(),
    quantity: state.quantity,
    unitPrice: size.price,
  };
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  refs.cartCount.textContent = String(count);
  refs.mobileCartCount.textContent = String(count);
  refs.mobileCartTotal.textContent = BRL.format(total);
  refs.mobileCart.hidden = count === 0;
  refs.cartEmpty.hidden = count > 0;
  refs.cartSummary.hidden = count === 0;
  refs.cartSubtotal.textContent = BRL.format(total);

  refs.cartItems.innerHTML = state.cart
    .map(
      (item) => `
        <article class="cart-item">
          <span class="cart-item-symbol" aria-hidden="true">${escapeHtml(item.symbol)}</span>
          <div>
            <h3>${item.quantity}× ${escapeHtml(item.name)} · ${escapeHtml(item.size)}</h3>
            ${item.extras.length ? `<p>Com ${item.extras.map(escapeHtml).join(", ")}</p>` : ""}
            ${item.note ? `<p>Obs.: ${escapeHtml(item.note)}</p>` : ""}
            <button class="remove-item" type="button" data-remove-key="${escapeHtml(item.key)}">Remover</button>
          </div>
          <strong>${BRL.format(item.unitPrice * item.quantity)}</strong>
        </article>`,
    )
    .join("");
}

function openCart() {
  refs.drawerBackdrop.hidden = false;
  refs.drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => {
    refs.drawer.classList.add("open");
    refs.closeCart.focus();
  });
}

function closeCart() {
  refs.drawer.classList.remove("open");
  refs.drawer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  window.setTimeout(() => {
    refs.drawerBackdrop.hidden = true;
  }, 220);
}

let toastTimer;
function showToast(message) {
  window.clearTimeout(toastTimer);
  refs.toast.textContent = message;
  refs.toast.classList.add("show");
  toastTimer = window.setTimeout(() => refs.toast.classList.remove("show"), 2200);
}

function checkout() {
  if (!state.cart.length) return;
  const lines = state.cart.map((item) => {
    const details = [
      `• ${item.quantity}x ${item.name} (${item.size}) — ${BRL.format(item.unitPrice * item.quantity)}`,
      item.extras.length ? `  Adicionais: ${item.extras.join(", ")}` : "",
      item.note ? `  Observação: ${item.note}` : "",
    ].filter(Boolean);
    return details.join("\n");
  });
  const total = state.cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const message = [
    "Olá, OBA! Gostaria de fazer este pedido:",
    "",
    ...lines,
    "",
    `Subtotal: ${BRL.format(total)}`,
    "Aguardo a confirmação da taxa de entrega e do pagamento.",
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}

refs.categoryTabs.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) setCategory(button.dataset.category);
});

refs.menuGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product-id]");
  if (!button) return;
  const product = menu.find((item) => item.id === button.dataset.productId);
  if (product) openProduct(product);
});

refs.menuSearch.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderMenu();
});

refs.resetFilters.addEventListener("click", () => {
  state.search = "";
  refs.menuSearch.value = "";
  setCategory("Todos");
});

refs.productForm.addEventListener("change", (event) => {
  if (event.target.name === "productSize") updateModalPrice();
  if (event.target.name === "productExtra") updateExtraLimit();
});

refs.decreaseQty.addEventListener("click", () => {
  state.quantity = Math.max(1, state.quantity - 1);
  refs.productQty.textContent = String(state.quantity);
  updateModalPrice();
});

refs.increaseQty.addEventListener("click", () => {
  state.quantity = Math.min(20, state.quantity + 1);
  refs.productQty.textContent = String(state.quantity);
  updateModalPrice();
});

refs.productForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = createCartItem();
  if (!item) return;
  state.cart.push(item);
  saveCart();
  renderCart();
  refs.modal.close();
  showToast(`${item.name} foi para a sacola`);
  bumpCart();
});

refs.cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-key]");
  if (!button) return;
  state.cart = state.cart.filter((item) => item.key !== button.dataset.removeKey);
  saveCart();
  renderCart();
});

refs.openCart.addEventListener("click", openCart);
refs.mobileCart.addEventListener("click", openCart);
refs.closeCart.addEventListener("click", closeCart);
refs.drawerBackdrop.addEventListener("click", closeCart);
refs.closeEmptyCart.addEventListener("click", () => {
  closeCart();
  document.querySelector("#cardapio").scrollIntoView({ behavior: "smooth" });
});
refs.checkoutButton.addEventListener("click", checkout);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && refs.drawer.classList.contains("open")) closeCart();
});

renderCategories();
renderMenu();
renderCart();
observeReveals();
