import './Reservation.css'
import React, { useState, useEffect } from 'react'
import Method1 from '../method1/Method1'
import Method2 from '../method2/Method2'



function Reservation() {
    const [method, setMethod] = useState("method1");


    // useEffect(() => {

    //     fetch('http://localhost/api/posts')
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setPosts(result)
    //         },
    //         (error) => {
    //             console.log(error)
    //         }
    //     )

    //     return () => {
    //         setPosts(null)
    //     }
    // }, [isUpdate])

    // const postUpdate = () => {
    //     setIsUpdate([isUpdate])
    // }    

    // const commentAdd = async (post_id) => {
        
    //     const commentValue = commentInput.current.value;
    //     console.log(commentValue)

    //     if (!commentValue) {
    //         return;
    //     }

    //     let data = new FormData();
    //     data.append('comment_text', commentValue);

    //     fetch("http://localhost/api/post/" + post_id + "/comment/add", {
    //         method: 'POST',
    //         body: data
    //         })
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 console.log(result);
    //             },
    //             (error) => {
    //             console.log(error);
    //         }
    //     );
    // }

    return (
        <React.Fragment>
            <header>
                <div className="title">Бронирование мест</div>
                <div className="methods">
                        <div className="method_block">
                            <div className="method_title">Метод №1</div>
                            <input onClick={() => setMethod("method1")} type="radio" className="method" name="method" value="method1" defaultChecked></input>
                        </div>
                        <div className="method_block">
                            <div className="method_title">Метод №2</div>
                            <input onClick={() => setMethod("method2")} type="radio" className="method" name="method" value="method2"></input>
                        </div>
                    </div>      
            </header>

            {method === 'method1' && ( // Выбор при помощи нажатия
                <React.Fragment>
                    <Method1 />       
                </React.Fragment>
            )}

            {method === 'method2' && ( // Выбор через инпуты
                <React.Fragment>
                    <Method2 />  
                </React.Fragment>
            )}
            

                    
        </React.Fragment>
    )
}

export default Reservation