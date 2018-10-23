
import Warning from './warning'

const ModalWarning = {
    install (Vue, options) {
        Vue.component('warning', Warning)
    }
}

export default ModalWarning;