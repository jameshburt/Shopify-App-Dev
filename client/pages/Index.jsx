import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { ExternalMinor } from "@shopify/polaris-icons";
import {
  Button,
  Card,
  HorizontalStack,
  Layout,
  Page,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { navigate } from "raviger";
import React from "react";

const HomePage = () => {
  const app = useAppBridge();
  const redirect = Redirect.create(app);

  return (
    <>
      <Page title="Home">
        <Layout>
          <Layout.Section fullWidth>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  Debug Cards
                </Text>
                <Text>
                  Explore how the repository handles data fetching from the
                  backend, App Proxy, making GraphQL requests, Billing API and
                  more.
                </Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    primary
                    onClick={() => {
                      navigate("/debug");
                    }}
                  >
                    Debug Cards
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  App Bridge CDN
                </Text>
                <Text>
                  App Bridge has changed. Read more about it in the docs
                </Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    primary
                    external
                    icon={ExternalMinor}
                    onClick={() => {
                      redirect.dispatch(Redirect.Action.REMOTE, {
                        url: "https://shopify.dev/docs/api/app-bridge-library/reference",
                        newContext: true,
                      });
                    }}
                  >
                    Explore
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  Repository
                </Text>
                <Text>
                  Found a bug? Open an issue on the repository, or star on
                  GitHub
                </Text>
                <HorizontalStack wrap={false} align="end" gap="2">
                  <Button
                    external
                    icon={ExternalMinor}
                    onClick={() => {
                      redirect.dispatch(Redirect.Action.REMOTE, {
                        url: "https://github.com/kinngh/shopify-node-express-mongodb-app/issues?q=is%3Aissue",
                        newContext: true,
                      });
                    }}
                  >
                    Issues
                  </Button>
                  <Button
                    external
                    primary
                    icon={ExternalMinor}
                    onClick={() => {
                      redirect.dispatch(Redirect.Action.REMOTE, {
                        url: "https://github.com/kinngh/shopify-node-express-mongodb-app",
                        newContext: true,
                      });
                    }}
                  >
                    Star
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  Course
                </Text>
                <Text>
                  [BETA] I'm building course as a live service on How To Build
                  Shopify Apps
                </Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    external
                    primary
                    icon={ExternalMinor}
                    onClick={() => {
                      redirect.dispatch(Redirect.Action.REMOTE, {
                        url: "https://kinngh.gumroad.com/l/how-to-make-shopify-apps?utm_source=boilerplate&utm_medium=expressjs",
                        newContext: true,
                      });
                    }}
                  >
                    Buy
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf />
        </Layout>
      </Page>
    </>
  );
};

export default HomePage;
