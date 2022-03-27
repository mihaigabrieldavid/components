import { htmlIdGenerator } from "@elastic/eui";
import { fireEvent, render, screen } from "@testing-library/react";
import { DeleteButton } from "../../src";
import "@testing-library/jest-dom";

const deleteButton = htmlIdGenerator()();
const confirmButton = "Da, continui";
const cancelButton = "Nu, renunț";
const pleaseConfirm = "Te rugăm să confirmi";
const closeButton = "Închide";
const restrictedAction = "Acțiune restricționată";

// Test 1
test("works as expected when hasPermission is true", () => {
  render(
    <DeleteButton
      initialIsModalVisible={false}
      hasPermission={true}
      isLoading={false}
      onClick={jest.fn()}
    >
      {deleteButton}
    </DeleteButton>
  );
  expect(screen.queryByText(pleaseConfirm)).toBeNull();
  // Flow 1
  fireEvent.click(
    screen.getByRole("button", {
      name: deleteButton,
    })
  );
  expect(screen.getByText(pleaseConfirm)).toBeInTheDocument();
  // Flow 2
  fireEvent.click(
    screen.getByRole("button", {
      name: confirmButton,
    })
  );
  expect(screen.queryByText(pleaseConfirm)).toBeNull();
  // Flow 3
  fireEvent.click(
    screen.getByRole("button", {
      name: deleteButton,
    })
  );
  fireEvent.click(
    screen.getByRole("button", {
      name: cancelButton,
    })
  );
  expect(screen.queryByText(pleaseConfirm)).toBeNull();
});

// Test 2
test("works as expected when hasPermission is false", () => {
  render(
    <DeleteButton
      initialIsModalVisible={false}
      hasPermission={false}
      isLoading={false}
      onClick={jest.fn()}
    >
      {deleteButton}
    </DeleteButton>
  );
  expect(screen.queryByText(restrictedAction)).toBeNull();
  // Flow 1
  fireEvent.click(
    screen.getByRole("button", {
      name: deleteButton,
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
