import React from 'react'
import { directive } from '@babel/types'

const Alert = ({alert }) => {
    return (
        alert !==null &&(
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i>{alert.msg}
            </div>
        )
    );
};

export default Alert
