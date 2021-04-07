import './styles/reset.scss'
import './styles/base.scss'
import './styles/header.scss'
import './styles/form.scss'
import './styles/footer.scss'

console.log("deu certo")

//testing babel
class Band {
    name = 'Lamb of God'
}

const myBand = new Band()

const p = document.createElement('p')
p.textContent = `I like ${myBand.name}.`