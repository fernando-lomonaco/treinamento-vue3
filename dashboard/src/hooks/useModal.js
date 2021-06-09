import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

export default function useModal () {
  // abrir o modal - emit de um evento com status true
  function open (payload = {}) {
    bus.emit(EVENT_NAME, { status: true, ...payload })
  }

  // fechar o modal - emit de um evento com status false
  function close (payload = {}) {
    bus.emit(EVENT_NAME, { status: false, ...payload })
  }

  // escutar por um evento, passando uma funcao
  function listen (fn) {
    bus.on(EVENT_NAME, fn)
  }

  // para de escutar o evento
  function off (fn) {
    bus.off(EVENT_NAME, fn)
  }

  return {
    open, close, listen, off
  }
}
