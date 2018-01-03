import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Layout, Menu, BackTop } from 'antd'

import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Layout>
      <Header>
        <Link
          to="/"
          style={{
            float: 'left',
            height: '31px',
            marginRight: '60px'
          }}
        >
          SSM Gatsby Demo
        </Link>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px' }}>
          <Menu.Item key="archive">Archive</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '40px' }}>{children()}</Content>
      <Footer style={{ textAlign: 'center' }}>
        <p>Footer goes here</p>
      </Footer>
    </Layout>

    <BackTop />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
