import React from 'react'
import { ThemeProvider } from 'styled-components'

import { Container, FlexRow, FlexHalf } from './components/Common'

import Amount from './components/Amount'
import DonationFrequency from './components/DonationFrequency'
import Submit from './components/Submit'


const THEME_DEFAULT = {
  FOREGROUND    : '#FFFFFF',
  PRIMARY       : '#06cc82',
  TEXT          : '#374246',
  TEXT_MUTED    : '#b8c5c9',
  BORDER_MUTED  : '#dee9ed',
}


export default () => {
	return <ThemeProvider theme={THEME_DEFAULT}>
		<Container>
			<FlexRow>
				<FlexHalf>
          <Amount
            value={"25"}
            showCurrencies={true}
          />
					<DonationFrequency items={[
            {
              label: 'One-Time',
              value: 'once'
            },
            {
              label: 'Monthly',
              value: 'monthly'
            }
          ]} />

				</FlexHalf>
				<FlexHalf>
          <Submit />
				</FlexHalf>
			</FlexRow>
		</Container>
	</ThemeProvider>
}
