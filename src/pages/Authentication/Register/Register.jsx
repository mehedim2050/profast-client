import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} =useAuth();


    const onSubmit = data => {
createUser(data.email, data.password)
.then(result => {

})
.catch(error =>{
    
})
    }
    return (

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Create an account ! </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" {...register('email', { required: true })} className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" {...register('password', {
                            required: true,
                            minLength: 6
                        })} className="input" placeholder="Password" />
                        
                        {errors.password?.type === 'required' && (
                            <p className='text-red-500'>Password is required</p>
                        )}
                        {errors.password?.type === 'minLength' && (
                            <p className='text-red-500'>Password must be 6 characters or longer</p>
                        )}

                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default Register;