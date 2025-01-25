let Button = document.querySelector(".addd")
let imp = document.querySelector(".import")
let content = document.querySelector(".content")



function handleclick() {
    let span = document.createElement("span");
    let div = document.createElement("div");
    let bt = document.createElement("button");
    let bt2 = document.createElement("button");

    bt.textContent = "X";
    bt2.textContent = "adjust";
    div.textContent = imp.value
    div.classList.add("out")
    span.classList.add("texst")

    span.appendChild(div)
    span.appendChild(bt)
    span.appendChild(bt2)

    content.appendChild(span)





}

Button.addEventListener("click", handleclick);

/*<span class="texst">
    <div class="out">TEXT</div><button>X</button><button>adjust</button>
</span>*/