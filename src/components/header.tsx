/* 
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
import * as React from 'react';

export interface HeaderProps {
    title: string;    
    message: string;
}

export class Header extends React.Component<HeaderProps, any> {
    constructor(props, context) {
        super(props, context);
    }

    /* Renders the header of the add-in which includes a welcome message passed in as a property, and introductory text.*/
    render() {
        return (
            <section className='ms-welcome__header '>
                <h1 className='ms-fontSize-xxl ms-fontWeight-light ms-fontColor-neutralPrimary'>{this.props.message}</h1>
                <p className='ms-font-m'>This is an interactive code sample that uses Office UI Fabric React components. 
                    Use the pivot below to navigate between pages.</p>
            </section>
        );
    };
};
