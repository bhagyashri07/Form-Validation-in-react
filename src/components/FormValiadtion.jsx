import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'


export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formref = useRef()
    const [user, setUser] = useState("")
    const onSubmit = (data) => {
        (JSON.stringify(data))
        console.log(data)
        alert(JSON.stringify(data));
        setUser("")
        formref.current.reset();
    }
    return (
        <>
<header className='headertb'>
            <div className="submit-comment">
                <div className="container">
                    <form ref={formref} onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="header"> Submit Comment</h1>
                        

                        
                <div>
                    <h2 className='small'>Rating:</h2>
                </div>
                <select {...register('rating', { required: {value: true, message: ' Rating is required' }})}>
                    <option value=''>Select</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
                {errors.rating && (<span>{errors.rating.message}</span>)}
            
                        <div>
                            <h2 className='small'> Your Name :-</h2>

                        </div>
                        
                        <input type="text"
                            id="name"
                            aria-invalid={errors.name ? "true" : "false"}
                            {...register('name', { required: true, maxLength: 15, minLength: 2 })} />


                        {errors.name && errors.name.type === "required" && (
                            <span role="alert">This is Required</span>
                        )}
                        {errors.name && errors.name.type === "maxLength" && (
                            <span role="alert">Max length exceeded</span>
                        )},
                        {errors.name && errors.name.type === "minLength" && (
                            <span role="alert">Length should be greater than 2 </span>
                            )}
                        <div>
                            <h2 className='small'> Comment :-</h2>

                        </div>
                        <textarea  {...register('comment', { required: true })} placeholder="Enter Your Comment" />
                        {errors.comment && <span> Comment is Required</span>}
                        <div >
                            <button className='btn' type="submit"> Submit</button>
                        </div>


                    </form>
                </div>
            </div>
            </header>
        </>
    )
};



