
const DbMixin = require("../mixins/db.mixin");

//named exports
module.exports = {

    // property : value
    name:"teacher",

    mixins: [DbMixin("teacher")],


    settings:{
        fields: [
			"name"
                ]

    },

    dependencies:[],

    actions :{
        create: {
			rest: {
				method: "POST",
				path: "/create"
			},
			async handler(ctx) {
                let entity = ctx.params;
				return this.adapter.insert(entity) ;
			}
          }
        },

    events:{},

    methods:{},

    //lifecycle methods

    created(){},

    async started(){},

    async stopped(){}


}