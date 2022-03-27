import { htmlIdGenerator } from "@elastic/eui";
import { fireEvent, render, screen } from "@testing-library/react";
import { PermissionButton } from "../../src";
import "@testing-library/jest-dom";

const button = htmlIdGenerator()();
const closeButton = "Închide";
const restrictedAction = "Acțiune restricționată";

// Test 1
test("works as expected when hasPermission is false", () => {
  render(
    <PermissionButton
      initialIsModalVisible={false}
      color="primary"
      hasPermission={false}
      isLoading={false}
      onClick={jest.fn()}
    >
      {button}
    </PermissionButton>
  );
  expect(screen.queryByText(restrictedAction)).toBeNull();
  // Flow 1
  fireEvent.click(
    screen.getByRole("button", {
      name: button,
    })
  );
  expect(screen.getByText(restrictedAction)).toBeInTheDocument();
  // Flow 2
  fireEvent.click(
    screen.getByRole("button", {
      name: closeButton,
    })
  );
  expect(screen.queryByText(restrictedAction)).toBeNull();
});

// Test 2
test("works as expected when hasPermission is true", () => {
  render(
    <PermissionButton
      initialIsModalVisible={false}
      color="primary"
      hasPermission={true}
      isLoading={false}
      onClick={jest.fn()}
    >
      {button}
    </PermissionButton>
  );
  expect(screen.queryByText(restrictedAction)).toBeNull();
  // Flow 1
  fireEvent.click(
    screen.getByRole("button", {
      name: button,
    })
  );
  expect(screen.queryByText(restrictedAction)).toBeNull();
});
