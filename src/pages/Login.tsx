import React from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "primereact/resources/themes/lara-light-indigo/theme.css"
import "primereact/resources/primereact.min.css"
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import './Login.css'
import "/node_modules/primeflex/primeflex.css"

const firebaseConfig = {
    apiKey: "AIzaSyCLhWI5LSFTHlDktTrgchJisrCs8n-OG8E",
    authDomain: "my-budget-302fe.firebaseapp.com",
    projectId: "my-budget-302fe",
    storageBucket: "my-budget-302fe.appspot.com",
    messagingSenderId: "235968058030",
    appId: "1:235968058030:web:829a91f4f97ce81f7f133f"
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
    return (
        <div id='box-login' >
            <div className="block text-center">
                <Image id='logo' src='/src/assets/logo-1.png' alt='logo'></Image>
            </div>
            <div className="flex text-center align-items-center justify-content-center">
                <div id="form-login" className='flex align-items-center justify-content-center'>
                    <div className="block">
                        <InputText placeholder='Usuario/Email'></InputText>
                        <InputText className='mt-3' placeholder='Contraseña'></InputText>
                        <Button
                            onClick={() => signInWithEmailAndPasswordFn("moroniaguilera1993@gmail.com", "asdf1234@#")}
                            label='Ingresar'
                            className={classNames('btn-budget', 'mt-8')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
