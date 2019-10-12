import React from 'react'

const ojbectDescription = () => {
    const boxStyle = {
        padding: '3%',
    };

    const textStyle = {
        textAlign: 'left'
    };
    return(
        <div style={boxStyle}>
            <div>
                <h5>Description</h5>
                <hr />
                <p>
                    Sloths are very fun and easy animal to take care of because they like to sleep and eat.
                    They can help ease your pain by simply hugging the sloth. They are very curious animal
                    that like to observe its surrounding. They are truly amazing animals.
                </p>
            </div>
            <div>
                <h5>Features</h5>
                <hr />
                <ul style={textStyle}>
                    <li>Lazy</li>
                    <li>Caring</li>
                    <li>Hanging</li>
                </ul>
            </div>
        </div>
    )
}

export default ojbectDescription;