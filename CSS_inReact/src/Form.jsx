import React from 'react';
import './Form.css';

const Form = () => {
    return (
        <>
        {/* Inline CSS  */}
            <form action="" style={{display:'flex',border:'1px solid grey',flexDirection:'column',margin:'20px',padding:'30px'}}>
                <h2>Inline CSS</h2>
                <label style={{fontWeight:'bold',margin:'0 10px 0 0'}}>Name : 
                    <input style={{margin:'0 0 0 10px',border:'1px solid grey',borderRadius:'7px',padding:'2px 5px'}} type="text" name='name' placeholder='Full Name'/>
                </label> <br />
                <label style={{fontWeight:'bold',margin:'0 10px 0 0'}}>Email: 
                    <input style={{margin:'0 0 0 10px',border:'1px solid grey',borderRadius:'7px',padding:'2px 5px'}} type="text" name='email' placeholder='email' />
                </label> <br />
                <button style={{border:'1px solid blue',backgroundColor:'cyan',padding:'5px 10px',width:'200px',borderRadius:'12px'}}>Submit</button>
            </form>


            {/* Internal CSS  */}

                <style>
                    {
                        `
                            form{
                                display: flex;
                                border: 1px solid grey;
                                flex-direction: column;
                                margin: 20px;
                                padding: 30px;
                            }

                            .label{
                                font-weight: bold;
                                margin: 0 10px 0 0;
                            }

                            .input{
                                margin: 0 0 0 10px;
                                border: 1px solid grey;
                                border-radius: 7px;
                                padding: 2px 5px;
                            }

                            #btn{
                                border: 1px solid blue;
                                background-color: cyan;
                                padding: 5px 10px;
                                width: 200px;
                                border-radius: 12px'
                            }

                        `
                    }
                </style>

            <form action="" >
                <h2>Internal CSS</h2>
                <label className='label'>Name : 
                    <input className='input' type="text" name='name' placeholder='Full Name'/>
                </label> <br />
                <label className='label'>Email: 
                    <input className='input' type="text" name='email' placeholder='email' />
                </label> <br />
                <button id='btn'>Submit</button>
            </form>

            {/* External CSS  */}
            
            <form action="" >
                <h2>External CSS</h2>
                <label className='label'>Name : 
                    <input className='input' type="text" name='name' placeholder='Full Name'/>
                </label> <br />
                <label className='label'>Email: 
                    <input className='input' type="text" name='email' placeholder='email' />
                </label> <br />
                <button id='btn'>Submit</button>
            </form>
        </>
    )
}

export default Form