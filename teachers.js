const fs = require('fs')
const data = require('./data.json')
const {age} = require('./utils')



//show
exports.show = function(req,res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })
    
    if(!foundTeacher) return res.send("Teacher not found")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        ocupation: foundTeacher.ocupation.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    res.render('teachers/show', {teacher})

}

//create
exports.post = function(req,res){
    const keys = Object.keys(req.body)

    //Validando
    for(key of keys){
        if(req.body[key] == ''){
            return res.send('Please fill in all the fields!')
        }
    }

    //Construtor
    let {avatar_URL, name, birth,educational_level,type_of_class,ocupation} = req.body

    //Tratamento de dados
    birth = Date.parse(birth)
    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    //Para salvar os arquivos
    data.teachers.push({
        id,
        avatar_URL,
         name,
          birth,
          educational_level,
          type_of_class,
          ocupation,
          created_at
        })

    //Passando para data.json
    fs.writeFile("data.json", JSON.stringify(data, null, 2) ,function(err){
        if(err) return res.send("Write file error")

        return res.render('teachers/index')

    })
    

}


//edit
exports.edit = function(req,res){
    const {id} = req.params

    const foundTeacher = data.teachers.find(function(teacher){
        return teacher.id == id
    })
    
    if(!foundTeacher) return res.send("Teacher not found")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        ocupation: foundTeacher.ocupation.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    res.render('teachers/edit', {teacher})
}