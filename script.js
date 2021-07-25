const header = document.querySelector('h1')
const input = document.querySelector('input')
const Main = document.createElement('div')
const Todo = document.createElement('div')
const Mark = document.createElement('div')
const bt = document.querySelector('button')
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if (input.value == "") alert("Task cannot be empty")
        else {
            const Task = document.createElement('div')
            const text = document.createElement('span')
            text.innerHTML = input.value
    
            const Delbt = document.createElement('button')
            Delbt.innerText = 'Delete'
            Delbt.style.visibility = "hidden"
            Delbt.addEventListener('click', () => {
                Task.remove()
            })
            Task.addEventListener('mouseout', () => { Delbt.style.visibility = "hidden" })
            Task.addEventListener('mouseover', () => { Delbt.style.visibility = "visible" })
    
            const Donebt = document.createElement('button')
            Donebt.innerText = 'Done'
            Donebt.style.visibility = "hidden"
            Donebt.addEventListener('click', () => {
                const ntext = document.createElement('span')
                ntext.innerHTML = text.innerHTML + " <br> "
                ntext.style.textDecoration = "line-through"
                Todo.removeChild(Task)
                Mark.prepend(ntext)
            })
            Task.addEventListener('mouseout', () => { Donebt.style.visibility = "hidden" })
            Task.addEventListener('mouseover', () => { Donebt.style.visibility = "visible" })
    
            Task.append(text)
            Task.append(Donebt)
            Task.append(Delbt)
            Todo.prepend(Task)
        }   
    }
})
bt.addEventListener('click', () => {
    if (input.value == "") alert("Task cannot be empty")
    else {
        const Task = document.createElement('div')
        const text = document.createElement('span')
        text.innerHTML = input.value

        const Delbt = document.createElement('button')
        Delbt.innerText = 'Delete'
        Delbt.style.visibility = "hidden"
        Delbt.addEventListener('click', () => {
            Task.remove()
        })
        Task.addEventListener('mouseout', () => { Delbt.style.visibility = "hidden" })
        Task.addEventListener('mouseover', () => { Delbt.style.visibility = "visible" })

        const Donebt = document.createElement('button')
        Donebt.innerText = 'Done'
        Donebt.style.visibility = "hidden"
        Donebt.addEventListener('click', () => {
            const ntext = document.createElement('span')
            ntext.innerHTML = text.innerHTML + " <br> "
            ntext.style.textDecoration = "line-through"
            Todo.removeChild(Task)
            Mark.prepend(ntext)
        })
        Task.addEventListener('mouseout', () => { Donebt.style.visibility = "hidden" })
        Task.addEventListener('mouseover', () => { Donebt.style.visibility = "visible" })

        Task.append(text)
        Task.append(Donebt)
        Task.append(Delbt)
        Todo.prepend(Task)
    }
})

Main.append(Todo)
Main.append(Mark)
document.body.append(input)
document.body.append(bt)
document.body.append(Main)