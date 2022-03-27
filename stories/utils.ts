import path from "path";
import { Page } from "puppeteer";
import sha1 from "sha1";

export function getCases(variants: any) {
  return (function recurse(keys) {
    if (!keys.length) return [{}];
    let result = recurse(keys.slice(1));
    return variants[keys[0]].reduce(
      (acc: any, value: any) =>
        acc.concat(
          result.map((item: any) =>
            Object.assign({}, item, { [keys[0]]: value })
          )
        ),
      []
    );
  })(Object.keys(variants));
}

export function getReadmeText(props: any) {
  return JSON.stringify(props, null, 4).replace(/["{[\,}\]]/g, "");
}

export function getStoryName(props: any) {
  const modifiedProps = { ...props };
  Object.keys(modifiedProps).map((key) => {
    const item = modifiedProps[key];
    if (item instanceof Array) {
      modifiedProps[key] = item.length;
    }
  });
  return sha1(JSON.stringify(modifiedProps));
}

export function getMatchOptions(device: "iphone" | "macbook") {
  return ({ context }: any) => {
    const snapshotPath = path.join(
      path.dirname(context.parameters.fileName),
      `snapshots-${device}`,
      context.title
    );
    return { customSnapshotsDir: snapshotPath };
  };
}

export function beforeScreenshot(device: "iphone" | "macbook") {
  const viewport = { width: 0, height: 0 };
  if (device === "iphone") {
    viewport.width = 375;
    viewport.height = 667;
  } else if (device === "macbook") {
    viewport.width = 1280;
    viewport.height = 800;
  }
  const ignoredElementsSelectors = ["euiLoadingSpinner"];
  return (page: Page) =>
    new Promise<void>((resolve) =>
      page.setViewport(viewport).then(() => {
        page
          .evaluate(disableAnimationElements, ignoredElementsSelectors)
          .then(() => {
            setTimeout(() => {
              resolve();
            }, 600);
          });
      })
    );
}

function disableAnimationElements(ignoredElementsSelectors: string[]) {
  const animationSelectors: any = ignoredElementsSelectors.map(
    (animationClass) => `[class*='${animationClass}']`
  );
  const animatedPageElements = document.querySelectorAll(animationSelectors);
  animatedPageElements.forEach((pageElement) => {
    pageElement.style.visibility = "hidden";
  });
}
