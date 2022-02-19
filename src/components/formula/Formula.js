import {ExcelComponent} from '@core/ExcelComponent'
<<<<<<< HEAD
import {$} from '@core/dom'
=======
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

<<<<<<< HEAD
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'keydown'],
      ...options
=======
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input'],
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a
    })
  }

  toHTML() {
<<<<<<< HEAD
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>
    `
  }

  init() {
    super.init()

    this.$formula = this.$root.find('#formula')

    this.$on('table:select', $cell => {
      this.$formula.text($cell.text())
    })

    this.$on('table:input', $cell => {
      this.$formula.text($cell.text())
    })
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text())
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab']
    if (keys.includes(event.key)) {
      event.preventDefault()
      this.$emit('formula:done')
    }
=======
    return `<div class="info">fx</div>
      <div class="input" contenteditable spellcheck="false"></div>`
  }

  onInput(event) {
    console.log('Formula: OnInput', event)
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a
  }
}
