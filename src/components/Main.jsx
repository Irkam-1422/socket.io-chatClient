import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Main.module.css'

const  FIELDS = {
    USERNAME: "username",
    ROOM: "room"
}

export const Main = () => {
  
  const {USERNAME, ROOM} = FIELDS  
  const [values,setValues] = useState({[USERNAME]: "", [ROOM]: ""})

  const handleChange = ({target: {value, name}}) => {
    setValues({...values, [name]: value})
  }

  const handleClick = (e) => {
    const isDIsabled = Object.values(values).some(value => !value)
    if (isDIsabled) e.preventDefault()
  }

  console.log(values);

  return (
    <div className={styles.wrap}>
        <div className={styles.container}>
            <h1 className={styles.heading}>Join</h1>

            <form action="" className={styles.heading}>
                <div className={styles.group}>
                    <input type="text" 
                           name='username' 
                           placeholder='Username'
                           value={values[USERNAME]}
                           className={styles.input}
                           onChange={handleChange} 
                           autoComplete="off"
                           required
                           />
                </div>
                <div className={styles.group}>
                    <input type="text" 
                           name='room' 
                           placeholder='Room'
                           value={values[ROOM]}
                           className={styles.input}
                           onChange={handleChange} 
                           autoComplete="off"
                           required
                           />
                </div>

                <Link 
                  className={styles.group} 
                  style={{display: 'block'}} 
                  onClick={handleClick}
                  to={`/chat?name=${values[USERNAME]}&room=${values[ROOM]}`}>
                    <button type="submit" className={styles.button}>
                        Sign In
                    </button>
                </Link>
            </form>
        </div>
    </div>
  )
}
