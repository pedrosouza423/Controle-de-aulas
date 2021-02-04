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
    }
}