import { Button, Spinner } from '@design-system';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    <div className="ds-u-display--inline-block ds-u-padding--3">
      <Spinner className="ds-u-valign--middle" />
    </div>
    <div className="ds-u-display--inline-block ds-u-padding--2 ds-u-fill--background-inverse">
      <Spinner filled className="ds-u-valign--middle" />
    </div>
    <div className="ds-u-display--inline-block ds-u-padding--2">
      <Spinner filled inversed className="ds-u-valign--middle" />
    </div>
    <div className="ds-u-margin-top--2 ds-u-padding--2 ds-u-fill--background-inverse">
      <Button inversed className="ds-u-margin-right--1">
        Cancel
      </Button>
      <Button variation="primary" disabled>
        <Spinner className="ds-u-margin-right--1" aria-valuetext="" />
        Saving
      </Button>
    </div>
  </div>,
  document.getElementById('js-example')
);
