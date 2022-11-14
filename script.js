const panels = document.querySelectorAll('.panel')


panels.forEach((panel) => {
    panel.addEventListener("click", swapActivePanel)
})

function swapActivePanel() {
    clearActivePanels()
    let card = document.querySelector(`#${this.id}`)
    activatePanel(card)
}

function clearActivePanels() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

function activatePanel(card) {
    card.classList.add('active')
}
