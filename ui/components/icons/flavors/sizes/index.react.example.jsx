/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
<span className="slds-icon_container slds-icon-standard-case">
  <SvgIcon className={`slds-icon${props.size ? ' slds-icon--' + props.size : ''}`} sprite="standard" symbol="case" />
  <span className="slds-assistive-text">Case icon</span>
</span>;

let XSmall = props =>
<span className="slds-icon_container">
  <SvgIcon className="slds-icon slds-icon-text-warning slds-icon--x-small" sprite="utility" symbol="warning" />
  <span className="slds-assistive-text">Warning Icon</span>
</span>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'x-small',
    label: 'Extra Small',
    description: 'Extra-small - (`.{{cssPrefix}}icon--x-small`) - is typically used for small alert icons, with no background color.',
    element: <XSmall />
  },
  {
    id: 'small',
    label: 'Small',
    description: 'Small - (`.{{cssPrefix}}icon--small`) - 1.5rem&times;1.5rem (for icons with a background color).',
    element: <Default size="small" />
  },
  {
    id: 'medium',
    label: 'Medium (default)',
    description: 'Medium - (this default size requires no additional class) - 2rem&times;2rem.',
    element: <Default />
  },
  {
    id: 'large',
    label: 'Large',
    description: 'Large - (`.{{cssPrefix}}icon--large`) - 3rem&times;3rem.',
    element: <Default size="large" />
  }
];
