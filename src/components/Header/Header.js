import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DesktopActionGroup>
        <Logo />
        <SubscribeAction>
          <Button>
            Subscribe
          </Button>
          <SubscriberLink>Already a subscriber</SubscriberLink>
        </SubscribeAction>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;


  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
  
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;
const DesktopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
  }
  
`
const SubscribeAction = styled.div`
  display: none;
  flex: 1;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
  
`
const SubscriberLink = styled.a`
  font-size: 0.75rem;
  color: var(--color-gray-900);
  font-family: var(--font-family-sans-serif);
  font-weight: var(--font-weight-bold);

  &:hover {
    text-decoration: underline;
    text-underline-offset: 2px;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    justify-items: start;
    margin-top: 16px;
    margin-bottom: 72px;
  }
`;

export default Header;
