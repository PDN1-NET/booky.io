import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import Page from '../../templates/page';
import { H1, H2 } from '../../atoms/headline';
import P from '../../atoms/paragraph';
import Section from '../../molecules/section';
import Link from '../../atoms/link';
import Expandable from '../../molecules/expandable';
// import Bookmarklet from '../../molecules/bookmarklet';
import Illustration from '../../atoms/illustration';

import './Help.scss';

export default class Help extends Component {
  render() {
    const introValues = {
      email: (
        <Link to="/contact">
          <FormattedMessage id="help.email" />
        </Link>
      )
    };
    const betaValues = {
      link: (
        <Link href="https://booky.io/settings">
          { 'https://booky.io/settings' }
        </Link>
      )
    };

    return (
      <Page>
        <Section>
          <H1 className="help-headline">
            <FormattedMessage id="help.title" />
          </H1>
          <P className="help-intro">
            <FormattedMessage id="help.intro1" />
          </P>
          <P className="help-intro">
            <FormattedMessage id="help.intro2" values={ introValues } />
          </P>
          <Illustration name="customer-service-man" className="help-illustration" />

          <H2>
            <FormattedMessage id="help.beta" />
          </H2>
          <div className="help-container">
            <Expandable headline={ <FormattedMessage id="help.beta.question1" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.beta.answer1" />
              </P>
            </Expandable>
            <Expandable headline={ <FormattedMessage id="help.beta.question2" /> } className="help-container__item">
              <P noPadding>
                <FormattedMessage id="help.beta.answer2" values={ betaValues } />
              </P>
            </Expandable>
          </div>

          {/* <H2>
            <FormattedMessage id="help.extensions" />
          </H2>
          <P>
            <FormattedMessage id="help.extensions.text" />
          </P>
          <H2>
            <FormattedMessage id="help.bookmarklet" />
          </H2>
          <P>
            <FormattedMessage id="help.bookmarklet.text" />
          </P>
          <Bookmarklet />
          <H2>
            <FormattedMessage id="help.customizations" />
          </H2>
          <P>
            <FormattedMessage id="help.customizations.text" />
          </P>

          <H2>
            <FormattedMessage id="help.collections" />
          </H2>
          <P />

          <H2>
            <FormattedMessage id="help.categories" />
          </H2>
          <P />

          <H2>
            <FormattedMessage id="help.bookmarks" />
          </H2>
          <P />

          <H2>
            <FormattedMessage id="help.account" />
          </H2>
          <P /> */}
        </Section>
      </Page>
    );
  }
}
