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
    },
    publicRuntimeConfig : {
        service_id : process.env.SERVICE_ID,
        template_id : process.env.TEMPLATE_ID,
        public_key : process.env.PUBLIC_KEY
    }
}