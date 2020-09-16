import React from 'react'

import './Home.css';
import '../../assets/css/bootstrap-grid.min.css'
import { Header, PageTitle, Banner, PageDesc } from '../../component/'
import { SignInForm } from '../index'

export default props => {
  return <div className="container">
    <Header />
    <main>
      <div class="row">
        <div class="col-md-8">
          <PageTitle title="Superpowers for video content creators" />
          <Banner />
          <PageDesc descArr={['Compose and make beautiful multiple aspect ration (m:ation) videos in a few clicks.',
            'Make between 1-4 different sized videos for free.',
            'No card details required.']} />
        </div>
        <div class="col-md-4">
          <SignInForm />
        </div>
      </div>
    </main>
  </div>
}