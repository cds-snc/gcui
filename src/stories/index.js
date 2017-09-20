import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import WordMark from '../WordMark'
import EnerguideLogo from '../EnerguideLogo'
import GoCSignature from '../GoCSignature'
import DownwardChevron from '../DownwardChevron'
import UpwardChevron from '../UpwardChevron'

storiesOf('Welcome', module).add('GCUI', () =>
  <div>
    <h2>GC UI</h2>
    <p>
      This is a project to create a visual component library for all the common
      bits of UI code created by CDS.
    </p>
    <p>
      The aim here is to bring the good work that went into the Web Experience
      Toolkit into the component age.
    </p>
  </div>
)

storiesOf('Logos', module).add('WordMark', () =>
  <div>
    <p>This is the official logo of the Canadian government</p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 10em in width</p>
    <WordMark />
    <h4>props</h4>
    <p>
      Passing a width property looks like this: &lt;WordMark width="20em" /&gt;
    </p>
    <WordMark width="20em" />

    <p>
      The colour of the flag can be controlled with a flag prop: &lt;WordMark flag="#00F" /&gt;
    </p>
    <WordMark flag="#00F" />

    <p>
      The colour of the text can be controlled with a text prop: &lt;WordMark text="#00F" /&gt;
    </p>
    <WordMark text="#00F" />
  </div>
)

storiesOf('Logos', module).add('EnerguideLogo', () =>
  <div>
    <p>This is the official logo of the NRCAN's Energuide program.</p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 15em in width</p>
    <EnerguideLogo />
    <h4>props</h4>
    <p>
      Passing a width property looks like this: &lt;EnerguideLogo width="20em" /&gt;
    </p>
    <EnerguideLogo width="20em" />
  </div>
)

storiesOf('Logos', module).add('GoCSignature', () =>
  <div>
    <p>This is the signature block used by the Government of Canada.</p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 15em in width</p>
    <GoCSignature />
    <h4>props</h4>
    <p>
      Passing a width property looks like this: &lt;GoCSignature width="20em" /&gt;
    </p>
    <GoCSignature width="20em" />
    <p>
      The colour of the flag can be controlled with a flag prop: &lt;GoCSignature flag="#00F" /&gt;
    </p>
    <GoCSignature flag="#00F" />

    <p>
      The colour of the text can be controlled with a text prop: &lt;GoCSignature text="#00F" /&gt;
    </p>
    <GoCSignature text="#00F" />
  </div>
)

storiesOf('Icons', module).add('DownwardChevron', () =>
  <div>
    <p>This is a React version of the Fontawesome "chevron-down" icon.</p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 1em in width and colour of white/#fff.</p>
    <h4>props</h4>
    <p>
      The props it accepts are: &lt;DownwardChevron verticalPadding="2em" horizontalPadding="3em" colour="#000" width="10em" /&gt;
    </p>
    <DownwardChevron verticalPadding="2em" horizontalPadding="3em" width="10em" colour="#000" />
  </div>
)

storiesOf('Icons', module).add('UpwardChevron', () =>
  <div>
    <p>This is a React version of the Fontawesome "chevron-up" icon.</p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 1em in width and colour of white/#fff.</p>
    <h4>props</h4>
    <p>
      The props it accepts are: &lt;UpwardChevron verticalPadding="2em" horizontalPadding="3em" colour="#000" width="10em" /&gt;
    </p>
    <UpwardChevron verticalPadding="2em" horizontalPadding="3em" width="10em" colour="#000" />
  </div>
)
