import React from 'react';
import type { Element } from 'react';
import Helmet from 'react-helmet';
import serialize from 'serialize-javascript';
import _ from 'lodash/fp';

import type { Store } from '../types';

type Props = { store: Store, htmlContent?: string };

const Html = ({ store, htmlContent }: Props): Element<'html'> => {
  // Should be declared after "renderToStaticMarkup()" of "../server.js" or it won't work
  const head = Helmet.renderStatic();
  const attrs = head.htmlAttributes.toComponent();
  const { lang, ...rest } = attrs || {};
  const assets = webpackIsomorphicTools.assets();

  return (
    <html {...rest} lang={lang || 'en'}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
        {head.title.toComponent()}
        {head.base.toComponent()}
        {head.meta.toComponent()}
        {head.link.toComponent()}

        {/* Styles will be presented in production with webpack extract text plugin */}
        {_.keys(assets.styles).map(style => (
          <link
            key={_.uniqueId()}
            href={assets.styles[style]}
            media="screen, projection"
            rel="stylesheet"
            type="text/css"
          />
        ))}
        {/* Styles will be presented in development mode */}
        {/* I put all of the styles here to smoothen the flick */}
        {_.keys(assets.styles).length === 0 ? (
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html:
                require('../theme/normalize.css')._style +
                require('../containers/App/styles.scss')._style +
                require('../containers/Home/styles.scss')._style +
                require('../components/molecules/FormBlock/styles.scss')
                  ._style +
                require('../components/molecules/SingleInput/styles.scss')
                  ._style +
                require('../components/organisms/FormBoard/styles.scss')
                  ._style +
                require('../components/organisms/FormToolbar/styles.scss')
                  ._style +
                require('../components/atoms/Dropdown/styles.scss')._style +
                require('../components/atoms/ControlBtn/styles.scss')._style,
              // +
              // require('../components/atoms/LanguageSwitch/styles.scss')
              //    ._style,
            }}
          />
        ) : null}
      </head>
      <body>
        <div
          id="react-view"
          // Rendering the route, which passed from server-side
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: htmlContent || '' }}
        />

        <script
          // Store the initial state into window
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              store &&
              `window.__INITIAL_STATE__=${serialize(store.getState())};`,
          }}
        />
        {_.keys(assets.javascript)
          .reverse() // Reverse the order of scripts for accessing vendor.js first
          .map(script => (
            <script key={_.uniqueId()} src={assets.javascript[script]} />
          ))}
        {head.script.toComponent()}
      </body>
    </html>
  );
};

Html.defaultProps = { htmlContent: '' };

export default Html;
