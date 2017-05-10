/* 
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
import * as React from 'react';
import {
    Pivot,
    PivotItem,
    PivotLinkFormat
} from 'office-ui-fabric-react/lib/Pivot';
import { ButtonDefaultExample, ButtonPrimary, ButtonCompound } from './button';
import { BreadcrumbBasicExample } from './breadcrumb';
import { CheckboxBasicExample } from './checkbox';
import { ChoiceGroupBasicExample, ChoiceGroupIconExample } from './choicefieldgroup';
import { DropdownBasicExample } from './dropdown';
import { LabelBasicExample } from './label';
import { TextFieldBasicExample } from './textfield';
import { ToggleBasicExample } from './toggle';


export class ControlPivot extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    /* 
    Renders a pivot control with 3 pivot items - Simple, Advanced, and TextField. The pivot items display as tabs, and are used for navigation.
    On each pivot item, one or more React controls are displayed. For example, there are 3 React controls displayed under Buttons - 
    ButtonDefaultExample, ButtonPrimary, and ButtonCompound. These react controls are defined in button.tsx.
    */
    public render() {
        return (
            <div className='ms-welcome__pivot'>
                <Pivot linkFormat={PivotLinkFormat.tabs}>
                    <PivotItem linkText='Simple' >

                        <div className='ms-font-xl ms-welcome__padtwenty'>Buttons</div>
                        <ButtonDefaultExample />
                        <ButtonPrimary />
                        <ButtonCompound />

                        <div className='ms-font-xl ms-welcome__padtwenty'>Checkbox</div>
                        <CheckboxBasicExample />

                        <div className='ms-font-xl ms-welcome__padtwenty'>ChoiceGroups</div>
                        <ChoiceGroupBasicExample />
                        <ChoiceGroupIconExample />

                        <div className='ms-font-xl ms-welcome__padtwenty'>Dropdown</div>
                        <DropdownBasicExample />
                        <div className='ms-font-xl ms-welcome__padtwenty'>Label</div>
                        <LabelBasicExample />

                        <div className='ms-font-xl ms-welcome__padtwenty'>Toggle</div>
                        <ToggleBasicExample />
                    </PivotItem>

                    <PivotItem linkText='Advanced'>
                            <div className='ms-font-xl ms-welcome__padtwenty'>Breadcrumbs</div>
                            <BreadcrumbBasicExample />
                    </PivotItem>

                    <PivotItem linkText='Textfield'>
                            <div className='ms-font-xl ms-welcome__padtwenty'>TextField</div>
                            <TextFieldBasicExample />
                    </PivotItem>
                </Pivot>
            </div>
        );
    };
};

