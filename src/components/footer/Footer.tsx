import { GithubLogo, LinkedinLogo, WhatsappLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-indigo-600 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl  font-display'>AluraGeek | Desenvolvido por : Gabriel Aranda </p>
            <p className='text-lg font-display'>Acesse minhas redes sociais</p>
            <div className='flex gap-2 green-900'>
              <a href="https://www.linkedin.com/in/gabriel-arandaa" target='_blank' rel="noopener noreferrer">
                <LinkedinLogo size={36} weight='bold' />
              </a>
              <a href="https://github.com/Gabriel-Aranda1406" target='_blank' rel="noopener noreferrer">
                <GithubLogo size={36} weight='bold'/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5511988042690&text=Seu%20projeto%20com%20a%20loja%20de%20games%20é%20bem%20legal%20Poderíamos%20conversar%20um%20pouco?%20" target='_blank' rel="noopener noreferrer">
                <WhatsappLogo size={36} />
              </a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer