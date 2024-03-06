const block = document.querySelectorAll('.block')

block.forEach(el => {
    el.addEventListener("click", () => {
        el.classList.add("bg-info")
    })
})


