import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import WordMark from '../WordMark'
import EnerguideLogo from '../EnerguideLogo'
import GoCSignature from '../GoCSignature'
import { PhaseBanner } from '../PhaseBanner'
import DownwardChevron from '../DownwardChevron'
import UpwardChevron from '../UpwardChevron'
import Button from '../Button'

storiesOf('Welcome', module).add('GCUI', () => (
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
))

storiesOf('Logos', module).add('WordMark', () => (
  <div>
    <p>This is the official logo of the Canadian government</p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 10em in width</p>
    <WordMark />
    <h4>props</h4>
    <p>
      Passing a width property looks like this: &lt;WordMark
      width=&quot;20em&quot; /&gt;
    </p>
    <WordMark width="20em" />

    <p>
      The colour of the flag can be controlled with a flag prop: &lt;WordMark
      flag=&quot;#00F&quot; /&gt;
    </p>
    <WordMark flag="#00F" />

    <p>
      The colour of the text can be controlled with a text prop: &lt;WordMark
      text=&quot;#00F&quot; /&gt;
    </p>
    <WordMark text="#00F" />
  </div>
))

storiesOf('Logos', module).add('EnerguideLogo', () => (
  <div>
    <p>This is the official logo of the NRCAN&apos;s Energuide program.</p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 15em in width</p>
    <EnerguideLogo />
    <h4>props</h4>
    <p>
      Passing a width property looks like this: &lt;EnerguideLogo
      width=&quot;20em&quot; /&gt;
    </p>
    <EnerguideLogo width="20em" />
  </div>
))

storiesOf('Logos', module).add('GoCSignature', () => (
  <div>
    <p>This is the signature block used by the Government of Canada.</p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 15em in width</p>
    <GoCSignature />
    <h4>props</h4>
    <p>
      Passing a width property looks like this: &lt;GoCSignature
      width=&quot;20em&quot; /&gt;
    </p>
    <GoCSignature width="20em" />
    <p>
      The colour of the flag can be controlled with a flag prop:
      &lt;GoCSignature flag=&quot;#00F&quot; /&gt;
    </p>
    <GoCSignature flag="#00F" />

    <p>
      The colour of the text can be controlled with a text prop:
      &lt;GoCSignature text=&quot;#00F&quot; /&gt;
    </p>
    <GoCSignature text="#00F" />
    <p>
      The order of the text (French first vs English first) can be controlled
      with the lang prop: &lt;GoCSignature lang=&quot;fr&quot; width=&quot;20em
      &quot;/&gt;
    </p>
    <GoCSignature width="20em" lang="fr" />
  </div>
))

storiesOf('Icons', module).add('DownwardChevron', () => (
  <div>
    <p>
      This is a React version of the Fontawesome &quot;chevron-down &quot;icon.
    </p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 1em in width and colour of white/#fff.</p>
    <h4>props</h4>
    <p>
      The props it accepts are: &lt;DownwardChevron
      verticalPadding=&quot;2em&quot; horizontalPadding=&quot;3em
      &quot;colour=#&quot;000&quot; width=&quot;10em &quot;/&gt;
    </p>
    <DownwardChevron
      verticalPadding="2em"
      horizontalPadding="3em"
      width="10em"
      colour="#000"
    />
  </div>
))

storiesOf('Icons', module).add('UpwardChevron', () => (
  <div>
    <p>
      This is a React version of the Fontawesome &quot;chevron-up&quot; icon.
    </p>
    <h3>Defaults</h3>
    <p>With no props it defaults to 1em in width and colour of white/#fff.</p>
    <h4>props</h4>
    <p>
      The props it accepts are: &lt;UpwardChevron
      verticalPadding=&quot;2em&quot; horizontalPadding=&quot;3em
      &quot;colour=#&quot;000 &quot;width=&quot;10em &quot;/&gt;
    </p>
    <UpwardChevron
      verticalPadding="2em"
      horizontalPadding="3em"
      width="10em"
      colour="#000"
    />
  </div>
))

storiesOf('Elements', module).add('PhaseBanner', () => (
  <div>
    <p>
      This is a banner to announce the software development phase the web
      application is in.
    </p>
    <h3>Usage</h3>
    <p>
      Usage is simple, if you want an alpha banner, pass the alpha prop: <br />
      &lt;PhaseBanner alpha &gt;This is a new service we are constantly
      improving.&lt;/PhaseBanner&gt;
    </p>
    <PhaseBanner alpha>
      This is a new service we are constantly improving.
    </PhaseBanner>
    <p>
      Getting a beta banner is the same: <br />
      &lt;PhaseBanner beta &gt; This service is getting pretty good!
      &lt;/PhaseBanner&gt;
    </p>
    <PhaseBanner beta>This service is getting pretty good!</PhaseBanner>
  </div>
))

storiesOf('Buttons', module).add('Button', () => (
  <div>
    <p>This is basic WET button.</p>
    <h3>Defaults</h3>
    <p>
      With no props it defaults to what is called a &quot;default button&quot;
      in the Web Experience Toolkit:
    </p>
    <Button>submit</Button>
    <h4>props</h4>
    <p>
      The only prop you can pass is whether or not this is a primary button:
      &lt;Button primary &gt;submit&lt;/Button primary &gt;
    </p>
    <Button primary>submit</Button>
    <h4>Interaction</h4>
    <p>
      As with any React component, if you want to interaction you attach an
      event handler: &lt;Button primary
      onClick=&#123;action(c&quot;licked&quot;)&#125; &gt;submit&lt;/Button
      primary &gt;
    </p>
    <Button primary onClick={action('clicked')}>
      submit
    </Button>
  </div>
))
