const livro1 = {
titulo: "Clean Code",
autor: "Robert C. Martin",
preco: 89.9,
estoque: 12,
};
// ===== LIVRO 2 — TROQUE os quatro valores abaixo =====
const livro2 = {
titulo: "Para todos os garotos q ja amei",
autor: "Jenny Han",
preco: 79.99,
estoque: 6,
};

const livro3 = {
titulo: "O pequeno principe",
autor: "Antoine de Saint-Exupery",
preco: 90.9,
estoque: 4,
};
// Esta linha entrega os dois livros para os outros arquivos usarem
module.exports = { livro1, livro2, livro3 };
