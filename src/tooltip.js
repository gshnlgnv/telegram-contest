export class Tooltip {
  constructor(el) {
    this.el = el
  }

  show({top, left}, data) {
    if (!Object.keys(data).length) {
      return
    }

    this.el.innerHTML = ''
    const {height, width} = this.el.getBoundingClientRect()
    this.el.style.display = 'block'
    this.el.style.top = `${top - height}px`
    this.el.style.left = `${left + (width / 2)}px`

    this.el.insertAdjacentHTML('afterbegin', `
      <div class="tooltip-title">${data.title}</div>
      <ul class="tooltip-list">
        ${data.items.map(item => {
          return `<li class="tooltip-list-item">
            <div class="value" style="color: ${item.color}">${item.value}</div>
            <div class="name" style="color: ${item.color}">${item.name}</div>
          </li>`  
        }).join(' ')}
      </ul>
    `)
  }

  hide() {
    this.el.style.display = 'none'
  }
}