import { render } from "@testing-library/react";

import { Board } from "../Board";

it("renders a state matrix", () => {
  // prettier-ignore
  const stateMatrix = [
    [false, false, false, false, false],
    [false, true,  false, true,  false],
    [false, false, true,  false, false],
    [false, true,  false, true,  false],
    [false, false, false, false, false],
  ];

  const { container } = render(<Board stateMatrix={stateMatrix} />);
  expect(container).toMatchSnapshot();
});
