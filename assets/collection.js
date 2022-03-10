// open filters

document.getElementById("filter_color").onclick = function () { color() };
function color() {
    document.getElementById("content_color").classList.toggle("show");
}

document.getElementById("filter_price").onclick = function () { price() };
function price() {
    document.getElementById("content_price").classList.toggle("show");
}

document.getElementById("filter_availability").onclick = function () { availability() };
function availability() {
    document.getElementById("content_availability").classList.toggle("show");
}

//   select filters

const filters = document.querySelector("#filters");

filters.addEventListener("input", filterGoods);

function filterGoods() {
    stock = [...filters.querySelectorAll("#content_availability input:checked")].map(
      (n) => n.value
    ),
    colors = [...filters.querySelectorAll("#content_color input:checked")].map(
      (n) => n.value
    ),
    priceMin = document.querySelector("#price-min").value,
    priceMax = document.querySelector("#price-max").value;

  outputGoods(
    DATA.filter(
      (n) =>
        (!stock.length || stock.includes(n.stock)) &&
        (!colors.length || colors.includes(n.color)) &&
        (!priceMin || priceMin <= n.price) &&
        (!priceMax || priceMax >= n.price)
    )
  );
}


outputGoods(DATA);


// sort price
(function () {

    let field = document.querySelector('.items');
    let li = Array.from(field.children);



    function SortProduct() {
      let select = document.getElementsByClassName('selected');
      let ar = [];
      for (let i of li) {
        const last = i.lastElementChild.lastElementChild.lastElementChild.lastElementChild;
        const x = last.textContent.trim();
        const y = Number(x.substring(1));
        i.setAttribute("data-price", y);
        ar.push(i);
      }

      this.run = () => {
        addevent();
      }
      function addevent() {
        select.onchange = sortingValue;
      }
      function sortingValue() {

        if (this.value === 'Default') {
          while (field.firstChild) { field.removeChild(field.firstChild); }
          field.append(...ar);
        }
        if (this.value === 'LowToHigh') {
          SortElem(field, li, true)
        }
        if (this.value === 'HighToLow') {
          SortElem(field, li, false)
        }
      }
      function SortElem(field, li, asc) {
        let dm, sortli;
        dm = asc ? 1 : -1;
        sortli = li.sort((a, b) => {
          const ax = a.getAttribute('data-price');
          const bx = b.getAttribute('data-price');
          return ax > bx ? (1 * dm) : (-1 * dm);
        });
        while (field.firstChild) { field.removeChild(field.firstChild); }
        field.append(...sortli);
      }
    }

    new SortProduct().run();
  })();
