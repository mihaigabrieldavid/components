import {
  EuiAvatar,
  EuiButton,
  EuiCollapsibleNav,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiLink,
  EuiPopover,
  EuiShowFor,
  EuiSpacer,
  EuiText,
  useEuiI18n,
} from "@elastic/eui";
import { useState } from "react";

export type PageHeaderItem = {
  id: string;
  name: string;
  onClick: () => void;
};

export type PageHeaderProps = {
  initialIsFlyoutOpen: boolean;
  initialIsPopoverOpen: boolean;
  logoSrc: string;
  userName: string;
  items: PageHeaderItem[];
  onMyAccount: () => void;
  onSignOut: () => void;
  onSignIn: () => void;
  onTryFree: () => void;
  onApplication: () => void;
  onLogo: () => void;
};

export const PageHeader = ({
  initialIsFlyoutOpen,
  initialIsPopoverOpen,
  logoSrc,
  userName,
  items,
  onMyAccount,
  onSignOut,
  onSignIn,
  onTryFree,
  onApplication,
  onLogo,
}: PageHeaderProps) => {
  const myAccount = useEuiI18n("pageHeader.myAccount", "Contul meu");
  const signOut = useEuiI18n("pageHeader.signOut", "Ieși din cont");
  const signIn = useEuiI18n("pageHeader.signIn", "Intră în cont");
  const tryFree = useEuiI18n("pageHeader.tryFree", "Încearcă gratuit");
  const application = useEuiI18n("pageHeader.application", "Aplicație");
  const [isPopoverOpen, setIsPopoverOpen] = useState(initialIsPopoverOpen);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(initialIsFlyoutOpen);

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const handleFlyoutClose = () => {
    setIsFlyoutOpen(false);
  };

  const handleFlyoutOpen = () => {
    setIsFlyoutOpen(true);
  };

  const handlePopoverToggle = () => {
    if (isPopoverOpen) {
      handlePopoverClose();
    } else {
      handlePopoverOpen();
    }
  };

  const handleSignOut = () => {
    onSignOut();
    handleFlyoutClose();
    handlePopoverClose();
  };

  const handleMyAccount = () => {
    onMyAccount();
    handleFlyoutClose();
    handlePopoverClose();
  };

  const handleTryFree = () => {
    onTryFree();
    handleFlyoutClose();
  };

  const handleSignIn = () => {
    onSignIn();
    handleFlyoutClose();
  };

  const handleApplication = () => {
    onApplication();
    handleFlyoutClose();
  };

  return (
    <EuiFlexItem
      css={{
        background: "#FFFFFF",
        borderBottom: "1px solid #D3DAE6",
        alignItems: "center",
      }}
      grow={false}
    >
      <EuiFlexGroup
        gutterSize="none"
        responsive={false}
        css={{
          width: "100%",
          maxWidth: 1280,
          padding: "16px 8px 16px 14px",
        }}
        alignItems="center"
      >
        <EuiFlexItem>
          <EuiFlexGroup gutterSize="none" responsive={false}>
            <EuiFlexItem grow={false}>
              <img
                src={logoSrc}
                style={{ maxHeight: 40, cursor: "pointer" }}
                onClick={onLogo}
              />
            </EuiFlexItem>
            <EuiShowFor sizes={["l", "xl"]}>
              <EuiFlexItem grow={false} css={{ marginLeft: 16 }}>
                <EuiHeaderLinks>
                  {items.map(({ id, name, onClick }) => (
                    <EuiHeaderLink
                      css={{ fontWeight: "bold" }}
                      key={id}
                      onClick={() => {
                        onClick();
                      }}
                    >
                      {name}
                    </EuiHeaderLink>
                  ))}
                </EuiHeaderLinks>
              </EuiFlexItem>
            </EuiShowFor>
          </EuiFlexGroup>
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
          <EuiFlexGroup gutterSize="none" responsive={false}>
            <EuiShowFor sizes={["xs", "s", "m"]}>
              <EuiFlexItem>
                <div>
                  <EuiCollapsibleNav
                    isOpen={isFlyoutOpen}
                    button={
                      <EuiHeaderSectionItemButton onClick={handleFlyoutOpen}>
                        <EuiIcon type="menu" size="m" />
                      </EuiHeaderSectionItemButton>
                    }
                    onClose={handleFlyoutClose}
                  >
                    <EuiFlexGroup
                      gutterSize="none"
                      responsive={false}
                      direction="column"
                      css={{ overflow: "hidden" }}
                    >
                      {userName && (
                        <EuiFlexItem
                          grow={false}
                          css={{
                            padding: 16,
                            borderBottom: "1px solid #D3DAE6",
                          }}
                        >
                          <EuiFlexGroup
                            direction="row"
                            gutterSize="none"
                            responsive={false}
                          >
                            <EuiFlexItem grow={false}>
                              <EuiAvatar name={userName} size="m" />
                            </EuiFlexItem>
                            <EuiFlexItem css={{ paddingLeft: 8 }}>
                              <EuiText
                                css={{
                                  marginBottom: 8,
                                  marginTop: 4,
                                  fontWeight: "bold",
                                }}
                              >
                                {userName}
                              </EuiText>
                              <div>
                                <EuiLink
                                  css={{ marginBottom: 8 }}
                                  onClick={handleMyAccount}
                                >
                                  {myAccount}
                                </EuiLink>
                              </div>
                              <div>
                                <EuiLink onClick={handleSignOut}>
                                  {signOut}
                                </EuiLink>
                              </div>
                            </EuiFlexItem>
                          </EuiFlexGroup>
                        </EuiFlexItem>
                      )}
                      <EuiFlexItem
                        className="eui-yScroll"
                        css={{ padding: 16 }}
                      >
                        {items.map(({ id, name, onClick }) => (
                          <div key={id}>
                            <EuiLink
                              color="text"
                              css={{ padding: 8, fontWeight: "bold" }}
                              onClick={() => {
                                onClick();
                                handleFlyoutClose();
                              }}
                            >
                              {name}
                            </EuiLink>
                          </div>
                        ))}
                      </EuiFlexItem>
                      <EuiFlexItem
                        grow={false}
                        css={{ padding: 16, borderTop: "1px solid #D3DAE6" }}
                      >
                        {!userName && (
                          <>
                            <EuiButton
                              css={{ marginBottom: 8 }}
                              onClick={handleSignIn}
                            >
                              {signIn}
                            </EuiButton>
                            <EuiButton fill={true} onClick={handleTryFree}>
                              {tryFree}
                            </EuiButton>
                          </>
                        )}
                        {userName && (
                          <EuiButton fill={true} onClick={handleApplication}>
                            {application}
                          </EuiButton>
                        )}
                      </EuiFlexItem>
                    </EuiFlexGroup>
                  </EuiCollapsibleNav>
                </div>
              </EuiFlexItem>
            </EuiShowFor>
            <EuiShowFor sizes={["l", "xl"]}>
              {!userName && (
                <EuiFlexItem>
                  <div>
                    <EuiButton css={{ marginRight: 16 }} onClick={handleSignIn}>
                      {signIn}
                    </EuiButton>
                    <EuiButton fill={true} onClick={handleTryFree}>
                      {tryFree}
                    </EuiButton>
                  </div>
                </EuiFlexItem>
              )}
              {userName && (
                <>
                  <EuiFlexItem>
                    <EuiHeaderLink
                      css={{ fontWeight: "bold", marginRight: 16 }}
                      onClick={handleApplication}
                    >
                      {application}
                    </EuiHeaderLink>
                  </EuiFlexItem>
                  <EuiFlexItem>
                    <EuiPopover
                      repositionOnScroll={true}
                      button={
                        <EuiHeaderSectionItemButton
                          onClick={handlePopoverToggle}
                        >
                          <EuiAvatar size="m" name={userName} />
                        </EuiHeaderSectionItemButton>
                      }
                      isOpen={isPopoverOpen}
                      anchorPosition="downRight"
                      closePopover={handlePopoverClose}
                      panelPaddingSize="none"
                    >
                      <div style={{ width: 320 }}>
                        <EuiFlexGroup
                          gutterSize="m"
                          className="euiHeaderProfile"
                          responsive={false}
                        >
                          <EuiFlexItem grow={false}>
                            <EuiAvatar name={userName} size="xl" />
                          </EuiFlexItem>
                          <EuiFlexItem>
                            <EuiText css={{ fontWeight: "bold" }}>
                              {userName}
                            </EuiText>
                            <EuiSpacer size="m" />
                            <EuiFlexGroup>
                              <EuiFlexItem>
                                <EuiFlexGroup justifyContent="spaceBetween">
                                  <EuiFlexItem grow={false}>
                                    <EuiLink onClick={handleMyAccount}>
                                      {myAccount}
                                    </EuiLink>
                                  </EuiFlexItem>
                                  <EuiFlexItem grow={false}>
                                    <EuiLink onClick={handleSignOut}>
                                      {signOut}
                                    </EuiLink>
                                  </EuiFlexItem>
                                </EuiFlexGroup>
                              </EuiFlexItem>
                            </EuiFlexGroup>
                          </EuiFlexItem>
                        </EuiFlexGroup>
                      </div>
                    </EuiPopover>
                  </EuiFlexItem>
                </>
              )}
            </EuiShowFor>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </EuiFlexItem>
  );
};
