let Button = document.querySelector(".addd")
let imp = document.querySelector(".import")
let content = document.querySelector(".content")



function handleclick() {
    let span = document.createElement("span");
    let div = document.createElement("div");
    let bt = document.createElement("button");
    let bt2 = document.createElement("button");
    let newip = document.createElement("input");
    let newbut = document.createElement("button");

    newip.type = "text";
    newbut.textContent = "Done"

    bt.textContent = "X";
    bt2.textContent = "adjust";




    div.textContent = imp.value
    div.classList.add("out")
    span.classList.add("texst")

    span.appendChild(div)
    span.appendChild(bt)
    span.appendChild(bt2)

    content.appendChild(span)


    bt.addEventListener("click", () => { content.removeChild(span) })

    bt2.addEventListener("click", () => {
        span.removeChild(div)
        span.removeChild(bt)
        span.removeChild(bt2)
        span.appendChild(newip);
        span.appendChild(newbut);
    },
        newbut.addEventListener("click", () => {

            div.textContent = newip.value

            span.removeChild(newip)
            span.removeChild(newbut)

            span.appendChild(div)
            span.appendChild(bt)
            span.appendChild(bt2)




        })







    )



}

Button.addEventListener("click", handleclick);
