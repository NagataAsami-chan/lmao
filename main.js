const $ = document.querySelector.bind(document)

const $$ = document.querySelectorAll.bind(document)


const tabs = $$('.tab-item')
const panes = $$('.tab-pane')

const activeTabs = $('.tab-item.active')

const line = $('.tabs .line ')

line.style.left = activeTabs.offsetLeft + 'px'
line.style.width = activeTabs.offsetWidth + 'px'

tabs.forEach((tab, index) => {
    const pane = panes[index]
    tab.onclick = function() {
        
        line.style.left = this.offsetLeft + 'px'
        line.style.width = this.offsetWidth + 'px'
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        this.classList.add('active')
        pane.classList.add('active')
    }
});

var i = 0 

document.onclick = function() {
    i++
    document.getElementById('number').innerText = i
    console.log('number added by 1!')
}