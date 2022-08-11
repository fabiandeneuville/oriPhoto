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
        service_id : "service_f0q93tf",
        template_id : "template_p2ec4cg",
        public_key : "bc-xR8C_vR-ZHqOFM"
    }
}