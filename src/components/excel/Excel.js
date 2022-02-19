import {$} from '@core/dom'
<<<<<<< HEAD
import {Emitter} from '@core/Emitter'
=======
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
<<<<<<< HEAD
    this.emitter = new Emitter()
=======
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a
  }

  getRoot() {
    const $root = $.create('div', 'excel')

<<<<<<< HEAD
    const componentOptions = {
      emitter: this.emitter
    }

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el, componentOptions)
      // // DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
=======
    this.components = this.components.map( Component => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })
<<<<<<< HEAD

=======
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a
    return $root
  }

  render() {
    this.$el.append(this.getRoot())

    this.components.forEach(component => component.init())
<<<<<<< HEAD
  }

  destroy() {
    this.components.forEach(component => component.destroy())
=======

    console.log(this.components)
>>>>>>> 93184db2622862c58658ada7f60e51e6f613124a
  }
}
