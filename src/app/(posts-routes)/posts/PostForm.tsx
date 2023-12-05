'use client'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { TextArea } from '@/components/TextArea'
import { Post } from '@/types/Post'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Imodals {    
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>    
}



const PostForm = (modal : Imodals) => {
    
    const router = useRouter();
    const {
        register,
        handleSubmit,        
        formState: { errors }

    } = useForm<Post>();

    const onSubmit: SubmitHandler<Post> = (data, event) => {
        event?.preventDefault();        
        axios
            .post("/api/posts", data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                modal.setModalOpen(false)
                router.refresh();                                
            });
    }


    return (
        <>
            <div className='flex flex-col items-center py-3'>
                <h1 className='textH1'>
                    Faça seu Post aqui mesmo.
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className='formComponent'>
                    <Input
                        label='Title'
                        id='title'                        
                        className='inputGeral w-[450px]'
                        {...register('title')}
                    /> 
                    <Input
                        //type='file'
                        label='Imagem'                        
                        id='image'                        
                        className='inputGeral w-[450px]'
                        {...register('image')}
                    />
                    <TextArea                        
                        label='Description'
                        id='description'
                        placeholder='Insira o conteúdo do seu post.'
                        className='inputGeral w-[450px]'
                        {...register('description')}
                    />
                    <TextArea                        
                        label='Tags'
                        id='Tags'
                        placeholder='Insira as Tags separadas por virgula'
                        className='inputGeral w-[450px]'
                        {...register('Tags')}
                    />                    
                    <Button
                        name='Submit'
                        className='buttonRegister'
                    />
                </form>
            </div>
        </>
    )
}

export default PostForm