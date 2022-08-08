export default {

    css : [
        '@/assets/style/main.scss'
    ],

    modules : [
        '@nuxtjs/axios'
    ],

    buildModules : [
        '@nuxtjs/fontawesome'
    ],

    fontawesome : {
        component : 'fa',
        icons : {
            solid : true
        }
    }
}