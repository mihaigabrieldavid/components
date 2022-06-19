import {
  EuiAvatar,
  EuiButton,
  EuiCollapsibleNav,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiHeaderLink,
  EuiHeaderLinks,
  EuiHeaderSectionItemButton,
  EuiHealth,
  EuiIcon,
  EuiLink,
  EuiPopover,
  EuiShowFor,
  EuiSpacer,
  EuiText,
  EuiTitle,
  useEuiI18n,
} from "@elastic/eui";
import moment from "moment";
import { useEffect, useState } from "react";

export type PageHeaderItem = {
  id: string;
  name: string;
  onClick: () => void;
};

export type PageHeaderNotification = {
  id: string;
  title: string;
  createdAt: string;
  isRead: boolean;
};

export type PageHeaderProps = {
  initialIsNavigationFlyoutOpen: boolean;
  initialIsNotificationsFlyoutOpen: boolean;
  initialIsPopoverOpen: boolean;
  logoSrc: string;
  userName: string;
  items: PageHeaderItem[];
  notifications: PageHeaderNotification[];
  onMyAccount: () => void;
  onSignOut: () => void;
  onSignIn: () => void;
  onTryFree: () => void;
  onApplication: () => void;
  onLogo: () => void;
  onNotificationsRead: (notifications: PageHeaderNotification[]) => void;
};

