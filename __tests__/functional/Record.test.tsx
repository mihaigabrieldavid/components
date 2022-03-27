import { htmlIdGenerator } from "@elastic/eui";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { Record } from "../../src";
import "@testing-library/jest-dom";

jest.useFakeTimers();

const actions = "Acțiuni";
const action = htmlIdGenerator()();

// Test 1
test("works as expected", () => {
  render(
    <Record
      initialIsPopoverOpen={false}
      actions={[
        { id: "copy", name: "Copy", onClick: jest.fn() },
        { id: "edit", name: action, onClick: jest.fn() },
      ]}
      breadcrumbs={[]}
      isDeleting={false}
      isUpdating={false}
      canDelete={false}
      canUpdate={false}
      showDeleteButton={true}
      itemText="Factură"
      status="loaded"
      onUpdate={jest.fn()}
      onDelete={jest.fn()}
    >
      <></>
    </Record>
  );
  expect(screen.queryByText(action)).toBeNull();
  // Flow 1
  fireEvent.click(
    screen.getByRole("button", {
      name: actions,
    })
  );
  expect(screen.getByText(action)).toBeInTheDocument();
  // Flow 2
  fireEvent.click(
    screen.getByRole("button", {
      name: actions,
    })
  );
  act(() => {
    jest.advanceTimersByTime(1000);
  });
  expect(screen.queryByText(action)).toBeNull();
});
