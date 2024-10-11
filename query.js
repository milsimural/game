const { Type } = require('./db/models')

async function getValues() {
    const data = await Type.findAll()
    const formatDate = JSON.parse(JSON.stringify(data))
    return formatDate.map((el) => el.type)
    
}
getValues()