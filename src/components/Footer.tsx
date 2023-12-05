import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='fixed h-[100px] w-full flex flex-col bottom-0 font-semibold text-center gap-3'>
                <h1 className='text-2xl'>
                    Escreva o que quiser nesse Blog
                </h1>
                <p>
                    Mini Blog All Rights Reserved ©
                    {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    )
}

export default Footer