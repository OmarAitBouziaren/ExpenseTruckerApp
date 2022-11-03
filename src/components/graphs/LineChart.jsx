import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';

import useStyles from './style';
import useTransactions from '../../useTransaction';

const LineChart = ({}) => {
    const classes = useStyles();
    const { total, lineData } = useTransactions();
    console.log(lineData)

    return (
        <Card className={classes.line}>
            <CardHeader title='Balance' />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Line data={lineData} />
            </CardContent>
        </Card>
    )
}

export default LineChart;
