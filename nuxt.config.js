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
        contact_template_id : process.env.CONTACT_TEMPLATE_ID,
        order_template_id : process.env.ORDER_TEMPLATE_ID,
        public_key : process.env.PUBLIC_KEY
    }
}