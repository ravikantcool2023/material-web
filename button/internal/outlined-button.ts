/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {html} from 'lit';

import {Button} from './button.js';

/**
 * An outlined button component.
 */
export class OutlinedButton extends Button {
  protected override renderOutline() {
    return html`<span class="button__outline"></span>`;
  }
}
