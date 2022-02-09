window.books = [
  {
    title: "PROLOG Programming for Artificial Intelligence",
    authors: ["Ivan Bratko"],
    description:
      "Prolog has its roots in logic; however the main aim of this book is to teach Prolog as a practical programming tool.",
    price: 89.29,
    rating: 4.5,
    quantity: 1,
  },
  {
    title: "Elements of the Theory of Computation",
    authors: ["Harry Lewis", "Christos H. Papadimitriou"],
    description:
      "Algorithms, complexity analysis, and algorithmic ideas are introduced informally in Chapter 1, and are pursued throughout the book.",
    price: 182.65,
    rating: 4.7,
    quantity: 2,
  },
  {
    title: "The Silmarillion",
    authors: ["J.R.R. Tolkien"],
    description:
      "THE SILMARILLION is the core of J.R.R. Tolkien's imaginative writing, a work whose origins stretch back to a time long before THE HOBBIT.",
    price: 14.85,
    rating: 5,
    quantity: 1,
  },
  {
    title: "An Introduction to the Analysis of Algorithms",
    authors: ["Sedgewick Robert", "Flajolet Philippe"],
    description: "Methods and models for mathematically analyzing algorithms.",
    price: 51.19,
    rating: 4.2,
    quantity: 10,
  },
  {
    title: "The Art of Computer Programming, Volumes 1-4",
    authors: ["Donald E. Knuth"],
    description:
      "The bible of all fundamental algorithms and the work that taught many of today’s software developers most of what they know about computer programming.",
    price: 189.98,
    rating: 5,
    quantity: 2,
  },
];

function renderBook(book) {
  const { title, authors, description, price, rating, quantity } = book;
  const content = `
    <div class="book">
      <div class="details">
        <div class="title">
          ${title}
          <span class="rating">(${rating} stars)</span>
        </div>
        <div class="authors">ny ${authors}</div>
        <div class="description">
          ${description}
        </div>
        <button class="removeBtn">Remove from cart</button>
      </div>
      <div class="quantity">${quantity}</div>
      <div class="price">$${price}</div>
    </div>
  `;
  return content;
}

function calculateTotal() {
  if (books.length == 0) return 0;
  let total = 0.0;
  books.forEach((book) => {
    const { price, quantity } = book;
    total += price * quantity;
  });
  return total;
}

function render() {
  const cart = document.querySelector("#cartItems");
  if (books.length == 0) cart.innerText = "Nothing in cart";
  else {
    const content = books.map(renderBook).join(" ");
    cart.innerHTML = content;
  }
  const totalPrice = document.querySelector(".total-price");
  totalPrice.innerText = `$${calculateTotal()}`;
}

function sortByPrice() {
  const cart = document.querySelector("#cartItems");
  cart.InnerHTML = "";
  books.sort((bookA, bookB) => bookA.price - bookB.price);
  render();
}

function main() {
  render();
  const sortButton = document.querySelector("#sortBtn");
  sortButton.addEventListener("click", sortByPrice);
}

window.addEventListener("DOMContentLoaded", main);

window.render = render;
window.calculateTotal = calculateTotal;
window.sortByPrice = sortByPrice;