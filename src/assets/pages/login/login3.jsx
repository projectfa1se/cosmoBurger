import './login.css'

export default function Login3(){
    return(
        <>
            <div className="wrapper">
                <form action="" className="login">
                    <h2 className="loginTitle">восстановление пароля</h2>
                    <input type="text" placeholder='Укажите e-mail' />
                    <button className="loginButton" type='submit'>Восстановить</button>
                    <p>
                        Вспомнили пароль? <a href="Войти"></a>
                    </p>
                </form>
            </div>
        </>
    )
}