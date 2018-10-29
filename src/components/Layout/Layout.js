
import React from 'react';
import Wrap from '../../hoc/Wrap';
import classes from './Layout.module.css'

const layout = (props) => (
    <Wrap>
        <div>Toolbar,sidebar,backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Wrap>
);

export default layout;