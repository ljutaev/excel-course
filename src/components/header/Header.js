import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel__header'
<<<<<<< HEAD

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options,
    })
  }

  toHTML() {
    return `
      <input type="text" class="input" value="Новая таблица" />
=======
  toHTML() {
    return `<input type="text" class="input" value="Новая таблица" />
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a

      <div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>

<<<<<<< HEAD
      </div>
    `
=======
      </div>`
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a
  }
}