export const PageHeader = ({
  initialIsNavigationFlyoutOpen,
  initialIsNotificationsFlyoutOpen,
  initialIsPopoverOpen,
  logoSrc,
  userName,
  items,
  notifications,
  onMyAccount,
  onSignOut,
  onSignIn,
  onTryFree,
  onApplication,
  onLogo,
  onNotificationsRead,
}: PageHeaderProps) => {
  const myAccountText = useEuiI18n("pageHeader.myAccount", "Contul meu");
  const signOutText = useEuiI18n("pageHeader.signOut", "Ieși din cont");
  const signInText = useEuiI18n("pageHeader.signIn", "Intră în cont");
  const tryFreeText = useEuiI18n("pageHeader.tryFree", "Încearcă gratuit");
  const applicationText = useEuiI18n("pageHeader.application", "Aplicație");
  const notificationsText = useEuiI18n(
    "pageHeader.notifications",
    "Notificări"
  );
  const locale = useEuiI18n("pageHeader.locale", "ro");
  const noNotificationsText = useEuiI18n(
    "pageHeader.noNotificationsText",
    "Momentan nu ai notificări"
  );
  const [isPopoverOpen, setIsPopoverOpen] = useState(initialIsPopoverOpen);
  const [isNavigationFlyoutOpen, setIsNavigationFlyoutOpen] = useState(
    initialIsNavigationFlyoutOpen
  );
  const [isNotificationsFlyoutOpen, setIsNotificationsFlyoutOpen] = useState(
    initialIsNotificationsFlyoutOpen
  );
  const [hasNewNotifications, setHasNewNotifications] = useState(false);

  useEffect(() => {
    setHasNewNotifications(notifications.some(({ isRead }) => !isRead));
  }, [notifications]);

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const handleNavigationFlyoutOpen = () => {
    setIsNavigationFlyoutOpen(true);
  };

  const handleNavigationFlyoutClose = () => {
    setIsNavigationFlyoutOpen(false);
  };

  const handleNotificationsFlyoutOpen = () => {
    setIsNotificationsFlyoutOpen(true);
  };

  const handleNotificationsFlyoutClose = () => {
    setIsNotificationsFlyoutOpen(false);
    if (hasNewNotifications) {
      onNotificationsRead(notifications.filter(({ isRead }) => !isRead));
    }
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
    handleNavigationFlyoutClose();
    handlePopoverClose();
  };

  const handleMyAccount = () => {
    onMyAccount();
    handleNavigationFlyoutClose();
    handlePopoverClose();
  };

  const handleTryFree = () => {
    onTryFree();
    handleNavigationFlyoutClose();
  };

  const handleSignIn = () => {
    onSignIn();
    handleNavigationFlyoutClose();
  };

  const handleApplication = () => {
    onApplication();
    handleNavigationFlyoutClose();
  };

  return (
    <>
      {isNotificationsFlyoutOpen && (
        <EuiFlyout size="s" onClose={handleNotificationsFlyoutClose}>
          <EuiFlyoutHeader>
            <EuiTitle size="s">
              <h2>{notificationsText}</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody style={{ cursor: "default" }}>
            {notifications.length === 0 && (
              <EuiText>{noNotificationsText}</EuiText>
            )}
            {notifications.map(({ title, createdAt, isRead }) => (
              <EuiFlexGroup
                gutterSize="none"
                responsive={false}
                style={{ marginBottom: 16 }}
              >
                <EuiHealth color={isRead ? "subdued" : "primary"}>
                  <EuiFlexGroup
                    direction="column"
                    gutterSize="none"
                    responsive={false}
                  >
                    <EuiFlexItem style={{ fontWeight: isRead ? 400 : 600 }}>
                      {title}
                    </EuiFlexItem>
                    <EuiFlexItem>
                      {moment(createdAt).locale(locale).fromNow()}
                    </EuiFlexItem>
                  </EuiFlexGroup>
                </EuiHealth>
              </EuiFlexGroup>
            ))}
          </EuiFlyoutBody>
        </EuiFlyout>
      )}
      <EuiFlexItem
        style={{
          background: "#FFFFFF",
          borderBottom: "1px solid #D3DAE6",
          alignItems: "center",
        }}
        grow={false}
      >
        <EuiFlexGroup
          gutterSize="none"
          responsive={false}
          style={{
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
                <EuiFlexItem grow={false} style={{ marginLeft: 16 }}>
                  <EuiHeaderLinks>
                    {items.map(({ id, name, onClick }) => (
                      <EuiHeaderLink
                        style={{ fontWeight: "bold" }}
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
                {userName && (
                  <EuiHeaderSectionItemButton
                    onClick={handleNotificationsFlyoutOpen}
                    notification={hasNewNotifications}
                  >
                    <EuiIcon type="bell" />
                  </EuiHeaderSectionItemButton>
                )}
                <EuiFlexItem>
                  <div>
                    <EuiCollapsibleNav
                      isOpen={isNavigationFlyoutOpen}
                      button={
                        <EuiHeaderSectionItemButton
                          onClick={handleNavigationFlyoutOpen}
                        >
                          <EuiIcon type="menu" size="m" />
                        </EuiHeaderSectionItemButton>
                      }
                      onClose={handleNavigationFlyoutClose}
                    >
                      <EuiFlexGroup
                        gutterSize="none"
                        responsive={false}
                        direction="column"
                        style={{ overflow: "hidden" }}
                      >
                        {userName && (
                          <EuiFlexItem
                            grow={false}
                            style={{
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
                              <EuiFlexItem style={{ paddingLeft: 8 }}>
                                <EuiText
                                  style={{
                                    marginBottom: 8,
                                    marginTop: 4,
                                    fontWeight: "bold",
                                  }}
                                >
                                  {userName}
                                </EuiText>
                                <div>
                                  <EuiLink
                                    style={{ marginBottom: 8 }}
                                    onClick={handleMyAccount}
                                  >
                                    {myAccountText}
                                  </EuiLink>
                                </div>
                                <div>
                                  <EuiLink onClick={handleSignOut}>
                                    {signOutText}
                                  </EuiLink>
                                </div>
                              </EuiFlexItem>
                            </EuiFlexGroup>
                          </EuiFlexItem>
                        )}
                        <EuiFlexItem
                          className="eui-yScroll"
                          style={{ padding: 16 }}
                        >
                          {items.map(({ id, name, onClick }) => (
                            <div key={id}>
                              <EuiLink
                                color="text"
                                style={{ padding: 8, fontWeight: "bold" }}
                                onClick={() => {
                                  onClick();
                                  handleNavigationFlyoutClose();
                                }}
                              >
                                {name}
                              </EuiLink>
                            </div>
                          ))}
                        </EuiFlexItem>
                        <EuiFlexItem
                          grow={false}
                          style={{
                            padding: 16,
                            borderTop: "1px solid #D3DAE6",
                          }}
                        >
                          {!userName && (
                            <>
                              <EuiButton
                                style={{ marginBottom: 8 }}
                                onClick={handleSignIn}
                              >
                                {signInText}
                              </EuiButton>
                              <EuiButton fill={true} onClick={handleTryFree}>
                                {tryFreeText}
                              </EuiButton>
                            </>
                          )}
                          {userName && (
                            <EuiButton fill={true} onClick={handleApplication}>
                              {applicationText}
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
                      <EuiButton
                        style={{ marginRight: 16 }}
                        onClick={handleSignIn}
                      >
                        {signInText}
                      </EuiButton>
                      <EuiButton fill={true} onClick={handleTryFree}>
                        {tryFreeText}
                      </EuiButton>
                    </div>
                  </EuiFlexItem>
                )}
                {userName && (
                  <>
                    <EuiFlexItem>
                      <EuiHeaderLink
                        style={{ fontWeight: "bold" }}
                        onClick={handleApplication}
                      >
                        {applicationText}
                      </EuiHeaderLink>
                    </EuiFlexItem>
                    <EuiHeaderSectionItemButton
                      onClick={handleNotificationsFlyoutOpen}
                      notification={hasNewNotifications}
                    >
                      <EuiIcon type="bell" />
                    </EuiHeaderSectionItemButton>
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
                              <EuiText style={{ fontWeight: "bold" }}>
                                {userName}
                              </EuiText>
                              <EuiSpacer size="m" />
                              <EuiFlexGroup>
                                <EuiFlexItem>
                                  <EuiFlexGroup justifyContent="spaceBetween">
                                    <EuiFlexItem grow={false}>
                                      <EuiLink onClick={handleMyAccount}>
                                        {myAccountText}
                                      </EuiLink>
                                    </EuiFlexItem>
                                    <EuiFlexItem grow={false}>
                                      <EuiLink onClick={handleSignOut}>
                                        {signOutText}
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
    </>
  );
};
