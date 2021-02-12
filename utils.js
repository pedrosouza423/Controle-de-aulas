module.exports = {
    age: function (timestamp){
        const today = new Date()
        const birthday = new Date(timestamp)
    
        let age = today.getFullYear() - birthday.getFullYear()
        let month = today.getMonth() - birthday.getMonth()
    
        if(month < 0 || month == 0 && today.getDate() < birthday.getDate()){
            age--
        }
    
        return age
    },
    date: function(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        //O Mês vai de 0 a 11
        const month = date.getUTCMonth() +1
        const day = date.getUTCDate()

        // return yy - mm - dd
        console.log(`${year}-${month}-${day}`)
    }
}