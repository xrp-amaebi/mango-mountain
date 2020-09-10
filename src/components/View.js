import React from 'react';


export const View = () => (
    <div>
        <div className='box'>
            <h2>Enter Login Details</h2>
            <form>
                <div className="inputBox">
                    <input type="text" name="" required="" />
                        <label>Username</label>
                </div>
                <div className="inputBox">
                    <input type="password" name="" required="" />
                        <label>Password</label>
                </div>
                <input type="submit" name="" value="login" />
            </form>
        </div>
    </div>
);