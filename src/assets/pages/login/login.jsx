import './login.css'

export default function Login(){
    return(
        <>
            <div className="wrapper">
                <form action="" className="login">
                    <h2 className="loginTitle">вход</h2>
                    <input type="text" placeholder='e-mail' />
                    <input type="password" placeholder='Пароль' />
                    <button className="loginButton" type='submit'>Войти</button>
                    <p>
                        Вы новый пользователь? <a href="./login2.jsx">Зарегистрироваться</a>
                    </p>
                    <p>
                        Забыли пароль? <a href="">Восстановить пароль</a>
                    </p> 
                </form>

            </div>
        </>
    )
}