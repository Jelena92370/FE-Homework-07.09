// Задача 1
const changeBtn = document.querySelector(".changeButton");
const square = document.querySelector(".square");

changeBtn.addEventListener("click", () => {

    square.style.backgroundColor = "green";     
    square.style.width = "100px";
    square.style.height = "100px";
});

// Задача 2
const btn2 = document.querySelector(".change2");
const square2 = document.querySelector(".square2");

btn2.addEventListener("click", () => {

    square2.style.backgroundColor = "blue";     
    square2.style.width = "100px";
    square2.style.height = "100px";
});

// Задача 3
const btn3 = document.querySelector(".change3");
const square3 = document.querySelector(".square3");
btn3.addEventListener("click", () => {
        
    const currentWidth = parseInt(getComputedStyle(square3).width, 10);
    const currentHeight = parseInt(getComputedStyle(square3).height, 10);

    square3.style.width = `${currentWidth + 20}px`;
    square3.style.height = `${currentHeight + 20}px`;
});

// Задача 4
const btn4 = document.querySelector(".createPrg");
btn4.addEventListener("click", () => {
    var paragraph = document.createElement("p")
    paragraph.innerText = "Я изучаю JavaSript. Ура!"
    paragraph.style.color = "blue"
    document.querySelector(".root").append(paragraph)
}
)

// Задача 5
const btn5 = document.querySelector(".createPrg2");
btn5.addEventListener("click", () => {
    var root2 = document.querySelector(".root2")
    var paragraph2 = document.createElement("p")
    paragraph2.innerText = "Я заканчиваю базовый курс. Ура!"
    paragraph2.classList.add("blue")

    var paragraphNext = document.createElement("p")
    paragraphNext.innerText = "Достижение цели все ближе!"
    paragraphNext.classList.add("green")
    root2.append(paragraph2)
    root2.append(paragraphNext)
}
)