import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Wordmark from '../src/Wordmark';

storiesOf('Welcome', module).add('GCUI', () => (
<div>
	<h2>GC UI</h2>
	<p>This is a project to create a visual component library for all the common bits of UI code created by CDS.</p>
	<p>The aim here is to bring the good work that went into the Web Experience Toolkit into the component age.</p>
</div>
));

storiesOf('Wordmark', module)
  .add('Wordmark', () => (
	<div>
		<p>This is the official logo of the Canadian government</p>
		<h3>Defaults</h3>
		<p>With no props it defaults to 10em in width</p>
		<Wordmark />
		<h3>props</h3>
		<p>Passing a width property looks like this: &lt;Wordmark width="20em" /&gt;</p>
		<Wordmark width="20em" />
	</div>
))

