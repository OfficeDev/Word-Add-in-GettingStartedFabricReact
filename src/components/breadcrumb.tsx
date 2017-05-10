/* 
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */
import * as React from 'react';
import {
  Breadcrumb, IBreadcrumbItem
} from 'office-ui-fabric-react/lib/Breadcrumb';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Link } from 'office-ui-fabric-react/lib/Link';

export class BreadcrumbBasicExample extends React.Component<any, any> {
  constructor() {
    super();
    this._onBreadcrumbItemClicked = this._onBreadcrumbItemClicked.bind(this);
  }

/* Renders 3 Fabric Breadcrumb components and wires up the onClick event. */
  public render() {
    return (
      <div>
        <Breadcrumb
          items={ [
            { text: 'Files', 'key': 'Files', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is folder 1', 'key': 'f1', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is folder 2', 'key': 'f2', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is folder 3', 'key': 'f3', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is folder 4', 'key': 'f4', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is folder 5', 'key': 'f5', onClick: this._onBreadcrumbItemClicked }
          ] }
          maxDisplayedItems={ 3 } />
        <Breadcrumb
          items={ [
            { text: 'Files', 'key': 'Files', href: '#/examples/breadcrumb', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is link 1', 'key': 'l1', href: '#/examples/breadcrumb', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is link 2', 'key': 'l2', href: '#/examples/breadcrumb', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is link 3', 'key': 'l3', href: '#/examples/breadcrumb', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is link 4', 'key': 'l4', href: '#/examples/breadcrumb', onClick: this._onBreadcrumbItemClicked },
            { text: 'This is link 5', 'key': 'l5', href: '#/examples/breadcrumb', onClick: this._onBreadcrumbItemClicked }
          ] }
          maxDisplayedItems={ 3 } />
        <Breadcrumb
          items={ [
            { text: 'Files', 'key': 'files', onClick: this._onBreadcrumbItemClicked },
            { text: 'Folder 1', 'key': 'f1', onClick: this._onBreadcrumbItemClicked },
            { text: 'Folder 2', 'key': 'f2', onClick: this._onBreadcrumbItemClicked },
            { text: 'Folder 3', 'key': 'f3', onClick: this._onBreadcrumbItemClicked },
            { text: 'Link', 'key': 'l', onClick: this._onBreadcrumbItemClicked }
          ] }
          onRenderItem={ this._onRenderBreadcrumbItem }
          maxDisplayedItems={ 3 } />
      </div>
    );
  }

  private _onBreadcrumbItemClicked(ev: React.MouseEvent<HTMLElement>, item: IBreadcrumbItem) {
    console.log(`Breadcrumb item with key "${item.key}" has been clicked.` + ev.timeStamp);
  }

  private _onRenderBreadcrumbItem(item: IBreadcrumbItem, defaultRender?: (item?: IBreadcrumbItem) => JSX.Element): JSX.Element {
    let getIcon = (key: string) => {
      if (key === 'files') {
        return <Icon iconName={ 'OneDrive' } />;
      } else if (key[0] === 'f') {
        return <Icon iconName={ 'Folder' } />;
      } else {
        return <Icon iconName={ 'Link' } />;
      }
    };

    return (
      <span>
        <Link
          className='ms-Breadcrumb-itemLink'
          href={ item.href }
          onClick={ item.onClick }>
          { getIcon(item.key) }
        </Link>
        { defaultRender(item) }
      </span>
    );
  }
}
