import Warning from '@/components/modal_warning'
const ModalWarning = {
    install (Vue, options) {
        Vue.component('warning', Warning)
    }
}
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    ModalWarning(window.Vue)
}

export default ModalWarning
