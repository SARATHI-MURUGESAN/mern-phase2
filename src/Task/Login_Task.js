import React from 'react'

function Login_Task() {
    return (
        <div>
            <h2>Login</h2>

            <form>
                <p>
                    <input type="text" placeholder="Username" />
                </p>

                <p>
                    <input type="password" placeholder="Password" />
                </p>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login_Task;