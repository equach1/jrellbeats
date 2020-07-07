console.log('It works')

$(document).ready(function (){
    $('. submit').click(function (event){
        event.preventDefault()
        console.log('Clicked button')

        var name = $('.name').val()
        var email = $('.email').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(email.lenght > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('Email is Valid')
        }else{
            event.preventDefault()
            statusElm.append("Email is not Valid")
        }
        if(name.length >1){
            statusElm.append('<div>Subject is valid</div>')
        }
        else{
            event.preventDefault()
            statusElm.append('<div>Subject is not valid</div>')
        }

    })
})