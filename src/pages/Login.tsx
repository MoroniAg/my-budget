
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import './Login.css'
import "/node_modules/primeflex/primeflex.css"
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';



const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signInWithEmailAndPasswordFn = async (email: string, password: string) => {

    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Usuario autenticado:", user);
        // ...
    }).catch((error) => {
        console.log("Error al autenticar usuario:", error);
    })
}

export default function Login() {

    const { handleSubmit, control } = useForm();
    
    const onSubmit = (data: FormData) => {
        signInWithEmailAndPasswordFn(data.email, data.password);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)} className='z-index-100'>
            <div id='box-login' >
                <div className="block text-center">
                    <Image id='logo' src='/src/assets/logo-1.png' alt='logo'></Image>
                </div>
                <div className="flex text-center align-items-center justify-content-center">
                    <div id="form-login" className='flex align-items-center justify-content-center'>
                        <div className="block">
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Email is required" }}
                                render={({ field }) =>
                                    <InputText {...field} placeholder='Usuario/Email' />}
                            />
                            {/* {errors.email && <p>{errors.email.message}</p>} */}
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: "Password is required" }}
                                render={({ field }) =>
                                    <InputText {...field} className='mt-3' placeholder='Contraseña' type='password' />}
                            />
                            {/* {errors.password && <p>{errors.password.message}</p>} */}
                            <Button
                                type="submit"
                                label='Ingresar'
                                className='mt-8 btn-budget'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}


type FormData = {
    email: string;
    password: string;
  };