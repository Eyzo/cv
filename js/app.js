var form = document.querySelector('#form-contact')
var container = form.parentNode
var formgroup = document.querySelector('.form-group')

form.addEventListener('submit',async function(e){

    e.preventDefault()

    if (container.contains(document.querySelector('#flash')))
    {
        container.removeChild(document.querySelector('#flash'))
    }

    let response = await fetch(form.getAttribute('action'),{
        method:'POST',
        body: new FormData(form)
    })
    if (response.ok)
    {
        let flash = document.createElement('div')
        flash.className = 'alert alert-success'
        flash.setAttribute('role','alert')
        flash.setAttribute('id','flash')
        form.querySelector('#email')
        flash.innerHTML = 'votre message a bien était envoyé'
        container.appendChild(flash)
        container.appendChild(form)
    }
    else
    {
        let flash = document.createElement('div')
        flash.className = 'alert alert-danger'
        flash.setAttribute('role','alert')
        flash.innerHTML = 'Oups on dirait qu\'il y a eu une erreur'
        let container = form.parentNode
        container.appendChild(flash)
        container.appendChild(form)
    }

    form.querySelector('#email').value = ''
    form.querySelector('#message').value =''

})

