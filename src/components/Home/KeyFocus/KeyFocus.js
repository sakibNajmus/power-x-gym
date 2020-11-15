import React from 'react';
import './KeyFocus.css'
import progress from '../../../resources/images/Progression.png'
import workout from '../../../resources/images/Workout.png'
import nutrition from '../../../resources/images/Nutrition.png'

const KeyFocus = () => {
    return (
        <section className="key-focus my-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-4 mb-3">
                        <div className="progression">
                            <img style={{width: '50px', height: '100px'}} src={progress} alt=""/>
                            <h2 className="my-4" style={{textTransform: 'UpperCase'}}>Progression</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam repellat nesciunt excepturi ratione quam iusto.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="workout">
                            <img style={{width: '120px', height: '100px'}} src={workout} alt=""/>
                            <h2 className="my-4" style={{textTransform: 'UpperCase', color: '#fcd842'}}>Workout</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam repellat nesciunt excepturi ratione quam iusto.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="nutrition">
                            <img style={{width: '50px', height: '100px'}} src={nutrition} alt=""/>
                            <h2 className="my-4" style={{textTransform: 'UpperCase'}}>Nutrition</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam repellat nesciunt excepturi ratione quam iusto.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KeyFocus;