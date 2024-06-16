import './navigations.css'
import logo from '../../img/logo.png'

export default function Navigations(){
    return(
        <nav>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <button className='constructor'>
                Конструктор
            </button>

            <button className='orders'>
                Заказы
            </button>

            <button className='personalArea'>
                Личный кабинет
            </button>
        </nav>
    )
}