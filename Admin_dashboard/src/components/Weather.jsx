
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { distanceBetweenPoints } from 'chart.js/helpers';

export default function Weather() {
    return (
        <div>
            <div className="weather">
                <div className="sun">
                    <i className="bi bi-cloud-sun"></i>
                </div>
                <div className="temp">25°</div>
            </div>
            <div className='loc'><i class="bi bi-geo-alt-fill">London</i></div>
            <div className='week'>
                <div>Mon<i class="bi bi-cloud"></i> <div>27°</div></div>
                <div>Tues<i class="bi bi-clouds"></i> <div>19°</div></div>
                <div>Wed<i class="bi bi-cloud-rain"></i> <div>23°</div> </div>
                <div>Thurs<i class="bi bi-cloud-sun"></i> <div>25°</div></div>
            </div>

        </div>

    );
}
