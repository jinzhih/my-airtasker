import React from 'react';
import styled from 'styled-components';
import Button from '../../../Button';
import NakedButton from '../../../NakedButton';
import AuthenticationContext from '../../../AuthenticationContext';
import withAuthenticationModals from '../../../withAuthenticationModals';
import NavItem from '../NavItem';

const Layout = styled.div`
  display: flex;
  align-items: center;
`;

const BecomeATasker = styled(NavItem)`
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 0;
`;

// Component, Props, State
// 要不要划分 Component
// 划分 Component 之后 Props
// State
// 1. state 位置?
// 2. function -> class
// 3. 初始化 state -> handler
// 4. state & handler -> render

// - 与用户互动
// - 页面根据不同的条件渲染不同的UI
// - 页面要动起来
// -> state (想得简单一些)
// 1. function component -> class component
// 2. state 放在哪里? (哪里互动放在哪里，最小 state)
// 3. 初始化 state, constructor -> this.state = {};
// 4. 创建 handler, 理论上讲，每个 state 都带有自己的 handler
// 5. 将 state 和 handler 作用于 render

// - Authentication 需要渲染 Modal?
// 如果别的地方也需要渲染 Modal 呢？

// - withAuthenticationModals [HOC] { user }
//  - Component(Authentication)
//  - LogInModal
//  - SingUpModal
//  - ForgetPasswordModal

const Authentication = ({
  setShowLogInModal,
  setShowSignUpModal,
}) => (
  <AuthenticationContext.Consumer>
    {({ user }) => (
      <Layout>
        {/* <Dropdown 
          visible={showModal === 'SIGN_UP'}
          items={[{
            key: 'dashboard',
            content: 'Dashboard'
          }, {
            key: 'profile',
            content: 'Profile',
          }, {
            key: 'logout',
            content: 'Logout',
          }]}
        >
          <NavItem 
            as={NakedButton} 
            highlight
            onClick={() => showModal === 'SIGN_UP' ? this.setCloseModal() : this.setShowSignUpModal()}
          >
            Sign up
          </NavItem>
        </Dropdown> */}
        {user ? (
          <NavItem>
            Dashboard
          </NavItem>
        ) : (
          <React.Fragment>
            <NavItem 
              as={NakedButton} 
              highlight
              onClick={setShowSignUpModal}
            >
              Sign up
            </NavItem>
            <NavItem 
              as={NakedButton} 
              highlight 
              onClick={setShowLogInModal}
            >
              Log in
            </NavItem>
          </React.Fragment>
        )}
        <BecomeATasker>
          <Button size="sm" variant="secondary">Become a Tasker</Button>
        </BecomeATasker>
      </Layout>
    )}
  </AuthenticationContext.Consumer>
);

const WithAuthenticationModalsAuthentication = withAuthenticationModals(Authentication);

export default WithAuthenticationModalsAuthentication;
