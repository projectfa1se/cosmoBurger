import './login.css'

export default function Login2(){
    return(
        <>
            <div className="wrapper">
                <form action="" className="login">
                    <h2 className="loginTitle">регистрация</h2>
                    <input type="text" placeholder='Имя' />
                    <input type="text" placeholder='e-mail' />
                    <input type="password" placeholder='Пароль' />
                    <button className="loginButton" type='submit'>Зарегистрироваться</button>
                    <p>
                        Уже зарегистрированы? <a href="">Войти</a>
                    </p>
                </form>
            </div>
        </>
    )
}