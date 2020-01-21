const mongose = require('mongoose')

const Zstore = new mongose.Schema({
    category:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    softwares:[
        {
            sofName:{
                type:String,
                required: true
            },
            description:{
                type:String,
                required: true

            },
            downloadLinks:[
                {
                    platform:{
                        type:String,
                        required: true
                    },
                    link:{
                        type:String,
                        required: true

                    }
                }
            ]
        }
    ]
})

const zstore = mongose.model('Zstore', Zstore)

module.exports  = zstore
