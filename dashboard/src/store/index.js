import { readonly } from 'vue'
import UserModule from './user'
import GlobalModule from './global'

// leitura do estado (State) sem alteracao
// se quiser alterar, usa as function do user.js
export default readonly({
  User: UserModule,
  Global: GlobalModule
})

// export default {
//   isso faz com que possamos modificar os valores do User
//   User: UserModule

// }
