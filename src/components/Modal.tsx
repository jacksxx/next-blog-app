interface Imodals {
    children: React.ReactNode,
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    modalOpen: boolean
}

const Modal = (props: Imodals) => {
    return (
        <>
            {props.modalOpen && (
                <div className='bg-black/60 fixed inset-0'>
                    <div className='flex items-center justify-center h-full'>
                        <div className='flex flex-col items-end bg-slate-300 w-[500px] p-5 border-2 border-black'>
                            <button
                                onClick={() => props.setModalOpen(false)} className='text-2x1 mb-3 items-end'>
                                &times;
                            </button>
                            {props.children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal