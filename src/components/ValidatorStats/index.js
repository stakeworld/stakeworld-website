import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Iframe from 'react-iframe'

function Stats() {
    return (
        <div>
		<iframe src="https://monitor.stakeworld.io/public-dashboards/a4e07099638d4d8a8ff1bba0a0250ceb" width="300" height="200" frameborder="0"></iframe>

        </div>
    )
}

export default Stats;

