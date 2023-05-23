// CLONE PRACTICE

// const obj = {
//     name: 'test',
//     age: 25,
//     etc: {
//         uk: 'test',
//         countries: [
//             'test',
//             'test',
//             'test',
//             {
//                 key: 'alaki'
//             }
//         ]
//     }
// }
//
// function cloneObject(obj) {
//     if (typeof obj !== 'object' || obj === null) {
//         return obj;
//     }
//     let clone = Array.isArray(obj) ? [] : {};
//     for (let key in obj) {
//         clone[key] = cloneObject(obj[key]);
//     }
//     return clone;
// }
//
// console.log(cloneObject(obj))

// TODO LIST

window.addEventListener("load", () => {
    const form = document.querySelector(".form__input")
    const input = document.querySelector(".input__text")
    const listEl = document.querySelector(".todo__tasks")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;
        if (!task) {
            alert("dude write something !")
            return;
        }

        const innerEl = document.createElement("div");
        innerEl.classList.add("todo__inner");

        const taskEl = document.createElement("li")
        taskEl.classList.add("todo__task")

        const removeEl = document.createElement("i")
        removeEl.classList.add("todo__remove")
        removeEl.classList.add("fa-solid")
        removeEl.classList.add("fa-xmark")


        taskEl.textContent = task;

        innerEl.appendChild(taskEl)
        innerEl.appendChild(removeEl)
        listEl.appendChild(innerEl)

        input.value = "";

        removeEl.addEventListener('click', () => {
            listEl.removeChild(innerEl);
        })
    })
})